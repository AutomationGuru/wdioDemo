
function findInShadowDom(selectors) {    if (!Array.isArray(selectors)) {
      selectors = [selectors];
    }
  
    function findElement(selectors) {
      var currentElement = document;
      for (var i = 0; i < selectors.length; i++) {
        if (i > 0) {
          currentElement = currentElement.shadowRoot;
        }
  
        if (currentElement) {
          currentElement = currentElement.querySelector(selectors[i]);
        }
  
        if (!currentElement) {
          break;
        }
      }
  
      return currentElement;
    }
  
    if (!(document.body.createShadowRoot || document.body.attachShadow)) {
      selectors = [selectors.join(' ')];
    }
  
    return findElement(selectors);
  }
  
  /**
   * Add a command to return an element within a shadow dom.
   * The command takes an array of selectors. Each subsequent
   * array member is within the preceding element's shadow dom.
   *
   * Example:
   *
   *     const elem = browser.shadowDomElement(['foo-bar', 'bar-baz', 'baz-foo']);
   *
   * Browsers which do not have native ShadowDOM support assume each selector is a direct
   * descendant of the parent.
   */
  browser.addCommand("shadowDomElement", function(selector) {
    return this.execute(findInShadowDom, selector);
  });



  // describe('my awesome website', () => {
//     it('should do some chai assertions', () => {
//         browser.url('https://clipboardjs.com/');
        
//         $('//*[@id="example-target"]/div').moveTo();
//         $('//*[@id="example-target"]/div/span/button').click();
//         $('//*[@id="example-target"]/div/input').click();
//         browser.pause(1000);
//         browser.keys(['Command','v']);
//         browser.keys(['Command','v']);
//         browser.keys(['COMMAND','v']);
//         browser.keys(['COMMAND','v']);
//         browser.keys(['META','v']);
//         browser.keys(['META','v']);
//         console.log($('//*[@id="example-target"]/div/input').getAttribute('value')) //
//     });
// });
describe('my awesome website', () => {
    it('should do some chai assertions', () => {
        browser.url('chrome://downloads');
        browser.pause(1000);
        const elem = browser.shadowDomElement(['downloads-manager','downloads-toolbar', 'cr-toolbar', 'cr-icon-button']).click();            
        browser.pause(1000);
        // console.log(elem);
        // console.log(elem.getText());
    });
});
