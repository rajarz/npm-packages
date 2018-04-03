var gulp = require('gulp');
var util = require('gulp-util');
var jsBeautify = require('js-beautify').js_beautify;
var git = require('simple-git')();
var fs = require('fs');

gulp.task('default', function() {
    console.log("Hello World!");
    // git.diff(['--cached', '--name-only', '--diff-filter=ACM'], function (err, results) {
    //     var aFiles = results.trim().split('\n');
    //     for (var i = 0; i < aFiles.length; i++) {
    //         var sFile = aFiles[i];
    //         var data = fs.readFileSync(sFile, 'utf8');
    //         console.log(data);
    //         var newData = jsBeautify(sFile);
    //         if (sFile.indexOf('js') > -1 && data.toString() !== newData.toString()) {
    //             // throw new util.PluginError('Test', 'Ensure VSCode Format is turned on', { showStack: false });
    //         }
    //     }
    // });
});