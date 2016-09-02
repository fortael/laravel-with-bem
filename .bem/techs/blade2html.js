var laravelParser = require('laravel-blade-parser');

module.exports = require('enb/lib/build-flow').create()
    .name('blade2html')
    .target('target', '?.html')
    .useSourceFilename('source', '_?.blade.php')
    .needRebuild(function () {
        return true;
    })
    .builder(function (file) {
        return laravelParser({
            folder: 'public/views',
            path: file,
            encoding: 'utf-8'
        });
    })
    .createTech();