-- Codeblocks filter
--
-- Makes text in code blocks smaller.

-- local size = '\\small'
local size = '\\footnotesize'

function CodeBlock (block)
   return {pandoc.RawBlock('tex', size), block, pandoc.RawBlock('tex', '\\normalsize')}
end
