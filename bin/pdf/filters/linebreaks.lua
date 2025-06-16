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

-- We now support <span class="wrap">...</span>
-- These spans must contain only raw text (or backquoted code), with no nested elements
function Span (span)
  if span.classes:includes('wrap') then
    if (span.content[1].t == 'Str') then
      return pandoc.RawInline('latex', '\\seqsplit{' .. span.content[1].text .. '}')
    end
    if (span.content[1].t == 'Code') then
      return pandoc.RawInline('latex', '\\texttt{\\seqsplit{' .. span.content[1].text .. '}}')
    end
  end
  return span
end
