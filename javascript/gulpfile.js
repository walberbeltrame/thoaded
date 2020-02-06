const { task, src, dest, series } = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");
const terser = require("gulp-terser");

/**
 * 
 * Task of build from source and generate javascript distribution file.
 * 
 */
task("javascript", function() {
 return src("src/thoaded.js")
  .pipe(eslint())
  .pipe(rename("thoaded.min.js"))
  .pipe(terser())
  .pipe(dest("./"));
});

/**
 * 
 * Task of build from source and generate babel javascript distribution file.
 * 
 */
task("babel", function() {
 return src("src/thoaded.js")
  .pipe(eslint())
  .pipe(babel({
   presets: ["@babel/env"]
  }))
  .pipe(rename("thoaded.babel.min.js"))
  .pipe(terser())
  .pipe(dest("./"))
  .pipe(dest("node_modules/thoaded/"));
});

 /**
 * 
 * Task of node distribution file.
 * 
 */
task("node", function() {
 return src("index.js")
  .pipe(dest("node_modules/thoaded/"));
});

/**
 * 
 * Default task.
 * 
 */
task("default", series("javascript", "babel", "node"));