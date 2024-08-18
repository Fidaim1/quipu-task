<h1 align="center">Project Setup Guide</h1>
<p align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="100">
</p>
<p align="center">Welcome to the project setup guide. This document will help you get started with the project, including installing required packages, setting up browsers, running tests, and checking reports.</p>

### Install the required packages

After you have cloned the project from the Github repository you continue with installing the required packages.

```
npm install
```

### Install browsers

```
npx playwright install
```

<p align="center">
  <img src="https://playwright.dev/img/logos/Browsers.png" alt="" width="200">
</p>

### Run Tests

This will run the tests on Chrome by default since we have configured it to run on chrome by default on package.json script.
```
npm run tests
```
<p align="center">
  <img src="https://github.com/microsoft/playwright/assets/13063165/981c1b2b-dc7e-4b85-b241-272b44da6628" alt="" width="600">
</p>

### Check Reports

After the tests have ben run, an html report will be generated under playwright-report folder. Run the following command to open the reporting file. In case of failures, screenshtos, videos and trace files will be generated.

```
npm run report
```

<p align="center">
  <img src="https://github.com/microsoft/playwright/assets/13063165/38ec17a7-9e61-4002-b137-a93812765501" alt="" width="600">
</p># quipu-task
