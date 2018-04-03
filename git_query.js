var git = require('simple-git')();
var shellParser = require('node-shell-parser');

// git.revparse(["HEAD"], function(err, results) {
//     throw "test";
//     console.log(results.trim());
// }).diff(['--name-status', '4dbc89b3286690e346f8d1b7c597396a96d4f110^', '4dbc89b3286690e346f8d1b7c597396a96d4f110'], function (err, result) {
//     var aListOfFiles = result.split('\n');
//     console.log(aListOfFiles[0]);
// });


const notifier = require('node-notifier');
// String
// notifier.notify('Message');

var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var through = require('vinyl-fs-fake');

gulp.src('package.json')
    .pipe(notify("Hello Gulp!"));