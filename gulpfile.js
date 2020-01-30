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
 return src("src/molded.js")
  .pipe(eslint())
  .pipe(rename("molded.min.js"))
  .pipe(terser())
  .pipe(dest("dist/"));
});

/**
 * 
 * Task of build from source and generate babel javascript distribution file.
 * 
 */
task("babel", function() {
  return src("src/molded.js")
   .pipe(eslint())
   .pipe(babel({
    presets: ["@babel/env"]
   }))
   .pipe(rename("molded.babel.min.js"))
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
task("dart", parallel("dart/lib", "dart/test", "dart/files"));

/**
 * 
 * Tasks of build from source and generate dotnet distribution file.
 * 
 */
task("dotnet/lib", function() {
 return src(["src/Molded.cs","src/Molded.csproj"])
  .pipe(dest("dotnet/Molded/"));
});
task("dotnet/test", function() {
 return src(["test/MoldedTest.cs","test/MoldedTest.csproj"])
  .pipe(dest("dotnet/Molded.Tests/"));
});
task("dotnet/files", function() {
 return src(["Molded.sln"])
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
 * Tasks of build from source and generate python distribution file.
 * 
 */
task("python/lib", function() {
 return src("src/molded.py")
  .pipe(dest("lib/"))
  .pipe(dest("python/lib/"));
});
task("python/test", function() {
 return src("test/moldedtest.py")
  .pipe(dest("python/"));
});
task("python/files", function() {
  return src(["setup.py","README.md"])
   .pipe(dest("python/"));
 });
task("python", parallel("python/lib", "python/test", "python/files"));

/**
 * 
 * Default task.
 * 
 */
task("default", series("javascript", "babel", "dart", "dotnet", "python"));