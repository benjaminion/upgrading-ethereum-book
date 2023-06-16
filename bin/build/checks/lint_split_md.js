const markdownlint = require('markdownlint')

//
// See https://github.com/DavidAnson/markdownlint for the rules and options
//

// Lint check the markdown files after they have been split out from the source document.
// The rules differ slightly from the rules for the original source.
module.exports.lintSplitMarkdown = (files) => {

  const options = {
    'files': files,
    'config': {
      'default': true,

      // Start unordered lists with two spaces of indentation
      'MD007': {
        'indent': 2,
        'start_indented': true,
        'start_indent': 2,
      },

      // We don't want any trailing spaces
      'MD009': {
        'strict': true,
      },

      // Some headings end in ! or ?
      'MD026': {
        'punctuation': '.,;:',
      },

      // We fence all block code with backticks
      'MD046': {
        "style": "fenced",
      },

      // Emphasis style
      'MD049': {
        'style': 'underscore',
      },

      //
      // Disabled rules
      //
      
      // Trailing blank lines are hard to avoid when doing the split
      'MD012': false,

      // We have long lines
      'MD013': false,

      // We have inline html
      'MD033': false,

      // no-space-in-emphasis Spaces inside emphasis markers - gives false positives
      'MD037': false,

      // We don't expect the very first line to be a top-level heading (due to inserted <div>)
      'MD041': false,

      // link-image-reference-definitions - we use these as TODO comments
      'MD053': false,
    }
  }

  const result = markdownlint.sync(options)

  return (Object.values(result).filter(x => x.length > 0).length > 0)
    ? result.toString()
    : null
}
