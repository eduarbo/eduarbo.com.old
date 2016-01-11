var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('assets/css/*.css')
    .pipe(postcss([
      require('postcss-nesting'),
      require('lost'),
      require('autoprefixer'),
      require('cssnext')
    ]))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/css/*.css', ['css']);
});

gulp.task('default', ['css', 'watch']);
