import fs from 'fs';

// Write a .htaccess file to set the correct 404 page

function writeHtaccess(base, dir, logger) {
  const file = dir.pathname + '.htaccess';
  const contents = `ErrorDocument 404 ${base}/404.html\n`;
  fs.writeFileSync(file, contents);
  logger.info(`Wrote .htaccess file to ${file}`);
}

export default function (base) {
  return {
    name: 'myHtaccess',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        writeHtaccess(base, dir, logger);
      },
    },
  };
}
