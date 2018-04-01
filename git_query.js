var git = require('simple-git')();
var shellParser = require('node-shell-parser');

git.diff(['--name-status', '4dbc89b3286690e346f8d1b7c597396a96d4f110^', '4dbc89b3286690e346f8d1b7c597396a96d4f110'], function(err, result) {
    var aListOfFiles = result.split('\n');
    console.log(aListOfFiles[0]);
});