const path = require('path');
const chai = require('chai');

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: '80.0',
        platformName: 'mac',
        maxInstances: 10,
    }],
    logLevel: 'info',
    bail: 1,
    baseUrl: 'https://www.asos.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register'],
    },
    reporters: [
        'spec',
    ],
    // Wdio Timeouts
    // This is the global time out value for all Waits in the tests/PageObject, example:
    waitforTimeout: 25000,
    // This is a wait interval after which wdio looks for presence/absence of an element
    waitforInterval: 100,
    services: ['selenium-standalone'],
    seleniumArgs: {
        drivers: {
            chrome: {
                version: '80.0.3987.16',
                arch: process.arch,
                baseURL: 'https://chromedriver.storage.googleapis.com',
            },
        },
    },
    seleniumInstallArgs: {
        drivers: {
            chrome: {
                version: '80.0.3987.16',
                arch: process.arch,
                baseURL: 'https://chromedriver.storage.googleapis.com',
            },
        },
    },
    onPrepare: function (config, capabilities) {

    },
    // beforeSession: function (config, capabilities, specs) {
    // },
    before: function (capabilities, specs) {
        browser.maximizeWindow();
        // Set Global Timeouts
        // Selenium Timeouts
        // 1. session script timeout that specifies a time to wait for asynchronous scripts to run, 60 seconds time out
        browser.setTimeout({ 'script': 60000 });
        // 2. Page load time out of 10 seconds
        browser.setTimeout({ 'pageLoad': 30000 });
        // 3. Implicit Wait (waiting on an element to appear or disappear in DOM)
        browser.setTimeout({ 'implicit': 10000 });
        global.assert = chai.assert;
        global.should = chai.should();

    },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test) {
    // },
    // beforeHook: function () {
    // },
    // afterHook: function () {
    // },
    afterTest: function (test) {
        if (test.passed) {
            return;
        }
        // get current test title and clean it, to use it as file name
        const filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
        // build file path
        const filePath = path.join(process.cwd(), `FailTest-${filename}.png`);
        // save screenshot
        browser.saveScreenshot(filePath);
        console.log('----------------------------TEST FAILED----------------------------\n');
        console.log(test.title, '\t :Screenshot location: ', filePath, '\n');
    },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
