export const copy = () => {
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}

export const copyImages = () => {
    return app.gulp.src(app.path.src.images)
    .pipe(app.gulp.dest(app.path.build.images))
}

export const copyFonts = () => {
    return app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts))
}

export const copyLibs = () => {
    return app.gulp.src(app.path.src.libs)
    .pipe(app.gulp.dest(app.path.build.libs))
}

export const copycssLibs = () => {
	return app.gulp.src(app.path.src.csslibs)
	.pipe(app.gulp.dest(app.path.build.csslibs))
}