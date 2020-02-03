const { task, src, dest, series, parallel } = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const exec = require("child_process").exec;
const rename = require("gulp-rename");
const terser = require("gulp-terser");

/**
 * 
 * Task of build from source and generate javascript distribution file.
 * 
 */
task("javascript", function() {
 return src("src/tholded.js")
  .pipe(eslint())
  .pipe(rename("tholded.min.js"))
  .pipe(terser())
  .pipe(dest("dist/"));
});

/**
 * 
 * Task of build from source and generate babel javascript distribution file.
 * 
 */
task("babel", function() {
  return src("src/tholded.js")
   .pipe(eslint())
   .pipe(babel({
    presets: ["@babel/env"]
   }))
   .pipe(rename("tholded.babel.min.js"))
   .pipe(terser())
   .pipe(dest("dist/"));
 });

/**
 * 
 * Default task.
 * 
 */
task("default", series("javascript", "babel", "dotnet"));