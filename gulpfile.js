const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const webpack = require('webpack-stream');
const del = require('del');

gulp.task('clean', async () => {
    return del(['dist/**']);
});

gulp.task('js', async () => {
    webpack({
        entry: {
            app: './src/js/app.js'
        },
        output: {
            filename: '[name].js'
        }
    })
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css', async () => {
    gulp.src('src/css/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('static', async() => {
    gulp.src('src/img/**')
    .pipe(gulp.dest('dist/img'))
});

gulp.task('default',
    gulp.series('clean',
    gulp.parallel('js', 'css', 'static')));

gulp.task('watch', async () => {
    gulp.watch('src/**', gulp.series('default'));
});