var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var browserify = require('gulp-browserify');
var git = require('gulp-git');
var del = require('del');
var obfuscate = require("gulp-javascript-obfuscator");

//script paths
var jsDest = 'distribution';

// clean any previously cloned git files
gulp.task('clean', function(cb){
    del('./root/**', {force:true}).then(function(){
        console.log('clean completed');
        cb()
    })
})

// make a fresh clone of public or private repo
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

// run the default task only after running clean and clone tasks
gulp.task('default', ['clean', 'clone'], function(){
    console.log('starting default task');
    // Single entry point to browserify 
    gulp.src('scripts/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        
        // replace any strings in app.js files
        .pipe(replace("1.0.10","1.0.11"))
        
        // give a name to the redable code
        .pipe(rename('project.js'))
        
        // save it distribution folder
        .pipe(gulp.dest(jsDest))
        
        // do uglify to reducting the file size
        .pipe(rename('project.min.js'))
        .pipe(uglify())

        // capture errors on build process
        .once('error', function (error) {
            console.log('error occured on uglify', error);
        })

        // save the minified file in distribution folder   
        .pipe(gulp.dest(jsDest))

        // once it ends, take the non minifiled file and obfuscate it
        .once('end', function(){
            gulp.src('distribution/project.js')
                .pipe(gulp-javascript-obfuscatoruscate())
                .pipe(rename('obfuscate.js'))
                .pipe(gulp.dest(jsDest))
                .once('end', function(){
                    console.log('obfuscate done');
                })
        })   
})