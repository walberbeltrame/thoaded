const { task, src, dest, series, parallel } = require("gulp");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");
const terser = require("gulp-terser");

/**
 * 
 * Task of build from source and generate javascript distribution file.
 * 
 */
task("javascript", function() {
 return src("src/molded.js")
  .pipe(eslint())
  .pipe(rename("molded.min.js"))
  .pipe(terser())
  .pipe(dest("dist/"));
});

/**
 * 
 * Tasks of build from source and generate dart distribution file.
 * 
 */
task("dart/lib", function() {
 return src("src/molded.dart")
  .pipe(dest("lib/"))
  .pipe(dest("dart/lib/"));
});
task("dart/test", function() {
 return src("test/molded_test.dart")
  .pipe(dest("dart/test/"));
});
task("dart/files", function() {
 return src(["README.md","CHANGELOG.md","LICENSE","pubspec.yaml"])
  .pipe(dest("dart/"));
});

/**
 * 
 * Default task.
 * 
 */
task("default", series("javascript", parallel("dart/lib", "dart/test", "dart/files")));