-- Summaries filter
--
-- Find summary boxes in the text and wrap them in a `summarybox` environment.

function Div (div)

   if div.classes:includes('summary') then
      return {
         pandoc.RawInline('latex', '\\begin{summarybox}'),
         div,
         pandoc.RawInline('latex', '\\end{summarybox}')
      }
   else
      return div
   end

end
