# gulpdemo
JS framework development using gulp

### steps to run

To install all dependencies
`
npm install
`

To run the build process
`
npm run default
`

To run a local http server
`
npm install http-server -g
`

`
http-server
`

Then navigate to localhost URL shown in the console and see the demo

### Why is gulp for this?
If you requirement is to create a javascript library for a new project that involves creating and maintaining multiple folder and file structure, Have to use modules from npm, use some git hub repos to include in you project and then finally you wanted a single js file with minified or non minified or obfuscated, Then gulp build is best suited for you.

### package.json
  ` scripts": {
        "default": "node_modules/gulp/bin/gulp.js default"
  }
`
This "script" key in package.json will point to the gulp path to use and "default" is the gulp task name to execute first

### Gulpfile.js structure
Gulp is async, so you need to specify which task has to execute first, second and then on

    gulp.task('one', function(cb){
    	// you code
            cb()
        })
    })
    gulp.task('two', ['clean'], function(cb){
    // your code
            cb();
        });
    });
    gulp.task('default', ["one", "two"], function(){
    // This code will execute only after "one" and "two" gets completed
        });
    });

>gulp-browserify is to import dependent modules from npm and your custom files

>gulp-uglify is to minify you readable file

> gulp-javascript-obfuscator  is to make readable file to unclear  format

> gulp-git is to clone some github repos during the build process
