

// var selenium = require('selenium-standalone');
var webdriverio = require('webdriverio');

// selenium.start(function (err, child) {
//     child.stderr.on('data', function (data) {
//         // console.log("Hello World");
//         console.log(data.toString());
//     });
// });

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

var browser = webdriverio
    .remote(options)
    .init()
    .url("https://google.com.au")
    // .url('http://rahulrajara3268:8081/start.swe?SWECmd=GotoView&SWEView=Account+Screen+Homepage+View&SWERF=1&SWEHo=rahulrajara3268&SWEBU=1');

browser.getTitle().then(function (title) {
    console.log('Title is: ' + title);
});

// browser.execute(function () {
//     console.log("Welcome from WebDriverIO");
//     setTimeout(() => {
//         SiebelApp.S_App.GotoView('Action Screen Homepage View');
//     }, 3000);
// });