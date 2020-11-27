//Gulp
const gulp = require('gulp');

// plugins e libs
const gulp_imagemin = require('gulp-imagemin'); // Minificar Imagens - Reduzir tamanho das imagens
const gulp_sass = require('gulp-sass'); // Minificar Sass
const gulp_concat = require('gulp-concat'); // Junta varios arquivos em apenas um arquivo final.
const gulp_autoprefixer = require('gulp-autoprefixer'); // Adiciona tags do css para compatibilidade com browsers antigos.
const browser_sync = require('browser-sync').create(); // Inicia um servidor e monitora alterações nos arquivos e atualiza o navegador automaticamente.

// Browser-Sync
function browserSync() {
  browser_sync.init({
    server: {
      baseDir: __dirname + '/',
    },
  });
}

// Settings
const settings = require('./settings.js');

// Minificar Imagens - Gulp-Imagemin
function minifyImages(callback) {
  gulp
    .src(settings.src.images + '**')
    .pipe(gulp_imagemin())
    .pipe(gulp.dest(settings.dist.images))
    .pipe(browser_sync.stream());
}

// Minificar Sass - Gulp-Sass
function minifySass() {
  gulp
    .src(settings.src.sass + '*.scss')
    .pipe(
      gulp_sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(
      gulp_autoprefixer({
        cascade: false,
        grid: 'autoplace',
        flexbox: true,
        overrideBrowserslist: ['last 99 versions'],
      })
    )

    .pipe(gulp_concat('style.min.css'))
    .pipe(gulp.dest(settings.dist.css))
    .pipe(browser_sync.stream());
}

// Monitorando alterações nos arquivos (.html, .scss, .js) e imagens (.jpg, .png, .gif, .svg etc...)
function watch() {
  // Monitorando Sass
  gulp.watch(settings.src.sass + '*.scss').on('change', minifySass);

  // Monitorando Imagens
  gulp.watch(settings.src.images + '**').on('change', minifyImages);

  // Monitorando Html
  gulp.watch('./*.html').on('change', browser_sync.reload);
}

const disponiveis = ['minifySass', 'minifyImages', 'watch'];

// default task
exports.default = () => {
  console.log(
    'Tarefas Disponíveis: ' +
      [...disponiveis] +
      '.\n' +
      'Para utilizar uma tarefa execute: gulp <tarefa>'
  );
};

// Monitora alterações nos arquivos (.html, .scss, .js) e imagens (.jpg, .png, .gif, .svg etc...)
exports.watch = gulp.parallel(browserSync, watch);

// Minificar e agrupar arquivos sass
exports.minifySass = minifySass;

// Minificar imagens
exports.minifyImages = minifyImages;
