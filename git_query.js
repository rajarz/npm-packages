var git = require('simple-git')();
var shellParser = require('node-shell-parser');

git.revparse(["HEAD"], function(err, results) {
    throw "test";
    console.log(results.trim());
}).diff(['--name-status', '4dbc89b3286690e346f8d1b7c597396a96d4f110^', '4dbc89b3286690e346f8d1b7c597396a96d4f110'], function (err, result) {
    var aListOfFiles = result.split('\n');
    console.log(aListOfFiles[0]);
});
const notifier = require('node-notifier');
const path = require('path');

notifier.notify({
        title: 'My awesome title',
        message: 'Hello from node, Mr. User!',
        sound: true, // Only Notification Center or Windows Toasters
        wait: true // Wait with callback, until user action is taken against notification
    },
    function (err, response) {
        // Response is response from notification
    }
);

notifier.on('click', function (notifierObject, options) {
    // Triggers if `wait: true` and user clicks notification
});

notifier.on('timeout', function (notifierObject, options) {
    // Triggers if `wait: true` and notification closes
});