var borschik    = require('enb-borschik/techs/borschik'),
    enbBemTechs = require('enb-bem-techs'),
    levels      = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        'public/views/blocks_common',
        'public/views/blocks_desktop'
    ];

module.exports = function (config) {
    var production = process.env.YENV === 'production';

    config.nodes('public/views/bundles/*', function (node) {
        node.addTechs([

            [ enbBemTechs.levels, { levels: levels } ],

            [ require("enb/techs/file-provider"), { target: "_?.blade.php" } ],
            // [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            [ require('./techs/blade2html') ],
            [ require('./techs/blade2bemjson') ],
            [ enbBemTechs.bemjsonToBemdecl ],
            [ enbBemTechs.deps ],
            [ enbBemTechs.files ],

            // html
            // [ require('enb-bemxjst/techs/bemhtml'), {
            //     sourceSuffixes: [ 'bemhtml', 'bemhtml.js' ],
            //     forceBaseTemplates: true
            // } ],
            // [ require('enb-bemxjst/techs/bemjson-to-html') ],

            // css
            [ require('enb-stylus/techs/stylus'), {
                target: '?.css',
                sourcemap: production,
                autoprefixer: {
                    browsers: [ 'ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%' ]
                }
            } ],


            // js
            [ require('enb-js/techs/browser-js'), { includeYM: true } ],
            [ require('enb/techs/file-merge'), {
                target: '?.js',
                sources: [ '?.browser.js' ]
            } ],

            [ borschik, { sourceTarget: "?.css", target: "_?.css", minify: true, freeze: false } ],
            [ borschik, { sourceTarget: "?.js", target: "_?.js", minify: true, freeze: false } ]
        ]);

        node.addTargets([ '_?.css', '_?.js', '?.bemjson.js', '?.html' ]);

    });
};
