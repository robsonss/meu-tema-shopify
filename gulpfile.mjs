import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import changed from 'gulp-changed';
import minify from 'gulp-minify';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';

const compileStyles = () => {
    return gulp
        .src('src/_dev/scss/**/*.scss')
        .pipe(gulpSass(sass)({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/assets'));
};

const compressScripts = () => {
    copyLibs();

    return gulp
        .src(['src/_dev/scripts/**/*.js', '!src/_dev/scripts/libs/**'])
        .pipe(changed('build/assets'))
        .pipe(minify({ ext: { min: '.js' }, noSource: true }))
        .pipe(gulp.dest('build/assets'));
};

const copyShopifyFiles = () => {
    return gulp.src(['src/**/*', '!src/_dev/**'])
        .pipe(changed('build'))
        .pipe(gulp.dest('build'));
};

const copyAssetsFiles = () => {
    return gulp.src('src/_dev/assets/**/*')
        .pipe(changed('build/assets'))
        .pipe(gulp.dest('build/assets'));
};

const copyLibs = () => {
    return gulp
        .src('src/_dev/scripts/libs/**/*')
        .pipe(gulp.dest('build/assets'));
};

const watch = () => {
    gulp.watch('src/_dev/scss/**/*.scss', compileStyles);
    gulp.watch('src/_dev/scripts/*.js', compressScripts);
    gulp.watch(['src/**/*', '!src/_dev/**'], copyShopifyFiles);
    gulp.watch('src/_dev/assets/**/*', copyAssetsFiles);
};

export { compileStyles, compressScripts, copyAssetsFiles, copyShopifyFiles, watch };
export default watch;