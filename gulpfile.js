const gulp = require('gulp');
const fs = require('fs');

// plugins e libs
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

const settings = {

    //  ####### Informações e Configurações ####### 

    projectName: 'Clube Magmaxx Cupom Desconto',

    /*
        ####### .gitignore ####### 
 
        * arquivos e pastas que serão ignorados pelo git.         
    */
    git_ignore: [
        '.vscode',
        'node_modules',
        'package-lock.json'
    ],

    /*
        ####### ESTRUTURA DE PASTAS DO PROJETO ####### 
                 * 
        * Estas pastas são do codigo fonte e arquivos frontend do projeto, onde ficam os codigos fontes e arquivos de desenvolvimento.
    */
    sourceFolders: {
        source: './src', // source folder
        frontend: './src/frontend/', // frontend folder
        css: './src/frontend/css/', // stylesheets
        js: './src/frontend/js/', // javscripts
        images: './src/frontend/img/', // images
        sass: './src/frontend/sass/' // sass
    },

    /* 
        * Estas pastas são do codigo fonte e arquivos BACKEND do projeto.
    */
    sourceFoldersBackend: {
        source: './src/backend/' // backend files
    },

    /* 
        * Estas pastas são do codigo fonte e arquivos finais do projeto, onde é o resultado do processamento do codigo de desenvolvimento.
    */
    publicFolders: {
        frontend: './public/', // frontend folder
        css: './public/css/', // stylesheets
        js: './public/js/', // javscripts
        images: './public/img/'
    },

    /*    
     ####### ARQUIVOS DO PROJETO ####### 

         * Arquivos de desenvolvimento do projeto
    */
    cssFiles: {
        css: 'style.css', // stylesheets
        cssReset: 'reset.css', // stylesheets
        cssMediaQueries: 'mediaqueries.css', // stylesheets
    },

    jsFiles: {
        js: 'functions.js' // javscripts
    },

    sassFiles: {
        sass: 'style.scss', // sass
        sassReset: 'reset.scss',
        sassMediaQueries: 'mediaqueries.scss',
        sassColor: 'colors.scss',
        sassFonts: 'fonts.scss', // fontes
        sassForms: 'forms.scss'
    }

};

/******************************************
 * ####### MANIPULAÇÃO DE PASTAS. ####### *
 ******************************************/

/*
    * cria estrutura das pastas
 */
function createAllFolders(callback) {

    // converse os atributos do objeto sourceFolders como um array 
    var sourceFoldersArray = Object.entries(settings.sourceFolders);
    var publicFoldersArray = Object.entries(settings.publicFolders);
    var backendFoldersArray = Object.entries(settings.sourceFoldersBackend);

    // percorre os indices do array
    publicFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array

        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));

    });

    // percorre os indices do array
    sourceFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array

        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));

    });

    // percorre os indices do array     
    backendFoldersArray.forEach(function ([item, index]) {

        // cria as pastas com o valor do indice do array

        gulp.src('*.*', { read: false })
            .pipe(gulp.dest(index));

    });

    callback();

}

/********************************************
* ####### MANIPULAÇÃO DE ARQUIVOS. ####### *
********************************************/

/*
    * cria o arquivo .gitignore com os valores definidos no array git_ignore.
*/
function createFileGitignore(callback) {

    // caso não tenha valores definidos no array git_ignore, será criado um arquivo vazio.    
    if (settings.git_ignore != "") {

        // limpa o arquivo original
        fs.writeFileSync('./.gitignore', '');

        settings.git_ignore.forEach(function (item, index) {

            // escreve o novo arquivo com os dados
            fs.appendFileSync('./.gitignore', item + '\n');
        });

    } else {
        fs.appendFileSync('./.gitignore', '');
    }

    callback();
};

/*
    *  ####### index.html ####### 
*/

// cria o arquivo index.html
function createFileIndexHtml(callback) {

    fs.writeFileSync('index.html', '');

    callback();
}

/*
    * ####### README.md ####### 
 */

