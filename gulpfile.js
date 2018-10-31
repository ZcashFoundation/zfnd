// Run this file by installing gulp globally, and running `> gulp`

const gulp = require('gulp')
const changed = require('gulp-changed')
const imagemin = require('gulp-imagemin')
const pngcrush = require('imagemin-pngcrush')
const imageResize = require('gulp-image-resize')

var paths = {
  img: [
    // SVGs are moved over directly below
    'images/src/**/*.png',
    'images/src/**/*.jpg',
    'images/src/**/*.jpeg'
  ],
  imgDest: 'images'
}

// Note: This doesn't optimize for different devices.
// If we find another library for that, I'd be super happy to use it.
gulp.task('img', function () {
  // Move over the SVG files and leave them alone
  gulp.src('images/src/**/*.svg')
    .pipe(gulp.dest(paths.imgDest))

  return gulp.src(paths.img)
    // If something changed
    .pipe(changed('images/src'))
    // Crop it
    .pipe(imageResize({
      width: 2000, // Maximum width for the file.
      crop: false,
      upscale: false
    }))
    // Optimize the png files
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    }))
    // ...and the jpegs
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 })
    ],
    // Log stuff
    { verbose: true }
    ))
    .pipe(gulp.dest(paths.imgDest))
})

// Only one command is needed for now.
gulp.task('images', ['img'])
gulp.task('default', ['img'])
