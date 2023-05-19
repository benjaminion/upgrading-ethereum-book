local logging = require 'logging'

-- Links filter
--
-- Normalises all the inter- and intra-page links and targets within the document
-- so it all works when it's made into a single page. Also checks for duplicate anchors
-- and dangling links.
--
-- For best results run this one after the Pagebreaks filter.

local website = 'https://eth2book.info'

local links, targets = {}, {}
local skip = { ["contents"] = true, ["annotated-spec"] = true }

-- Check that there are no duplicate targets
local function check_target(id)
   if targets[id] then
      print('Links filter: target "' .. id .. '" is a duplicate')
   end
   targets[id] = true
end

-- Check that every link has a target
local function check_links()
   for link, v in pairs(links) do
      if not skip[link] and not targets[link] then
         print('Links filter: link "' .. link .. '" points to nothing')
      end
   end
end

-- Normalise anchors:
--  (1) Remove any `-` or `-digit` that may have been introduced by pandoc to deduplicate headers
--  (2) Convert all `_` to `-`
local function norm(id)
   return id:gsub('%-+%d*$', ''):gsub('_', '-')
end

local function is_header(block)
   return block.t == 'Header'
end

local function is_anchor_inline(inline)
   return inline.t == 'RawInline'
      and inline.format == 'html'
      and inline.text:match('^<a id=".*">$')
end

local function is_anchor_block(block)
   return (block.t == 'Para' or block.t == 'Plain') and is_anchor_inline(block.content[1])
end

local function get_page(header)
   local header_last = header.content[#header.content]
   if header_last.t == 'RawInline' then
      return norm(header_last.text:match('<!%-%- /([^*]+)%*? %-%->'):gsub('/', '-'))
   end
   return nil
end

local function get_target(text)
   return norm(text:match('^<a id="(.*)">$'))
end

local function get_header_id(header)
   return norm(header.attr.identifier)
end

local function update_links(block, page)
   return block:walk {
      Link = function(link)
         local s, t = link.target, ''
         if s:match('^/%.%.') then
            -- Link to a different spec version
            t = website .. s:sub(4)
         elseif s:match('^/') then
            -- Link to another internal page
            t = '#' .. norm(s:sub(2):gsub('[/#]', '-'):gsub('%-%-', '-'))
            links[t:sub(2)] = true
         elseif s:match('^#') then
            -- Link within a page
            t = '#' .. page .. '-' .. norm(s:sub(2))
            links[t:sub(2)] = true
         else
            -- External link
            t = s
         end
         return pandoc.Link(link.content, t, link.title, link.attr)
      end
   }
end

local function new_anchor(id)
   check_target(id)
   return pandoc.Para({pandoc.Span({}, pandoc.Attr(id, {}, {}))})
end

function Pandoc (doc)

   local blocks = doc.blocks

--[[
   print("***Input***")
   logging.temp('Links', blocks)
--]]

   local page = ''
   local idx = 1
   for i = 1, #blocks do

      assert(idx <= #blocks, "Idx longer than blocks: " .. idx .. " " .. #blocks)
      local block = blocks[idx]

      if is_header(block) then

         newpage = get_page(block)
         if newpage ~= nil then
            page = newpage

            -- Insert anchor for each new page
            blocks:insert(idx, new_anchor(page))
            idx = idx + 1
         end

         -- Update the header's id to include the page
         local id = page .. '-' .. get_header_id(block)
         check_target(id)
         block.attr.identifier = id

      elseif is_anchor_block(block) then

         -- There may be multiple anchors within the same Para block
         for j = 1, #block.content do
            local inline = block.content[j]
            if is_anchor_inline(inline) then
               blocks:insert(idx, new_anchor(page .. '-' .. get_target(inline.text)))
               idx = idx + 1
            end
         end

      else

         blocks[idx] = update_links(block, page)

      end

      idx = idx + 1

   end

   check_links()

--[[
   print("***Output***")
   logging.temp('Links', blocks)
--]]

   return pandoc.Pandoc(blocks, doc.meta)

end
