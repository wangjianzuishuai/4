/**
 * Created by Administrator on 2017/3/16.
 */
var gulp = require('gulp'),
    minihtml=require("gulp-minify-html"),
    minicss=require("gulp-minify-css");

gulp.task('myhtml',function(){
    gulp.src('*.html')
        .pipe(minihtml())
        .pipe(gulp.dest('dist/html'));
});
gulp.task('mycss',function(){
    gulp.src('css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('default',['myhtml','mycss']);
