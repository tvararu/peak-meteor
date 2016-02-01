const gulp = require('gulp')
const rename = require('gulp-rename')
const template = require('gulp-template')
const argv = require('yargs').argv

const name = argv.name

gulp.task('component', () =>
  gulp.src('src/template/component/Component.jsx')
    .pipe(template({ name: name }))
    .pipe(rename(`${name}.jsx`))
    .pipe(gulp.dest(`src/components/`))
)
