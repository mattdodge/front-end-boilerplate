var gulp = require('gulp');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var shim = require('browserify-shim');
var browserify = require('browserify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
	var b = browserify('./js/main.js', {debug: true});
	b.transform(shim);

	b.bundle()
		.pipe(source('js/main.js'))
		.pipe(rename('script.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
    gulp.src('sass/style.scss')
		.pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'));
});

gulp.task('fonts', function() {
	gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/*')
		.pipe(gulp.dest('./fonts/bootstrap'));
});

gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['js']);
	gulp.watch('sass/**/*.scss', ['css']);
});

gulp.task('build', ['fonts', 'js', 'css']);

gulp.task('default', ['build', 'watch']);
