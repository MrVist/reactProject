/**
 * Created by sunzp on 16/3/13.
 */

var gulp=require('gulp'),
    browserify=require('browserify'),
    reactify=require('reactify'),
    source=require('vinyl-source-stream');

gulp.task('jsx',function(){
    browserify('app/js/banner.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('jsx.js'))
        .pipe(gulp.dest('app/main/dist/js'))
});

gulp.task('default',function(){
    gulp.start('jsx');
});