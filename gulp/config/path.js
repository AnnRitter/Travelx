// имя папки проекта 
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		libs: `${buildFolder}/js/libs/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		images: `${buildFolder}/images/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		js: [`${srcFolder}/js/**/*.js`, `!${srcFolder}/js/libs/**/*.*`], //добавлено исключение : [что добавлять, !что не добавлять]
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/images/**/*.*`,
		fonts: `${srcFolder}/fonts/**/*.*`,
		libs: `${srcFolder}/js/libs/**/*.*`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/images/**/*.*`,
		fonts: `${srcFolder}/fonts/**/*.*`,
		libs: `${srcFolder}/js/libs/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,

}