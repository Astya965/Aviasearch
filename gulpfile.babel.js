const ghPages = require('gh-pages');
const path = require('path');

const gulp = require("gulp");
const plumber = require("gulp-plumber");

const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemap = require("gulp-sourcemaps");
const csso = require("gulp-csso");

const server = require("browser-sync").create();
const rename = require("gulp-rename");
const del = require("del");


const imagemin = require("gulp-imagemin");

// const uglify = require("gulp-uglify");

const htmlmin = require("gulp-htmlmin");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './public'), cb);
}
exports.deploy = deploy;

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("public/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 2}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("public/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin())
    .pipe(gulp.dest("public"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/img/**"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("public"));
});

gulp.task("clean", function () {
  return del("public");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: "public/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/js/*.js", gulp.series("jsmin", "refresh"));
  gulp.watch("source/**/*.html", gulp.series("html", "refresh"));
});

gulp.task("gulpbuild", gulp.series("clean", "copy", "css", "html"));
gulp.task("start", gulp.series("gulpbuild", "server"));
