local logging = require 'logging'

-- Pagebreaks filter
--
-- Inserts a LaTeX `\newpage` before certain headers.
-- For best results run this one before the Links filter.

-- New pages are signalled in the markdown source by appending a HTML comment to a heading.
local function is_new_page(header)
   if (header.content[#header.content].text) then
      return string.match(header.content[#header.content].text, '<!%-%- .* %-%->')
   end
   print('Pagebreaks filter: unable to parse header')
   logging.temp('Header', header)
end

local function should_insert_break(header)
   return is_new_page(header) and header.level <= 2
end

function Header (header)

   if should_insert_break(header) then
      return {pandoc.RawBlock('latex', '\\newpage{}'), header}
   else
      return header
   end

end
