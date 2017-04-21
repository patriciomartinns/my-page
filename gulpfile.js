var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('compress-images', function() {
    return gulp.src('img/*')
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest('img'));
});

gulp.task('watch', function(){
	gulp.watch('img/*', ['compress-images']);
});

gulp.task('default', ['compress-images', 'watch']);