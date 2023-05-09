-- Linebreaks filter
--
-- Converts
--   - html <br/> into pandoc linebreaks, and
--   - html <wbr/> into latex suggested linebreaks.

function RawInline (el)
   if el.format == 'html' then
      if el.text == '<br/>' then
         return pandoc.LineBreak()
      end
      if el.text == '<wbr/>' then
         return pandoc.RawInline('latex', '\\linebreak[0]')
      end
   end
   return el
end
