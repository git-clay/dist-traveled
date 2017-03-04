var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', function(){
	gulp.src('codepen/**/*.scss') //** = any file     *.scss = anything in dir that ends with .scss
		.pipe(sass().on('error', sass.logError)) //pipe redirects if error
		.pipe(gulp.dest('./codepen/css/')); //pipe redirects to css dir
});

gulp.task('default',function(){
	gulp.watch('codepen/**/*.scss',['styles']);  //runs 'styles' task ^^ when watch sees a savels
});