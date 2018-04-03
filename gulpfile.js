var gulp = require('gulp');
var util = require('gulp-util');
var jsBeautify = require('js-beautify');
var git = require('simple-git')();

gulp.task('default', function() {
    console.log("Hello World!");
    git.diff(['--cached', '--name-only', '--diff-filter=ACM'], function (err, results) {
        var aFiles = results.trim().split('\n');
        for (var i = 0; i < aFiles.length; i++) {
            var sFile = aFiles[i];
            console.log(sFile);
            jsBeautify(sFile);
        }
    });
    throw new util.PluginError('Test', 'Plugin Error', {showStack: false});
});