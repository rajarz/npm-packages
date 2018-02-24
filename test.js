// java -jar -Dwebdriver.chrome.driver='chromedriver'

var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

var browser = webdriverio
    .remote(options)
    .init()
    .url('http://rahulrajara3268:8081/start.swe?SWECmd=GotoView&SWEView=Account+Screen+Homepage+View&SWERF=1&SWEHo=rahulrajara3268&SWEBU=1');

browser.getTitle().then(function (title) {
    console.log('Title is: ' + title);
    // outputs:
    // "Title is: WebdriverIO (Software) at DuckDuckGo"
});

browser.waitUntil(function () {
    return true;
}, 5000);

browser.execute(function () {
    SiebelApp.S_App.GotoView('Action Screen Homepage View');
});