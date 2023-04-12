local logging = require 'logging'

-- Figures filter
--
-- Finds figures in the document and
-- (1) Moves their caption into the right place (by default pandoc uses the SVG's title
--     for the caption)
-- (2) Applies a width to the image, extracted from the figure tag

-- Return true if a block matches a HTML tag with string `tag`
local function is_tag(block, tag)
   return block and block.t == 'RawBlock'
      and block.format == 'html'
      and string.sub(block.text, 1, #tag) == tag
end

-- True if the block matches the HTML tag `<figure`
local function is_figure_tag(block)
   return is_tag(block, '<figure')
end

-- True if the block has type Para
local function is_para(block)
   return block and block.t == 'Para'
end

-- A Figure
local function is_figure(block)
   return block.t == 'Figure'
end

-- A Div containing a Figure
local function is_div_figure(block)
   return block.t == 'Div' and is_figure(block.content[1])
end

-- Find index of the paragraph containing the actual figure or return nil if not found
local function find_figure(blocks, i)
   local j = i + 1
   while blocks[j] do
      if is_figure(blocks[j]) or is_div_figure(blocks[j]) then
         return j
      end
      j = j + 1
   end
   logging.temp('block', blocks[i-1])
   assert(false, 'Figures filter: Figure not found\n')
end

-- Find index of the paragraph containing the caption block or return nil if not found
-- This will be immediately after a html RawBlock with text '<figcaption>'
local function find_caption(blocks, i)
   local j = i + 1
   while blocks[j] do
      if is_tag(blocks[j], '<figcaption>') and is_para(blocks[j+1]) then
         if not is_tag(blocks[j+2], '</figcaption>') then
            io.stderr:write('Figures filter: Multi-paragraph caption found\n')
         end
         return j + 1
      end
      j = j + 1
   end
   logging.temp('block', blocks[i-1])
   assert(false, 'Figures filter: Caption not found\n')
end

-- Find index of the paragraph containing the closing </figure> tag
local function find_end_figure_tag(blocks, i)
   local j = i
   while blocks[j] do
      if is_tag(blocks[j], '</figure>') then
         return j
      end
      j = j + 1
   end
   assert(false, 'Figures filter: Closing </figure> tag not found\n')
end

-- Get the image width from the starting figure html block
local function get_figure_width(block)
   assert(is_figure_tag(block), "Figures filter: called get_figure_width on non figure tag")
   return string.match(block.text, 'width:[^%d]*(%d+%%)')
end

-- The figure might be wrapped in a div, so extract it as necessary
local function get_src_from_figure(block)
   if is_figure(block) then
      return block.content[1].content[1].src
   end
   if is_div_figure(block) then
      return block.content[1].content[1].content[1].src
   end
   logging.temp('block', block)
   assert(false, "Figures filter: unable to get figure from this block")
end

-- Create a new figure with the given parameters
local function make_figure(src, caption, attr)
   return pandoc.Figure(pandoc.Image(caption, src, '', attr), {caption, ''} , attr)
end

function Blocks (blocks)

--[[
   print("***Input***")
   logging.temp('Figures', blocks)
--]]

   -- Go from end to start to avoid problems with shifting indices.
   for i = #blocks-1, 1, -1 do

      if is_figure_tag(blocks[i]) then

         local figure_width = get_figure_width(blocks[i])
         local figure_close = find_end_figure_tag(blocks, i)

         local figure_idx = find_figure(blocks, i)
         local caption_idx = find_caption(blocks, i)
         local caption = blocks[caption_idx].content
         local src = get_src_from_figure(blocks[figure_idx])
         
         -- Sanity checks
         if caption_idx <= figure_idx then
            logging.temp('block', blocks[i-1])
            assert(false, "Figures filter: Caption index (" .. caption_idx
                   .. ") is not greater than figure index (" .. figure_idx .. ")")
         end
         if caption_idx - figure_idx > 5 then
            logging.temp('block', blocks[i-1])
            assert(false, "Figures filter: Caption index (" .. caption_idx
                   .. ") is much greater than figure index (" .. figure_idx .. ")")
         end

         -- Remove existing figure and captions (last to first)
         blocks:remove(figure_close)    -- The closing </figure> tag
         blocks:remove(caption_idx + 1) -- The closing caption tag (hopefully)
         blocks:remove(caption_idx + 0) -- The caption text
         blocks:remove(caption_idx - 1) -- The opening caption tag
         blocks:remove(figure_idx)      -- The figure para
         blocks:remove(i)               -- The opening <figure> tag

         -- Insert new figure
         local attr = figure_width
            and pandoc.Attr('', {}, {width = figure_width})
            or pandoc.Attr ('', {}, {})
         blocks:insert(i, make_figure(src, caption, attr))

      end
   end

--[[
   -- print("***Output***")
   -- logging.temp('Figures', blocks)
--]]

   return blocks

end
