-- Codeblocks filter
--
-- Pandoc's `--listings` mode is good, but also gets applied to inline code, which causes
-- problems. So we don't do that, but intead process code blocks here to insert the
-- `lstlisting` environment.

local langs = {
   ['python'] = 'Python',
   ['bash'] = 'bash',
   ['solidity'] = 'Solidity',
   ['json'] = 'JSON',
   ['code'] = '',
   ['none'] = ''
}

function CodeBlock (block)
   local lang_string = '[]'
   local lang_source = block.classes[1]
   local lang = langs[lang_source]
   if lang ~= nil then
      if (#lang > 0) then
         lang_string = '[language=' .. lang .. ']'
      end
   else
      if lang_source then
         print('Codeblocks filter: language ' .. lang_source .. ' is unknown')
      else
         print('Codeblocks filter: language not specified')
      end
   end
   return pandoc.RawBlock('latex',
                          "\\begin{lstlisting}" .. lang_string .. "\n"
                          .. block.text .. "\n"
                          .. "\\end{lstlisting}")
end
