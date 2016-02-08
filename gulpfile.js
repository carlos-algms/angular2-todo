'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var clean = require('gulp-clean');
var connect = require('gulp-connect');
var open = require('gulp-open');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
const tscConfig = require('./tsconfig.json');

var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

//----------------------------


gulp.task('serve', [
  'clean-serve',
  'typescript-serve',
  'connect-serve',
  'watch'
]);


gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/**/*.ts'], ['typescript-serve']);
});


gulp.task('clean-serve', function() {
  return gulp.src('.tmp/serve/')
            .pipe( clean() );
});


gulp.task('connect-serve', function() {
  connect.server({
    port: 8000,
    root: "app",
    livereload: true,
    middleware: function(connect) {
      var app = connect();

      return [
        connect.static( '.tmp/serve/app' ),
        app.use( '/bower_components', connect.static('./bower_components') ),
        app.use( '/node_modules', connect.static('./node_modules') ),
        connect.static( '/app' )
      ];
    }
  });

  return gulp.src('').pipe( open({uri: 'http://localhost:8000'}) );
});


//TODO implement gulp-newer
gulp.task('typescript-serve', function() {
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(gulp.dest('.tmp/serve/'))
    .pipe(connect.reload());
});


gulp.task('html', function () {
  gulp.src('./app/*.html')
      .pipe(connect.reload());
});


//// ------------- BUILD ---------------

gulp.task('build', function (callback) {
  runSequence(
    'clean-dist',
    [ 'htmlmin', 'typescript-dist', 'copy-fonts', 'copy-assets'],
    'usemin',
    callback);
});


gulp.task('clean-dist', function() {
  return gulp.src('dist/')
    .pipe( clean() );
});


gulp.task('htmlmin', function() {
  return gulp.src('app/**/*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist/'));
});


gulp.task('typescript-dist', function() {
  var tsResult = tsProject.src().pipe(ts(tsProject));

  return tsResult.js
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace('app', '');
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('copy-fonts', function () {
  return gulp.src('node_modules/materialize-css/font/**/*', {base: 'node_modules/materialize-css/'})
    .pipe(gulp.dest('dist/'));
});


gulp.task('copy-assets', function () {
  return gulp.src('app/**/*\.{jpg,png,gif,ico}', {base: 'app/'})
    .pipe(gulp.dest('dist/'));
});


gulp.task('usemin', function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [ minifyCss, rev ],
      js: [ uglify, rev ]
      //html: [ minifyHtml({ empty: true }) ],
      //inlinejs: [ uglify() ],
      //inlinecss: [ minifyCss(), 'concat' ]
    }))
    .pipe( gulp.dest('./dist/') );
});


gulp.task('serve-dist', function() {
  connect.server({
    port: 8001,
    root: "dist/",
    livereload: true
  });

  return gulp.src('').pipe( open({uri: 'http://localhost:8001'}) );
});
