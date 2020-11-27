const path = require('path');
const settings = require('./settings.js');

module.exports = {
  // Nome do arquivo que importa os modulos
  entry: settings.src.js + 'index.js',
  output: {
    path: path.resolve(__dirname, settings.dist.js),
    // Nome do arquivo final
    filename: 'bundle.js',
  },
};
