var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var browserify = require('gulp-browserify');

//script paths
var jsDest = 'distribution';

gulp.task('build', function() {
    // Single entry point to browserify 
    gulp.src('scripts/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(replace("1.0.10","1.0.11"))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .once('error', function (error) {
            console.log('error occured on uglify', error);
        })   
        .pipe(gulp.dest(jsDest));
});