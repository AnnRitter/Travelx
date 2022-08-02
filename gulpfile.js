// основной модуль
import gulp from 'gulp'

// импорт путей
import {path} from './gulp/config/path.js'
import {copy} from './gulp/tasks/copy.js'
import {reset} from './gulp/tasks/reset.js'
import {html} from './gulp/tasks/html.js'
import {copyImages} from './gulp/tasks/copy.js'
import {copyFonts} from './gulp/tasks/copy.js'
import {js} from './gulp/tasks/js.js'

// импорт плагинов 
import {plugins} from './gulp/config/plugins.js'
import {server} from './gulp/tasks/server.js'

// испорт файлов
import {scss} from './gulp/tasks/scss.js'

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,

}

function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
		gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, copyImages)
}

// построение сценариев выполнения задач (будет два режима dev И prod)
const mainTasks = gulp.parallel(copy, copyImages, copyFonts, html, scss, js)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)

