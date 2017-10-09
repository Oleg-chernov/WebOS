var gulp = require('gulp'),
    livereload = require('gulp-livereload');

// Default Task
gulp.task('default', function(){
    livereload.listen();
});