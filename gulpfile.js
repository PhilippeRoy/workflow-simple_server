var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  path = require('path');

// Connect server
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// HTML
gulp.task('html', function () {
  gulp.src('./views/**/*.html')
    .pipe(connect.reload());
});

// LESS
gulp.task('less', function () {
  gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload());
});

// Watch
gulp.task('watch', function () {
  gulp.watch(['./views/**/*.html'], ['html']);
  gulp.watch(['./less/**/*.less'], ['less']);

});

// Task
gulp.task('default', ['connect', 'watch']);
