import gulp from "gulp";
import sass from "gulp-sass";
//src를통해 dset(결과)로이동해서 만들어짐.
const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles"
  }
};

export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest));
}
