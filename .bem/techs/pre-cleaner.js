var fs    = require('fs'),
    async = require('async');

/**
 * Удаляет ?.pre.* файлы после сборки, которые больше не нужны.
 *
 * @param {Object}  [options]
 * @param {String}  [options.source='?.pre.js']  Файлы, которые нужно удалить.
 * @param {String}  [options.after='?.js']       Файлы которых нужно дождаться.
 */
module.exports = require('enb/lib/build-flow').create().name('pre-cleaner')
    .useSourceListFilenames('source', [ '?.pre.js' ])
    .useSourceListFilenames('await', [ '?.js' ])
    .target('target', 'pre-cleaner')
    .builder(function (source) {
        this.node.resolveTarget('pre-cleaner').then(function () {
            async.each(source, function (item, cb) {

                if (fs.existsSync(item)) {
                    fs.unlinkSync(item);
                }
                return cb();
            });
        });
    })
    .saver(function () {

    })
    .createTech();