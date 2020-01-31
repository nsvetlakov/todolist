var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');


// Basic Gulp task syntax
gulp.task('hello', function () {
    console.log('Hello Zell!');
})

// Development Tasks 
// -----------------


gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
})

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});