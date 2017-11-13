var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var browserify = require('gulp-browserify');
var git = require('gulp-git');
var del = require('del');
var obfuscate = require("gulp-javascript-obfuscator");

//script paths
var jsDest = 'distribution';

gulp.task('clean', function(cb){
    del('./root/**', {force:true}).then(function(){
        console.log('clean completed');
        cb()
    })
})

gulp.task('clone', ['clean'], function(cb){
    // download any git commit
    git.clone('https://github.com/svarunan/test', {args: './root/'}, function(err) {
        if(err){
            console.log("git clone error",err);
        }else{
            console.log("clone done");
        }
        cb();
    });
});

gulp.task('obfuscate', function(cb){

});

gulp.task('default', ['clean', 'clone'], function(){
    console.log('starting default task');
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
        .pipe(gulp.dest(jsDest))
        .once('end', function(){
            gulp.src('distribution/app.js')
                .pipe(obfuscate())
                .pipe(rename('obfuscate.js'))
                .pipe(gulp.dest(jsDest))
                .once('end', function(){
                    console.log('obfuscate done');
                })
        })   
})