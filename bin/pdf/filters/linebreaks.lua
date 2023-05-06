-- Linebreaks filter
--
-- Converts html <br/> into pandoc linebreaks

function RawInline (el)
  if el.format == 'html' and el.text == '<br/>' then
    return pandoc.LineBreak()
  end
end
