var borschik    = require('enb-borschik/techs/borschik'),
    enbBemTechs = require('enb-bem-techs'),
    fileProvider = require("enb/techs/file-provider");

var levels = [
    { path: '../libs/bem-core/common.blocks', check: false },
    { path: '../libs/bem-core/desktop.blocks', check: false },
    'views/blocks-common',
    'views/blocks-desktop',
    'views/blocks-topic'
];

module.exports = function (config) {

    config.nodes('assets/*', function (node) {

        node.mode('min', function (_node) {
            _node.addTechs([
                [ borschik, { sourceTarget: "?.css", target: "?.min.css", minify: true, freeze: false } ],
                [ borschik, { sourceTarget: "?.js", target: "?.min.js", minify: true, freeze: false } ]
            ]);
            _node.addTargets([ '?.min.css', '?.min.js' ]);
        });

        node.addTechs([

            [ enbBemTechs.levels, { levels: levels } ],
            [ fileProvider, { target: "?.bemdecl.js" } ],
            [ fileProvider, { target: "../../.bem/nodeps.js" } ],
            [ enbBemTechs.deps, { target: '?.tmp.deps.js' } ],
            [ enbBemTechs.subtractDeps, {
                target: '?.deps.js',
                from: '?.tmp.deps.js',
                what: '../../.bem/nodeps.js',

            } ],
            [ enbBemTechs.files ],

            // css
            [ require('enb-stylus/techs/stylus'), {
                target: '?.css',
                useNib: true,
                autoprefixer: {
                    browsers: [ 'ie >= 9', 'last 5 versions', 'opera 12.1', '> 2%' ]
                }
            } ],

            // js
            [ require('enb-js/techs/browser-js'), { includeYM: false, target: '?.pre.js' } ],

            [ borschik, { sourceTarget: "?.pre.js", target: "?.js", minify: false} ],
            [ require('../../.bem/techs/pre-cleaner'), {
                source: [ '?.pre.js' ]
            }]
        ]);

        node.addTargets([ '?.css', '?.js', 'pre-cleaner' ]);
    });

};
