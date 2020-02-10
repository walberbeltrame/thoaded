const { task, src, dest, series } = require("gulp");

/**
 * 
 * Task of copy and paste public files.
 * 
 */
task("files", () => {
 return src(["../CHANGELOG.md", "../LICENSE", "../README.md"])
 .pipe(dest("public/dotnet/"))
 .pipe(dest("public/flutter/"))
 .pipe(dest("public/java/"))
 .pipe(dest("public/javascript/"))
 .pipe(dest("public/python/"));
});

/**
 * 
 * Task of copy and paste dotnet public files.
 * 
 */
task("dotnet", () => {
 return src("../dotnet/**/*")
  .pipe(dest("public/dotnet/"));
});

/**
 * 
 * Task of copy and paste flutter public files.
 * 
 */
task("flutter", () => {
 return src("../flutter/**/*")
  .pipe(dest("public/flutter/"));
});

/**
 * 
 * Task of copy and paste java public files.
 * 
 */
task("java", () => {
 return src("../java/**/*")
  .pipe(dest("public/java/"));
});

/**
 * 
 * Task of copy and paste javascript public files.
 * 
 */
task("javascript", () => {
 return src("../javascript/**/*")
  .pipe(dest("public/javascript/"));
});

/**
 * 
 * Task of copy and paste python public files.
 * 
 */
task("python", () => {
  return src("../python/**/*")
   .pipe(dest("public/python/"));
 });

/**
 * 
 * Default task.
 * 
 */
task("default", series("files", "dotnet", "flutter", "java", "javascript", "python"));