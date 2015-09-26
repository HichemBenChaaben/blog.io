var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;

gulp.task('bower', function() {
    gulp.src('./public/index.html')
        .pipe(wiredep({
            exclude: ['./public/vendor/angular-mocks'],
            json: require('./bower.json')
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('index', function() {
    gulp.src('./public/index.html')
        .pipe(inject(gulp.src('./public/javascripts/**/*.js', {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest('./public'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        port: 7000,
    });
    gulp.watch('./public/javascripts/**/*.js', ['bower', 'index']);
    gulp.watch(['./public/index.html', './public/views/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['bower', 'index', 'browser-sync']);
