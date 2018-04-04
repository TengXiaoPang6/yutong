'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')

gulp.task('compile-theme-default', function() {
  return gulp.src('./src/styles/z-theme-default.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./src/styles/theme/default'))
})

gulp.task('compile-theme-green', function() {
  return gulp.src('./src/styles/z-theme-green.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./src/styles/theme/green'))
})

gulp.task('compile-element-default', function() {
  return gulp.src('./src/styles/z-element-ui-default.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./src/styles/theme/default'))
})
gulp.task('compile-element-green', function() {
  return gulp.src('./src/styles/z-element-ui-green.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest('./src/styles/theme/green'))
})
gulp.task('copyfont', function() {
  return gulp.src('./node_modules/element-ui/lib/theme-chalk/fonts/**')
    .pipe(gulp.dest('./src/styles/theme/default/fonts'))
})
gulp.task('copyfont1', function() {
  return gulp.src('./node_modules/element-ui/lib/theme-chalk/fonts/**')
    .pipe(gulp.dest('./src/styles/theme/green/fonts'))
})

gulp.task('build', ['compile-theme-default', 'compile-theme-green', 'compile-element-default', 'compile-element-green', 'copyfont', 'copyfont1'])
