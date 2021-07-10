const { src, dist, parallel, series, watch } = require('gulp');

const sass          = require('gulp-sass')(require('sass'));
const browserSync   = require('browser-sync').create();
const autoprefixer  = require('gulp-autoprefixer');
const concat        = require('gulp-concat');

function browsersync() {
    browserSync.init({
        server: { baseDir: 'src/' },
        notify: false, 
        online: true
    })
}

function styles() {
    return src('src/scss/main.scss')
    .pipe(concat('src/css/main.css'))
    .pipe(browserSync.stream())
    
}

function buildcopy() {
    return src([
        'src/css/**/*.css',
        'src/**/*.html' 
    ], { base: 'src'} )
    .pipe(dest('dist'))
}

exports.browsersync = browsersync;
exports.styles      = styles;
exports.buildcopy   = buildcopy;

// exports.default  = 