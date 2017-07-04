'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const serve = require('gulp-serve');
const { exec } = require('child_process');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
//const concat = require('gulp-concat');
//const uglify = require('gulp-uglify');

gulp.task('build', function (cb) {
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});

gulp.task('css', function () {
  return gulp.src('src/global.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', serve('dist'));