// cria o arquivo README.md com nome do projeto
function createFileReadmeMD(callback) {

    fs.writeFileSync('README.md', '# ' + settings.projectName);

    callback();
}

/*
    * ###### Criação de todos os arquivos Css
*/

function createAllFilesCss(callback) {

    var cssFilesArray = Object.entries(settings.cssFiles);

    cssFilesArray.forEach(function ([item, index]) {

        fs.appendFileSync(settings.sourceFolders.css + index, '');

    });

    callback();
}

/*
    * ###### Criação de todos os arquivos Sass
*/

function createAllFilesSass(callback) {

    var sassFilesArray = Object.entries(settings.sassFiles);

    sassFilesArray.forEach(function ([item, index]) {

        fs.appendFileSync(settings.sourceFolders.sass + index, '');

    });


    callback();
}

/*
    * ###### Criação de todos os arquivos Js
*/

function createAllFilesJs(callback) {

    var jsFilesArray = Object.entries(settings.jsFiles);

    jsFilesArray.forEach(function ([item, index]) {

        fs.appendFileSync(settings.sourceFolders.js + index, '');

    });


    callback();
}

/******************************************
 * ####### PLUGINS E LIBS. ####### *
 ******************************************/

/*
    * minificar imagens
 */

function minificarImages(callback) {

    gulp.src(settings.sourceFolders.images + '*')
        .pipe(imagemin())
        .pipe(gulp.dest(settings.publicFolders.images));

    callback();
}

/*
    * minificar javascript
 */

function minificarJs(callback) {

    gulp.src(settings.sourceFolders.js + '*.js')
        .pipe(minify())
        .pipe(gulp.dest(settings.publicFolders.js));

    callback();
}

/*
    * minificar css
 */

/*function minificarCss(callback) {

    gulp.src(settings.sourceFolders.css + '*.css')
        .pipe(cleancss())
        .pipe(gulp.dest(settings.publicFolders.css));

    callback();
}*/

/*
    * minificar sass
 */

function minificarSass(callback) {

    gulp.src(settings.sourceFolders.sass + '*.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 99 versions'],
            grid: "true",
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(settings.publicFolders.css));

    callback();
}

/*
    * Autoprefixer CSS - compatibilidade navegadores
 */

function prefixarCss(callback) {

    var processos = [

    ];

    gulp.src(settings.sourceFolders.sass + '*.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 99 versions'],
            grid: "true",
            cascade: false
        }))
        .pipe(gulp.dest(settings.sourceFolders.sass));

    callback();
}
/***************************
* ####### Exportando funções de manipulação de Arquivos ####### *
****************************/

exports.createFileGitignore = createFileGitignore;
exports.createFileIndexHtml = createFileIndexHtml;
exports.createFileReadmeMD = createFileReadmeMD;
exports.createAllFilesCss = createAllFilesCss;
exports.createAllFilesSass = createAllFilesSass;
exports.createAllFilesJs = createAllFilesJs;

/************************
* ####### Exportando funções de manipulação de Pastas ####### *
**************************/

exports.createAllFolders = createAllFolders;

/************************
* ####### PLUGINS E LIBS ####### *
**************************/

exports.minificarImages = minificarImages;
exports.minificarJs = minificarJs;
//exports.minificarCss = minificarCss;
exports.minificarSass = minificarSass;
exports.prefixarCss = prefixarCss;

/************************
* ####### PROJECT ####### *
**************************/

exports.startProject = gulp.series(
    createAllFolders,
    createFileGitignore,
    createFileIndexHtml,
    createFileReadmeMD);

exports.createAllFiles = gulp.parallel(
    createAllFilesSass,
    createAllFilesJs
);

exports.minificarTudo = gulp.parallel(
    minificarSass,
    minificarJs,
    minificarImages
);

//exports.resetProject = resetProject;

/************************
* ####### DEFAULT ####### *
**************************/

exports.default = function (callback) {

    console.log("gulp default não possui tarefas disponiveis, use o comando gulp -T ou gulp --tasks para ver as tarefas disponiveis.");

    callback();
};
