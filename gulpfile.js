/* jshint -W079 */ // Disable error about redefining $
"use strict";

var $                 = require('gulp-load-plugins')(),
    _                 = require('lodash'),
    argv              = require('yargs').argv,
    connectModRewrite = require('connect-modrewrite'),
    bower             = require('./bower.json'),
    glob              = require('glob'),
    globLoader        = require('node-glob-loader'),
    gulp              = require('gulp'),
    opn               = require('opn'),
    path              = require('path'),
    pkg               = require('./package.json'),
    semver            = require('semver'),
    streamqueue       = require('streamqueue'),
    vendorConfig      = require('./vendor_config.js'),
    colors            = require('colors'),
    config            = {
        paths: {
            app: {
                assets: ['src/assets/**'],
                html: ['src/index.html'],
                scripts: [
                    'src/**/*.module.js',
                    'src/**/*.js',
                    '!src/**/container.js',
                    '!src/assets/**/*.js'
                ],
                styles: ['src/**/main.less'],
                templates: ['src/app/**/*.tpl.html']
            },
            build: {
                assets  : 'assets',
                dist    : 'dist',
                scripts : 'scripts',
                styles  : 'styles',
                tmp     : '.tmp'
            },
            container: {
                scripts : ['src/**/container.js'],
                styles  : ['src/**/container.less']
            },
            placeholder: {
                template: ['src/blank.tpl.html']
            }
        }
    },
    containerConfig;
/* jshint +W079 */

