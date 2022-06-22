// Run the pre-build script standalone to check for issues without doiing a full build

const doPreBuild = require('./prebuild')

const reporter = {
  // Cheat sheets for colours:
  //  - https://tintin.mudhalla.net/info/xterm/
  //  - https://tintin.mudhalla.net/info/256color/

  info: function (m) { console.log('\x1b[38;5;19m%s\x1b[0m %s', 'info', m) },
  warn: function (m) { console.log('\x1b[38;5;130m%s\x1b[0m %s', 'warn', m) },
  error: function (m) { console.log('\x1b[38;5;160m%s\x1b[0m %s', 'error', m) },
  success: function (m) { console.log('\x1b[38;5;34m%s\x1b[0m %s', 'success', m) },
}

doPreBuild(reporter)
