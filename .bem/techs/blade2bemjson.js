var html2bemjson  = require('html2bemjson');

module.exports = require('enb/lib/build-flow').create()
    .name('blade2bemjson')
    .useSourceText('destTarget', '?.html')
    .target('target', '?.bemjson.js')
    .builder(function (file) {
        return html2bemjson.stringify(file);
    })
    .wrapper(function (result) {
        return 'module.exports = [\r\n' + result + '\r\n];'
    })
    .createTech();