'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
const tscConfig = require('./tsconfig.json');

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


gulp.task('clean-all', function() {
  gulp.src('.tmp/')
      .pipe( clean() );
});


gulp.task('clean-serve', function() {
  return gulp.src('.tmp/serve/')
            .pipe( clean() );
});

//TODO implement open after serve
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


//TODO create a build process
//TODO implement gulp-usemin
gulp.task('htmlmin', function() {
  return gulp.src('app/**/*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist/'));
});


gulp.task('typescript-dist', function() {
  var tsResult = tsProject.src().pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('dist/'));
});
