-- Summaries filter
--
-- Find summary boxes in the text and wrap them in a `summarybox` environment.

local function find(list, elem)
   for i=1,#list do
      if list[i] == elem then
         return true
      end
   end
   return false
end

function Div (div)

   if div.classes and find(div.classes, 'summary') then
      return {
         pandoc.RawInline('latex', '\\begin{summarybox}'),
         div,
         pandoc.RawInline('latex', '\\end{summarybox}')
      }
   else
      return div
   end

end
