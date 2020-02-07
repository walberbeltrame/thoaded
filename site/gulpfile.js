const { task, src, dest, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");

/**
 * 
 * Task of copy and paste libraries public files.
 * 
 */
task("lib/material-components-web", () => {
 return src("node_modules/material-components-web/dist/**/*")
  .pipe(dest("public/lib/material-components-web"));
});
task("lib", series("lib/material-components-web"));

/**
 * 
 * Task of copy and paste images public files.
 * 
 */
task("images", () => {
 return src("../images/*.*")
  .pipe(dest("public/images/"));
});

/**
 * 
 * Task of build from source and generate html public files.
 * 
 */
task("html", () => {
 return src("src/*.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(dest("public/"));
});

/**
 * 
 * Task of copy and paste public files.
 * 
 */
task("files", function() {
  return src(["robots.txt", "sitemap.xml", "../images/favicon.ico"])
   .pipe(dest("public/"));
 });

/**
 * 
 * Default task.
 * 
 */
task("default", series("lib", "images", "html", "files"));