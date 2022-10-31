const mainConfig = require('../wdio.conf');

const headless = process.env.MODE;

exports.config = {
  ...mainConfig,
  ...{
    services: ['geckodriver'],
    screenshotPath: '.errorShots/firefox/',
    capabilities: [
      {
        maxInstances: 5,
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            `--${headless}`,
          ],
        },
      },
    ],
  },
};
