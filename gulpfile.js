const { task, src, dest, series } = require("gulp");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");
const terser = require("gulp-terser");

/**
 * 
 * Task of build from source and generate distribution file.
 * 
 */
task("build", function() {
 return src("src/molded.js")
  .pipe(eslint())
  .pipe(rename("molded.min.js"))
  .pipe(terser())
  .pipe(dest("dist/"));
});

/**
 * 
 * Default task.
 * 
 */
task("default", series("build"));