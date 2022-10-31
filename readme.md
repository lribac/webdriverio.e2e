# WebDriverIO e2e framework
UI and API testing with [WebdriverIO](https://webdriver.io/) test framework. 

## Prerequisites 
1. node (version 16 and above)
2. browsers (Chrome and Firefox)
3. docker (only if tests are ran in docker containers with Selenium grid)

## Run tests
1. Run all tests in Chrome or Firefox browser
   ```npm run chrome```
   ```npm run firefox```
2. Run specific test(s)
   ```npm run chrome login.spec.js```
3. Run ui or api test suite only
   ```npm run ui-tests```
   ```npm run api-tests```
4. Run tests in docker containers on Selenium grid
   ```npm run chrome-docker```

note: WebDriverIO is a test framework designed for UI automation. Therefore, running api tests will still create a browser session, which is not ideal. For isolated API test framework use other dedicated frameworks like [Frisby](https://docs.frisbyjs.com/), [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/).
