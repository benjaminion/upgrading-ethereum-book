-- Summaries filter
--
-- Find summary boxes in the text and wrap them in a `summarybox` environment.

local function is_summary(div)
   for _, class in pairs(div.classes) do
      if class == 'summary' then
         return true
      end
   end
   return false
end

function Div (div)

   if is_summary(div) then
      return {
         pandoc.RawInline('latex', '\\begin{summarybox}'),
         div,
         pandoc.RawInline('latex', '\\end{summarybox}')
      }
   else
      return div
   end

end
