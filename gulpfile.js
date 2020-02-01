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
 * Tasks of build from source and generate dart distribution file.
 * 
 */
task("dart/lib", function() {
 return src("src/tholded.dart")
  .pipe(dest("lib/"))
  .pipe(dest("dart/lib/"));
});
task("dart/test", function() {
 return src("test/tholded_test.dart")
  .pipe(dest("dart/test/"));
});
task("dart/files", function() {
 return src(["README.md","CHANGELOG.md","LICENSE","pubspec.yaml"])
  .pipe(dest("dart/"));
});
task("dart", parallel("dart/lib", "dart/test", "dart/files"));

/**
 * 
 * Tasks of build from source and generate dotnet distribution file.
 * 
 */
task("dotnet/lib", function() {
 return src(["src/Tholded.cs","src/Tholded.csproj"])
  .pipe(dest("dotnet/Tholded/"));
});
task("dotnet/test", function() {
 return src(["test/TholdedTest.cs","test/TholdedTest.csproj"])
  .pipe(dest("dotnet/Tholded.Tests/"));
});
task("dotnet/files", function() {
 return src(["Tholded.sln"])
  .pipe(dest("dotnet/"));
});
task("dotnet/build", function (cb) {
 exec("dotnet build dotnet", function (err, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  cb(err);
 });
});
task("dotnet", series(parallel("dotnet/lib", "dotnet/test", "dotnet/files"), "dotnet/build"));

/**
 * 
 * Default task.
 * 
 */
task("default", series("javascript", "babel", "dart", "dotnet"));