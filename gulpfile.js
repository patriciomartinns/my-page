const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('compress-images', function() {
    return gulp.src('img/**/*')
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest('img'));
});

gulp.task('default', ['compress-images']);
