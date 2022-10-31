const mainConfig = require('../wdio.conf');
const device = require('../data/mobileDevices');

const headless = process.env.MODE;

// Selenium Standalone Server with Chrome

exports.config = {
  ...mainConfig,
  ...{
    services: ['selenium-standalone', 'intercept'],
    screenshotPath: '.errorShots/seleniumStandaloneChrome/',
    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
          mobileEmulation: {
            deviceName: device,
          },
          args: [
            `--${headless}`,
            '--window-size=1290,900',
            '--use-fake-ui-for-media-stream',
          ],
        },
      },
    ],
  },
};
