// Declare all dependencies
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

// All files to watch and lint
var files = ['test/*.js', '*.js', '!node_modules/**', '!**.json'];

gulp.task('mocha', function() {
  return gulp.src('test/*.js').pipe(mocha({reporter: 'default'}));
});
//this is a comment
gulp.task('eslint', function() {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['watch', 'eslint', 'mocha']);

gulp.task('watch', function() {
  return gulp.watch(files, ['eslint', 'mocha'])
});
