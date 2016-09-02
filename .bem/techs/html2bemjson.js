var html2bemjson  = require('html2bemjson');


module.exports = require('enb/lib/build-flow').create()
    .name('html2bemjson')
    .target('target', '?.bemjson.js')
    .useSourceText('source', '?.html')
    .builder(function (file) {

        return html2bemjson.stringify(file);
    })
    .wrapper(function (result) {
        return 'module.exports = [\r\n' + result + '\r\n];'
    })
    .createTech();