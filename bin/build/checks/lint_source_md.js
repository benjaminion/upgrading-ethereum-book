const markdownlint = require('markdownlint')

//
// See https://github.com/DavidAnson/markdownlint for the rules and options
//

// Lint check the source markdown file.
module.exports.lintSourceMarkdown = (file) => {

  const options = {
    'files': [ file ],
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
      
      // We have long lines
      'MD013': false,

      // Duplicate headings are ok (they appear on different pages after pre-processing)
      'MD024': false,

      // Multiple top-level titles are ok (they appear on different pages after pre-processing)
      'MD025': false,

      // We have inline html
      'MD033': false,

      // no-space-in-emphasis Spaces inside emphasis markers - gives false positives
      'MD037': false,

      // link-image-reference-definitions - we use these as TODO comments
      'MD053': false,
    }
  }

  const result = markdownlint.sync(options)

  return (result[file].length > 0) ? result.toString() : null
}
