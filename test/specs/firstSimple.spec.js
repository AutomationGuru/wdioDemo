describe('my awesome website', () => {
    it('should do some chai assertions', () => {
        browser.url('https://clipboardjs.com/');
        
        $('//*[@id="example-target"]/div').moveTo();
        $('//*[@id="example-target"]/div/span/button').click();
        $('//*[@id="example-target"]/div/input').click();
        browser.pause(1000);
        browser.keys(['Command','v']);
        browser.keys(['Command','v']);
        browser.keys(['COMMAND','v']);
        browser.keys(['COMMAND','v']);
        browser.keys(['META','v']);
        browser.keys(['META','v']);
        console.log($('//*[@id="example-target"]/div/input').getAttribute('value')) //
    });
});