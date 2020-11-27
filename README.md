<div align="center">  
<img src="./readme/gulp.png" alt="Gulp" height="80"/>
<img src="./readme/eslint.png" alt="Eslint" height="40"/>
<img src="./readme/webpack.png" alt="Webpack" height="80"/>
</div>

<br>

<h1 align="center">
Tarefas Automatizadas Gulp
</h1>

<p align="center">
  Minifique arquivos Sass, Depure erros de código JavaScript enquanto desenvolve, minifique e importe modulos e arquivos JavaScript, Reduza o tamanho das imagens, Monitore alterações em arquivos e imagens visualizando o resultado no Browser em tempo real com a ferramenta BrowserSync. 
</p>

<p align="center"><b>Status</b> Finalizado</p>

<p align="center">
 <a href="#bibliotecas-utilizadas">Bibliotecas Utilizadas</a> •
 <a href="#pré-requisitos">Pré-Requisitos</a> •
 <a href="#instalação">Instalação</a> • 
 <a href="#configuração">Configurações</a> • 
 <a href="#como-utilizar">Como Utilizar</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#memo-licença">Licença</a>
</p>

---

## Ferramentas utilizadas

- [Imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [Sass](https://www.npmjs.com/package/gulp-sass)
- [Concat](https://www.npmjs.com/package/gulp-concat)
- [AutoPrefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [BrowserSync](https://www.npmjs.com/package/browser-sync)
- [Webpack](https://webpack.js.org/)
- [Eslint](https://eslint.org/docs/user-guide/getting-started)

---

## Pré-Requisitos

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Básico de [Gulp](https://gulpjs.com/)

---

## Instalação

Supondo que você já tenha o **Node.js** e um gerenciador de pacotes como **NPM** ou **Yarn** instalado no seu computador, siga os passos seguintes.

---

### Baixe ou Clone o Repositório

```
git clone https://github.com/MatheusGomesWeb/minhas-taferas-automatizadas-gulp.git
```

---

### Instale as dependencias do projeto

```
NPM -> npm install
```

```
YARN -> yarn install
```

---

## Configuração

Todas as configurações estão localizadas no arquivo **settings.js**.

```
src: Caminho para os arquivos de desenvolvimento do projeto
dist: Caminho para os arquivos de distribuição (final) do projeto.
```

---

## Como Utilizar

### Tarefas Gulp

```
// Para visualizar todas as tarefas digite:

gulp -T ou gulp
```

- Para executar uma tarefa digite:
  > gulp < nometarefa >
- **browserSync**: Inicia um servidor com **LiveReload**.
- **watch**: Monitora todos os arquivos .html, .scss, e imagens, caso tenha alguma alteração ele compila, minifica, ou reduz o tamanho dos arquivos / imagens de acordo com a ação realizada.
- **minifyImages**: Reduz (minifica o tamanho das imagens)
- **minifySass**: Junta arquivos sass, adiciona prefixos dos browsers e gera arquivo css final minificado.

---

### Tarefas Webpack

Para configurar o caminho dos arquivos que desenvolvimento, modifique o arquivo webpack.config.js

- **Comandos Webpack**

- > npm run build - Gera o arquivo final para produção (otimizado)
- > npm run dev - Gera arquivo de desenvolvimento (não otimizado)

---

## Autor

<a href="https://github.com/MatheusGomesWeb">
 <img style="border-radius: 50%; " src="https://avatars3.githubusercontent.com/u/12579898?s=96&v=4" width="100px; " alt=""/>
 <br />
 <sub><b>Matheus Gomes</b></sub></a> <a href="https://github.com/MatheusGomesWeb" title="Matheus Gomes Web">🚀</a>
 <br>
Feito com ❤️ por Matheus Gomes 👋🏽 Entre em contato!
<br>
<a href="https://www.linkedin.com/in/matheusgomes/" target="_blank">
<img src="https://img.shields.io/badge/-Matheus-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusgomes/"/>
 </a>
 <a href="https://twitter.com/MatheusGomesWeb" target="_blank">
<img alt="twitter Matheus Gomes" src="https://img.shields.io/badge/-@MatheusGomesWeb-%231ca0f1?style=flat-square&logo=twitter&logoColor=white&link=https://twitter.com/MatheusGomesWeb"/>
 </a>
 <a href="https://www.facebook.com/matheusgomesrdj/" target="_blank">
<img src="https://img.shields.io/badge/-MatheusGomes-%234267b2?style=flat-square&logo=facebook&logoColor=white&link=https://www.facebook.com/matheusgomesrdj/"/>
</a>

---

## :memo: Licença

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
