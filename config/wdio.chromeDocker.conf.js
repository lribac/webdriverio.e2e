const mainConfig = require('../wdio.conf');
const device = require('../data/mobileDevices');

exports.config = {
  ...mainConfig,
  ...{
    services: ['docker', 'selenium-standalone'],
    screenshotPath: '.errorShots/chrome/',
    dockerOptions: {
      image: 'selenium/selenium-chrome',
      healthcheck: {
        url: 'http://localhost:6666',
        maxRetries: 2,
        inspectInterval: 1000,
        startDelay: 5000,
      },
      options: {
        p: ['6666:4444'],
        shmSize: '2g',
      },
    },
    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
        port: 6666,
        'goog:chromeOptions': {
          mobileEmulation: {
            deviceName: device,
          },
          args: [
            '--window-size=1290,900',
          ],
        },
      },
    ],
  },
};
