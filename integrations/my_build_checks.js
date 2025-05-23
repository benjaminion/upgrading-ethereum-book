import runChecks from '../bin/build/prebuild.js';

function buildChecks(logger) {
  logger.info('Running pre-build checks:');
  runChecks(logger, false);
}

export default function() {
  let doChecks;
  return {
    name: 'myBuildChecks',
    hooks: {
      'astro:config:setup': ({ command }) => {
        doChecks = (command === 'build');
      },
      'astro:config:done': ({ logger }) => {
        if (doChecks) {
          buildChecks(logger);
        }
      },
    },
  };
}
