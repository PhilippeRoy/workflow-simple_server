var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  path = require('path');

// Connect server
gulp.task('connect', function() {
  connect.server({
    root: ['.','public'],
    livereload: true
  });
});

// HTML
gulp.task('html', function () {
  gulp.src('./public/**/*.html')
    .pipe(connect.reload());
});

// CSS
gulp.task('css', function () {
  gulp.src('./public/**/*.css')
    .pipe(connect.reload());
});

// // LESS
// gulp.task('less', function () {
//   gulp.src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./public/css'))
//     .pipe(connect.reload());
// });


// Watch
gulp.task('watch', function () {
  gulp.watch(['./public/**/*.html'], ['html']);
  gulp.watch(['./public/**/*.css'], ['css']);

});

// // Watch Less
// gulp.task('watch-less', function () {
//   gulp.watch(['./views/**/*.html'], ['html']);
//   gulp.watch(['./less/**/*.less'], ['less']);
//
// });
//
// // Watch Sass
// gulp.task('watch-less', function () {
//   gulp.watch(['./views/**/*.html'], ['html']);
//   gulp.watch(['./scss/**/*.scss'], ['sass']);
//
// });

// Task
gulp.task('default', ['connect', 'watch']);
// gulp.task('less', ['connect', 'watch-less']);
// gulp.task('sass', ['connect', 'watch-sass']);
