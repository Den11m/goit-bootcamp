const gulp = require('gulp');
const rigger = require('gulp-rigger');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const del = require('del');
const browserSync = require('browser-sync').create();

const runSequence = require('run-sequence');

gulp.task('del', function () {
    return del('build/')
});

gulp.task('html', function () {
   return gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
       .pipe(browserSync.stream())
});

gulp.task('css', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream())
});

gulp.task('img', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

gulp.task('fonts', () =>
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/fonts'))
);

gulp.task('js', () =>
    gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream())
);

gulp.task('browser-sync', function() {
    return browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch("src/html/*.html", ['html']);
    gulp.watch("src/scss/*.scss", ['css']);
    gulp.watch("src/js/*.js", ['js']);
});

// gulp.task('html-watch', ['html'], function (done) {
//     browserSync.reload();
//     done();
// });
// gulp.watch("./src/html/*.html", ['html-watch']);
//
// gulp.task('css-watch', ['css'], function (done) {
//     browserSync.reload();
//     done();
// });
// gulp.watch("./src/scss/*.scss", ['css-watch']);
//
// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });
// gulp.watch("./src/js/*.js", ['js-watch']);

gulp.task('build', function(callback) {
    runSequence(
        'del',
        'html',
        'css',
        'img',
        'fonts',
        'js',
        'browser-sync',
        'watch',
        callback);
});