try {
    containerConfig = require('./config.json');
} catch (error) {
    containerConfig = {};
    console.warn(colors.yellow('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
    console.warn(colors.yellow("┃ ") + colors.yellow('⚠  ') + colors.red('WARNING!') + " No " + colors.cyan("config.json") + " file is present." + colors.yellow("           ┃"));
    console.warn(colors.yellow("┃ ") + "This misconfigured state may cause the app misbehave." + colors.yellow(" ┃"));
    console.warn(colors.yellow('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
    console.warn();
}

function buildError (error) {
    console.error(error.message);
    console.error(colors.red(" ❌  Looks like you broke the build. Shame on you. 😭"));
    process.exit(1);
}

gulp.task('clean', function () {
    return gulp.src([
            config.paths.build.tmp + '/**/*',
            config.paths.build.dist + '/**/*'
        ], {
            read: false
        })
        .pipe($.rm({
            async: false
        }));
});

gulp.task('aggregate-vendor-deps', function () {
    var resources = {
        styles  : [],
        scripts : [],
        assets  : []
    };

    return globLoader.load(bower.directory + '/**/vendor_config.js', function (exports) {

        if (exports.scripts) {
            resources.scripts.push(
                _.map(exports.scripts, function (script) {
                    return bower.directory + '/**/' + script;
                })
            );
        }

        if (exports.styles) {
            resources.styles.push(
                _.map(exports.styles, function (style) {
                    return bower.directory + '/**/' + style;
                })
            );
        }

        if (exports.assets) {
            resources.assets.push(
                _.map(exports.assets, function (asset) {
                    return bower.directory + '/**/' + asset;
                })
            );
        }

    }).then(function () {
        resources.styles    = _.uniq(_.flatten(resources.styles));
        resources.scripts   = _.uniq(_.flatten(resources.scripts));

        config.dependencies = resources;

        config.aggregated   = {
            assets: _.uniq(_.flattenDeep([
                config.dependencies.assets,
                _.map(vendorConfig.assets, function (asset) {
                    return bower.directory + '/**/' + asset;
                }),

                config.paths.app.assets
            ])),
            styles: _.uniq(_.flattenDeep([
                config.dependencies.styles,
                _.map(vendorConfig.styles, function (style) {
                    return bower.directory + '/**/' + style;
                }),

                config.paths.app.styles
            ])),
            scripts: _.uniq(_.flattenDeep([
                config.dependencies.scripts,
                _.map(vendorConfig.scripts, function (script) {
                    return bower.directory + '/**/' + script;
                }),
                config.paths.app.scripts
            ]))
        };
    });
});

gulp.task('html2js', ['clean', 'aggregate-vendor-deps'], function () {
    gulp.src(_.flatten([config.paths.app.templates, config.paths.placeholder.template]))
        .pipe($.ngHtml2js({moduleName: 'templates-app'}))
        .pipe($.concat('templates-app.js'))
        .pipe(gulp.dest(path.join(
            config.paths.build.tmp,
            config.paths.build.scripts
        )));

    return;
});

gulp.task('scripts:lint', function () {
    return gulp.src([
            'src/**/*.js',
            '!src/assets/'
        ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'))
        .on('error', buildError)
        .pipe($.jscs())
        .pipe($.jscs.reporter())
        .pipe($.jscs.reporter('fail'))
        .on('error', buildError);
});

gulp.task('scripts', ['clean', 'aggregate-vendor-deps', 'scripts:lint'], function () {
    var stream = streamqueue({objectMode: true});

    stream.queue(gulp.src(config.aggregated.scripts));
    stream.queue(gulp.src(config.paths.container.scripts)
        .pipe($.template({containerConfig: JSON.stringify(containerConfig)})));

    return stream.done()
        .pipe($.concat(pkg.name + '.' + pkg.version + '.js'))
        .pipe($.ngAnnotate({
            add: true
        }))
        .pipe(gulp.dest(path.join(
            config.paths.build.tmp,
            config.paths.build.scripts
            )));
});

gulp.task('scripts:dist', ['scripts', 'html2js'], function () {
    var srcPath = path.join(config.paths.build.tmp, config.paths.build.scripts),
        output = gulp.src([
        path.join(srcPath, pkg.name + '.' + pkg.version + '.js'),
        path.join(srcPath, 'templates-app.js')
        ])
    .pipe($.concat(pkg.name + '.' + pkg.version + '.min.js'))
    .pipe($.ngAnnotate({
        add: true
    }))
    .pipe($.uglify())
    .pipe(gulp.dest(path.join(
        config.paths.build.dist,
        config.paths.build.scripts
    )));

    output.on('error', console.error.bind(console));

    return output;
});

gulp.task('styles:lint', [], function () {
    return gulp.src('src/app/**/*app.less')
        .pipe($.less({
            paths: [
                './' + bower.directory
            ]
        }))
        .pipe(gulp.dest(path.join(
            config.paths.build.tmp, config.paths.build.styles
        )))
        .pipe($.csslint())
        .pipe($.csslint.reporter())
        .on('error', buildError)
        .pipe($.rm());
});

gulp.task('styles', ['clean', 'styles:lint', 'aggregate-vendor-deps'], function () {
    return gulp.src(_.union(_.flatten([
                config.dependencies.styles,
                _.map(vendorConfig.styles, function (style) {
                    return bower.directory + '/**/' + style;
                })
            ]),
            config.paths.app.styles,
            config.paths.container.styles
        ))
        .pipe($.less({
            paths: [
                './' + bower.directory
            ]
        }))
        .pipe($.concat( pkg.name + '.' + pkg.version + '.css'))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest(path.join(
            config.paths.build.tmp, config.paths.build.styles
        )));
});

gulp.task('styles:dist', ['styles'], function () {
    var output = gulp.src(path.join(
            config.paths.build.tmp,
            config.paths.build.styles, '*.css'
        ))
        .pipe($.minifyCss({keepSpecialComments: 0,
            katibility: 'ie8'}))
        .pipe(gulp.dest(path.join(
            config.paths.build.dist,
            config.paths.build.styles
        )));

    output.on('error', console.error.bind(console));

    return output;
});

gulp.task('assets:copy', ['clean', 'aggregate-vendor-deps'], function () {
    return gulp.src(config.aggregated.assets)
        .pipe(gulp.dest(path.join(
            config.paths.build.tmp,
            config.paths.build.assets
        )));
});

gulp.task('assets:copy-dist', ['clean', 'aggregate-vendor-deps'], function () {
    return gulp.src(config.aggregated.assets)
        .pipe(gulp.dest(path.join(
            config.paths.build.dist,
            config.paths.build.assets
        )));
});

var templateIndex = function (cwd) {
    var jsRoute = "scripts/*.js",
        cssRoute = "styles/*.css",
        includeJs = [],
        includeCss = [],
        jsPaths = glob.sync(jsRoute, {cwd: cwd, mark: true}),
        cssPaths = glob.sync(cssRoute, {cwd: cwd, mark: true});

    _.each(jsPaths, function (item) { includeJs.push('/' + item); });

    _.each(cssPaths, function (item) { includeCss.push('/' + item); });

    return {
        author: pkg.author,
        date: new Date().getFullYear(),
        scripts: _.flatten(includeJs),
        styles: _.flatten(includeCss),
        version: pkg.version
    };
};

gulp.task('index', ['html2js', 'scripts', 'styles'], function () {
    var output = gulp.src('./src/app/index.html')
        .pipe($.template(templateIndex(config.paths.build.tmp)))
        .pipe(gulp.dest(config.paths.build.tmp))
        .pipe($.connect.reload());

    output.on('error', console.error.bind(console));

    return output;
});

gulp.task('index:dist', ['html2js', 'scripts:dist', 'styles:dist'], function () {
    var output = gulp.src('./src/app/index.html')
        .pipe($.rename('home.html'))
        .pipe($.template(templateIndex(config.paths.build.dist)))
        .pipe(gulp.dest(config.paths.build.dist));

    output.on('error', console.error.bind(console));

    return output;
});

gulp.task('build', ['assets:copy', 'index']);

gulp.task('build:dist', ['assets:copy-dist', 'index:dist']);

/**
 * Starts simple node connect server. Will accept an array
 * of custom middleware to run when server is started - if
 * none are specified it assumes the standard connectModRewrite
 * middleware rules to serve this application.
 *
 * @param  {String} cwd         Folder of files to serve
 * @param  {Number} port        Port to run the server on - defaults to 9000
 * @param  {Array} middlewares  Array of functions that get set as middleware
 */
var initConnect = function (cwd, port, middlewares, fallback) {
    // if no middleware is passed then use original connectModRewrite rules
    if (!middlewares) {
        var middlewares = [];

        middlewares.push(
            connectModRewrite([
                '!\\.?(js|css|html|eot|svg|ttf|woff|otf|css|png|jpg|git|ico) / [L]'
            ])
        );
    }

    // start the connect server with optional port & middleware
    $.connect.server({
        root: cwd,
        port: port || 9000,
        livereload: true,
        fallback: fallback || null,
        middleware: function (connect, options) {
            // returns an array of middleware functions
            return middlewares;
        }
    });
};

gulp.task('connect', ['build'], function () {
    initConnect(config.paths.build.tmp);
});

gulp.task('connect:dist', ['build:dist'], function () {
    initConnect(config.paths.build.dist, 9000, null, __dirname + '/dist/index.html');
});


gulp.task('serve', ['connect'], function () {
    opn('http://localhost:9000');
});

gulp.task('serve:dist', ['connect:dist'], function () {
    opn('http://localhost:9000');
});

gulp.task('serve:mock', ['connectMock'], function () {
    opn('http://localhost:9000');
});

gulp.task('watch', ['serve'], function () {
    $.watch(['src/**/*.js', 'src/**/*.less', 'src/**/*.html'],
        {debounceDelay: 2000},
        function () {
            gulp.start('build');
        }
    );
});


gulp.task('bump', function () {
    if (!argv.type) {
        console.log('ERROR: No semver type specified. Use `gulp bump --type ' +
            '<patch | minor | major>');

        return;
    }

    if (_.indexOf(['patch', 'minor', 'major'], argv.type) < 0) {
        console.log('ERROR: Invalid semver type. Use `gulp bump --type ' +
            '<patch | minor | major>');

        return;
    }

    var importance = argv.type,
        newVer = semver.inc(pkg.version, importance);

    return gulp.src(['./package.json', './bower.json'])
        .pipe($.bump({version: newVer}))
        .pipe(gulp.dest('./'))
        .pipe($.git.commit('bump package version to ' + newVer))
        .pipe($.git.tag(newVer, 'bump package version to ' + newVer,
            function (/*err*/) {}
        ));
});
