const mainConfig = require('../wdio.conf');
const device = require('../data/mobileDevices');

const headless = process.env.MODE;

exports.config = {
  ...mainConfig,
  ...{
    services: ['chromedriver', 'intercept'],
    screenshotPath: '.errorShots/chrome/',
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
