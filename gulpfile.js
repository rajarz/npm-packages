var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('default', function() {
    console.log("Hello World!");
    throw new util.PluginError('Test', 'Plugin Error', {showStack: false});
});