# wdioDemo
This is a WebdriverIO project for a responsive website

# Geting started
- Start the node js project `npm init`   
- Installations:    
    wdio dependencies: 
    `npm i --save-dev @wdio/cli`   
    This installs the dependencies of your project and also 
    `./node_modules/.bin/wdio config` creates the config file    
    Install Babel
    `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`    
    Install Chai for assertion   
    `npm install chai --save-dev`
    Install Spec reporter   
    `npm install @wdio/spec-reporter --save-dev`   
    SELENIUM STANDALONE SERVICE
    `npm install @wdio/selenium-standalone-service --save-dev`
    Add the selenium service locally and also the args passed is used at the time of install and also at the start   
    Report

# WRITING TESTS
## Selectors   
Ways to identify uniquily the DOM elements on the page
    * CSS Selector - Use css identifier to find the element - $(<css selector>)   
    * Text Link (Exact and partially)  : $('=Text') or $('=Text*') With regx   
    * ID or classname : $(.main_nav) where main_nav is a class name in DOM   
    * 


- POM - Page object model   
   


