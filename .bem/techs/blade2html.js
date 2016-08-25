var laravelParser = require('laravel-blade-parser');

module.exports = require('enb/lib/build-flow').create()
    .name('blade2html')
    .useSourceFilename('destTarget', '_?.blade.php')
    .target('target', '?.html')
    .builder(function (file) {
        return laravelParser({
            folder: 'public/views',
            path: file,
            encoding: 'utf-8'
        });
    })
    .createTech();