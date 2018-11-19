var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Server
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

// Tasks (reload)
gulp.task('dev', ['browserSync'], function(){
    gulp.watch('./*.html', browserSync.reload);
});