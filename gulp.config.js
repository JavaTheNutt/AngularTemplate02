module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';// jscs:ignore 
    var root = '/.';
    var server = './src/server/';
    var temp = './.tmp';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

    var config = {
        alljs: [
            '.src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: client + 'lib/font-awesome/fonts/**/*.*',
        htmlTemplates: clientApp + '**/*.html',
        html: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js:[
            clientApp + '**/*.module.js',
            clientApp + '**/*.js'
        ],
        sass: client + 'styles/styles.sass',
        root: root,
        server: server,
        temp: temp,

        optimisedFiles:{
            app: 'app.js',
            lib: 'lib.js'
        },
        templateCache:{
            file: 'template.js',
            options:{
                module: 'app.core',
                standalone: false,
                root: 'app/'
            }
        },
        browserReloadDelay: 1000,
        bower:{
            json: require('./bower.json'),
            directory: client + 'lib/'
        },
        packages:[
            './package.json',
            './bower.json'
        ],
        defaultPort: 7203,
        nodeServer: server + 'app.js'
    };
    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory
        };
        return options;
    };
    return config;
};
