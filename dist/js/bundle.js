/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Scroll */ \"./src/js/scripts/Scroll.js\");\n/* harmony import */ var _scripts_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Form */ \"./src/js/scripts/Form.js\");\n\n\n\n// Objeto com os eventos de scroll\nconst scroll = new _scripts_Scroll__WEBPACK_IMPORTED_MODULE_0__.default('[data-js-scrollToForm]', '.l-main');\nscroll.start();\n\n// Validação Formulário\nconst form = new _scripts_Form__WEBPACK_IMPORTED_MODULE_1__.default();\nform.start();\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scripts/Api.js":
/*!*******************************!*\
  !*** ./src/js/scripts/Api.js ***!
  \*******************************/
/*! namespace exports */
/*! export buscarCep [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buscarCep\": () => /* binding */ buscarCep\n/* harmony export */ });\nasync function buscarCep(cep) {\n  const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);\n  const json = await resp.json();\n\n  if (resp.status === 200) {\n    return {\n      logradouro: json.logradouro,\n      bairro: json.bairro,\n    };\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Api.js?");

/***/ }),

/***/ "./src/js/scripts/Form.js":
/*!********************************!*\
  !*** ./src/js/scripts/Form.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Form\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/scripts/Modal.js\");\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateForm */ \"./src/js/scripts/validateForm.js\");\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Api */ \"./src/js/scripts/Api.js\");\n/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mask */ \"./src/js/scripts/Mask.js\");\n\n\n\n\n\nclass Form {\n  constructor() {\n    this.form = document.forms.formulario;\n\n    this.preencherCep = this.preencherCep.bind(this);\n    this.submit = this.submit.bind(this);\n  }\n\n  // remove tudo que não é numero e retorna apenas os numeros\n  limparDados(dado) {\n    const regexp = /[^\\d]/g;\n\n    const filtro = Number(dado.replace(regexp, ''));\n\n    return filtro;\n  }\n\n  // Preenche o campo endereço automaticamente\n  preencherCep() {\n    const cep = async () => {\n      let loading = false;\n\n      // Instanciando Modal\n      const modal = new _Modal__WEBPACK_IMPORTED_MODULE_0__.default(\n        '.c-modal',\n        '.c-modal__container',\n        '.c-modal__close'\n      );\n\n      try {\n        // Valor de loading\n        loading = true;\n\n        // se estiver carregando...\n        if (loading) {\n          modal.openModal();\n\n          // Mensagem do Modal\n          modal.messageModal({\n            type: 2,\n            typeTitle: 'CARREGANDO INFORMAÇÕES DE',\n            typeMessage: `${this.form.cep.value}`,\n            message: [' '],\n          });\n        }\n\n        // Faz a requisição na API\n        const request = await (0,_Api__WEBPACK_IMPORTED_MODULE_2__.buscarCep)(this.form.cep.value);\n\n        // Coloca os dados da API nos campos do formulario\n        this.form.endereco.value = request.logradouro;\n        this.form.bairro.value = request.bairro;\n      } catch (e) {\n        throw new Error('Erro ao buscar o endereço com o cep informado');\n      } finally {\n        loading = false;\n\n        // Após carregar fecha o modal de loading\n        if (!loading) {\n          modal.closeModal();\n        }\n\n        if (\n          this.form.endereco.value === 'undefined' &&\n          this.form.bairro.value === 'undefined'\n        ) {\n          modal.start();\n          // Mensagem do Modal\n          modal.messageModal({\n            type: 0,\n            typeTitle: 'ERRO AO CARREGAR INFORMAÇÕES DESTE CEP',\n            typeMessage: `${this.form.cep.value}`,\n            message: ['Por favor informe um CEP válido'],\n          });\n\n          this.form.endereco.value = '';\n          this.form.bairro.value = '';\n        }\n      }\n    };\n\n    // Se o campo cep estiver correto (passou no test do RegExp) executa a função de buscar na API\n    if (!(0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('cep', this.form.cep.value).mensagem) {\n      cep();\n    }\n  }\n\n  // Cores das bordas dos input\n  inputError(input, typeError) {\n    if (typeError === 0) {\n      // Pinta a borda de vermelho\n      input.style.border = '1px solid #ff3333';\n      if (input.localName !== 'select') {\n        input.value = '';\n      }\n      input.focus();\n\n      // tira a borda do select ao selecionar outro valor do input\n      if (input.localName === 'select') {\n        input.addEventListener('change', () => {\n          input.style.border = '1px solid #cfcfcf';\n        });\n      }\n\n      // Adiciona evento keyup para tirar a borda vermelha ao digitar\n      input.addEventListener('keyup', () => {\n        input.style.border = '1px solid #cfcfcf';\n      });\n\n      // Adiciona borda verde caso o input esteja correto\n    } else if (typeError === 1) {\n      input.style.border = '1px solid #5fa553';\n      input.focus();\n      input.addEventListener('keyup', () => {\n        input.style.border = '1px solid #cfcfcf';\n      });\n    }\n  }\n\n  // Validar Formulario ao Submeter\n  submit(event) {\n    event.preventDefault();\n\n    // Instanciando Modal\n    const modal = new _Modal__WEBPACK_IMPORTED_MODULE_0__.default(\n      '.c-modal',\n      '.c-modal__container',\n      '.c-modal__close'\n    );\n\n    // Validação Formulário\n    const nome = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('nome', this.form.nome.value);\n    const dtNascimento = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)(\n      'dtNascimento',\n      this.form.dtNascimento.value\n    );\n\n    // Retorna true ou false se selecionou uma opção correta\n    const sexo =\n      this.form.sexo.value !== 'masculino' &&\n      this.form.sexo.value !== 'feminino'\n        ? false\n        : true;\n\n    // Retorna true ou false se selecionou uma opção correta\n    const estadoCivil =\n      this.form.estadoCivil.value !== 'casado' &&\n      this.form.estadoCivil.value !== 'solteiro'\n        ? false\n        : true;\n\n    // Seleciona os valores dos campos e os valida\n    const rg = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('rg', this.form.rg.value);\n    const cpf = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('cpf', this.form.cpf.value);\n    const endereco = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('endereco', this.form.endereco.value);\n    const numero = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)(\n      'numero',\n      this.limparDados(this.form.numero.value)\n    );\n    const cep = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('cep', this.form.cep.value);\n    const bairro = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('bairro', this.form.bairro.value);\n    const telefone = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('telefone', this.form.telefone.value);\n    const celular = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('celular', this.form.celular.value);\n    const email = (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)('email', this.form.email.value);\n    const checkbox = this.form.termos.checked;\n\n    // Verifica se possui alguma mensagem de erro nos campos\n    if (\n      nome.mensagem ||\n      dtNascimento.mensagem ||\n      !sexo ||\n      !estadoCivil ||\n      rg.mensagem ||\n      cpf.mensagem ||\n      endereco.mensagem ||\n      numero.mensagem ||\n      cep.mensagem ||\n      bairro.mensagem ||\n      telefone.mensagem ||\n      celular.mensagem ||\n      email.mensagem ||\n      !checkbox\n    ) {\n      // Inicia o Modal (Abre o modal e adiciona evento de fechar modal)\n      modal.start();\n\n      // Mensagem do Modal\n      modal.messageModal({\n        type: 0,\n        typeTitle: 'ERRO',\n        typeMessage: 'verifique os dados',\n        message: [\n          nome.mensagem,\n          dtNascimento.mensagem,\n          !sexo ? 'Selecione o campo SEXO' : null,\n          !estadoCivil ? 'Selecione o campo Estado Cívil' : null,\n          rg.mensagem,\n          cpf.mensagem,\n          endereco.mensagem,\n          numero.mensagem,\n          cep.mensagem,\n          bairro.mensagem,\n          telefone.mensagem,\n          celular.mensagem,\n          email.mensagem,\n          !checkbox\n            ? 'Você precisa concordar com os termos para enviar.'\n            : null,\n        ],\n      });\n\n      /*\n       * Pinta a borda do campo se estiver correto ou incorreto e da foco\n       * 0 - Erro\n       * 1 - Sucesso\n       */\n      nome.mensagem\n        ? this.inputError(this.form.nome, 0)\n        : this.inputError(this.form.nome, 1);\n      dtNascimento.mensagem\n        ? this.inputError(this.form.dtNascimento, 0)\n        : this.inputError(this.form.dtNascimento, 1);\n      !sexo\n        ? this.inputError(this.form.sexo, 0)\n        : this.inputError(this.form.sexo, 1);\n      !estadoCivil\n        ? this.inputError(this.form.estadoCivil, 0)\n        : this.inputError(this.form.estadoCivil, 1);\n      rg.mensagem\n        ? this.inputError(this.form.rg, 0)\n        : this.inputError(this.form.rg, 1);\n      cpf.mensagem\n        ? this.inputError(this.form.cpf, 0)\n        : this.inputError(this.form.cpf, 1);\n      cep.mensagem\n        ? this.inputError(this.form.cep, 0)\n        : this.inputError(this.form.cep, 1);\n      numero.mensagem\n        ? this.inputError(this.form.numero, 0)\n        : this.inputError(this.form.numero, 1);\n      endereco.mensagem\n        ? this.inputError(this.form.endereco, 0)\n        : this.inputError(this.form.endereco, 1);\n      bairro.mensagem\n        ? this.inputError(this.form.bairro, 0)\n        : this.inputError(this.form.bairro, 1);\n      telefone.mensagem\n        ? this.inputError(this.form.telefone, 0)\n        : this.inputError(this.form.telefone, 1);\n      celular.mensagem\n        ? this.inputError(this.form.celular, 0)\n        : this.inputError(this.form.celular, 1);\n      email.mensagem\n        ? this.inputError(this.form.email, 0)\n        : this.inputError(this.form.email, 1);\n    } else {\n      // Aqui envia o POST para a API\n      const apiPost = true;\n\n      // Dados tratados e prontos para serem enviados para a API\n      const data = {\n        nome: this.form.nome.value,\n        dtNascimento: this.limparDados(this.form.dtNascimento.value),\n        sexo: this.form.sexo.value,\n        estadoCivil: this.form.estadoCivil.value,\n        rg: this.limparDados(this.form.rg.value),\n        cpf: this.limparDados(this.form.cpf.value),\n        cep: this.limparDados(this.form.cep.value),\n        numero: this.limparDados(this.form.numero.value),\n        endereco: this.form.endereco.value,\n        bairro: this.form.bairro.value,\n        telefone: this.limparDados(this.form.telefone.value),\n        celular: this.limparDados(this.form.celular.value),\n        email: this.form.email.value,\n        termos: this.form.termos.checked,\n      };\n      console.log(data);\n\n      // se o Retorno do POST na api for true, mostra a mensagem sucesso e redireciona em 3s\n      if (apiPost) {\n        // abre o modal sem o evento de fechar\n        modal.openModal();\n\n        // Mensagem do Modal\n        modal.messageModal({\n          type: 1,\n          typeTitle: 'sucesso',\n          typeMessage: 'mensagem enviada com sucesso',\n          message: ['Aguarde enquanto redirecionamos você!'],\n        });\n\n        // Redireciona em 3s apos mostrar a mensagem do modal\n        setTimeout(() => {\n          location.reload(true);\n        }, 3000);\n      }\n    }\n  }\n\n  // Adiciona eventos ao formulario\n  addEvents() {\n    // Mascaras formulario\n    const dtNascimento = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('dtNascimento', this.form.dtNascimento);\n    dtNascimento.init();\n\n    const rg = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('rg', this.form.rg);\n    rg.init();\n\n    const cpf = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('cpf', this.form.cpf);\n    cpf.init();\n\n    const cep = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('cep', this.form.cep);\n    cep.init();\n\n    const numero = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('numero', this.form.numero);\n    numero.init();\n\n    const telefone = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('telefone', this.form.telefone);\n    telefone.init();\n\n    const celular = new _Mask__WEBPACK_IMPORTED_MODULE_3__.default('celular', this.form.celular);\n    celular.init();\n\n    // Eventos\n    this.form.cep.addEventListener('change', this.preencherCep);\n    this.form.addEventListener('submit', this.submit);\n  }\n\n  // inicia a classe e adiciona os eventos\n  start() {\n    if (this.form) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Form.js?");

/***/ }),

/***/ "./src/js/scripts/Mask.js":
/*!********************************!*\
  !*** ./src/js/scripts/Mask.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Mask\n/* harmony export */ });\nclass Mask {\n  constructor(type, input) {\n    this.type = type;\n    this.input = input;\n\n    this.frontController = this.frontController.bind(this);\n\n    this.rg = this.rg.bind(this);\n  }\n\n  // Mascaras data de nascimento\n\n  dtNascimento() {\n    // Seleciona tudo que não for decimal (numero)\n    const regexp = /[^\\d]/g;\n\n    // Substitui tudo que não for numero por nada (retorna apenas os numeros digitados)\n    const filtro = this.input.value.replace(regexp, '');\n\n    // Pega a data atual\n    const dataAtual = new Date();\n    // Pega o ano atual\n    const anoAtual = dataAtual.getFullYear();\n\n    // verifica se o dia é menor ou igual que 31\n    const diaNascimento = filtro.slice(0, 2) <= 31 ? filtro.slice(0, 2) : '**';\n\n    // verifica se o mes é menor ou igual a 12\n    const mesNascimento = filtro.slice(2, 4) <= 12 ? filtro.slice(2, 4) : '**';\n\n    // verifica se o ano é maior que o ano atual\n    const anoNascimento =\n      filtro.slice(4, 8) >= anoAtual ? '****' : filtro.slice(4, 8);\n\n    // Transforma a data de nascimento final (00/00/0000)\n    const dtNascimento =\n      diaNascimento + '/' + mesNascimento + '/' + anoNascimento;\n\n    // verifica se a data de nascimento está com a quantidade de caracteres correta, ou seja passou pela validação (00/00/0000)\n    if (dtNascimento.length === 10) this.input.value = dtNascimento;\n  }\n\n  // Mascaras do campo RG\n  rg() {\n    // Seleciona tudo que não for numero\n    const regexp = /[^\\d]/g;\n\n    // remove tudo que não for numero e retorna todos os numeros\n    const filtro = this.input.value.replace(regexp, '');\n\n    // Separa os numeros conforme as regras de um rg (00.000.000-0)\n    const primeiro = filtro.slice(0, 2) + '.';\n    const segundo = filtro.slice(2, 5) + '.';\n    const terceiro = filtro.slice(5, 8) + '-';\n    const digito = filtro.slice(8, 9);\n\n    // Forma o numero de RG final (00.000.000-0)\n    const rgFinal = primeiro + segundo + terceiro + digito;\n\n    // Verifica a quantidade de caracteres se está correta e adiciona o valor filtrado no input\n    if (rgFinal.length === 12) this.input.value = rgFinal;\n  }\n\n  // Mascaras do campo CPF\n  cpf() {\n    // Seleciona apenas os numeros\n    const regexp = /[^\\d]/g;\n\n    // remove tudo que nao for numero\n    const filtro = this.input.value.replace(regexp, '');\n\n    // separa os digitos e adiciona os . e - (000.000.000-00)\n    const primeiro = filtro.slice(0, 3) + '.';\n    const segundo = filtro.slice(3, 6) + '.';\n    const terceiro = filtro.slice(6, 9) + '-';\n    const digito = filtro.slice(9, 11);\n\n    // Forma o numero final do cpf\n    const cpfFinal = primeiro + segundo + terceiro + digito;\n\n    // verifica se possui a quantidade de numeros correta e adiciona o valor ao input\n    if (cpfFinal.length === 14) this.input.value = cpfFinal;\n  }\n\n  // Mascaras do campo CEP\n  cep() {\n    // Seleciona tudo que nao for numero\n    const regexp = /[^\\d]/g;\n\n    // remove tudo que nao for numero\n    const filtro = this.input.value.replace(regexp, '');\n\n    // forma o cep final (00000-000)\n    const cepFinal = filtro.slice(0, 5) + '-' + filtro.slice(5, 8);\n\n    // verifica se possui a quantidade de numeros correta e adiciona ao input\n    if (cepFinal.length === 9) this.input.value = cepFinal;\n  }\n\n  // Mascara numero\n  numero() {\n    // seleciona todos tudo que não for numero\n    const regexp = /[^\\d]/g;\n\n    // retorna apenas os numeros\n    const filtro = this.input.value.replace(regexp, '');\n\n    // if (!regexp.test(this.input.value)) {\n    const split = filtro.split();\n\n    if (split[0].length === 5) {\n      this.input.value =\n        split[0][0] +\n        split[0][1] +\n        '.' +\n        split[0][2] +\n        split[0][3] +\n        split[0][4];\n    } else if (split[0].length === 4) {\n      this.input.value =\n        split[0][0] + '.' + split[0][1] + split[0][2] + split[0][3];\n    } else {\n      this.input.value = split[0];\n    }\n  }\n\n  // Mascara telefone\n  telefone() {\n    // selecionar tudo que nao for numero\n    const telRegex = /(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}/g;\n\n    // filtra apenas os numeros\n    const regexp = /[^\\d]/g;\n    const filtro = this.input.value.replace(regexp, '');\n\n    // verifica se o telefone é válido\n    if (telRegex.test(this.input.value)) {\n      if (this.input.value.length >= 8) this.input.value = filtro;\n    } else {\n      this.input.value = 'Telefone incorreto';\n    }\n  }\n\n  // Mascara celular\n  celular() {\n    // selecionar tudo que nao for numero\n    const telRegex = /(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}/g;\n\n    // filtra apenas os numeros\n    const regexp = /[^\\d]/g;\n    const filtro = this.input.value.replace(regexp, '');\n\n    // verifica se o telefone é válido\n    if (telRegex.test(this.input.value)) {\n      if (this.input.value.length >= 8) this.input.value = filtro;\n    } else {\n      this.input.value = 'Celular incorreto';\n    }\n  }\n\n  // Redireciona para a função desejada\n  frontController() {\n    if (this.type === 'dtNascimento') this.dtNascimento();\n    else if (this.type === 'rg') this.rg();\n    else if (this.type === 'cpf') this.cpf();\n    else if (this.type === 'cep') this.cep();\n    else if (this.type === 'numero') this.numero();\n    else if (this.type === 'telefone') this.telefone();\n    else if (this.type === 'celular') this.celular();\n  }\n\n  addEvents() {\n    this.input.addEventListener('change', this.frontController);\n  }\n\n  init() {\n    if (this.type && this.input) this.addEvents();\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Mask.js?");

/***/ }),

/***/ "./src/js/scripts/Modal.js":
/*!*********************************!*\
  !*** ./src/js/scripts/Modal.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Modal\n/* harmony export */ });\nclass Modal {\n  constructor(container, modal, closeBtn) {\n    this.container = document.querySelector(container);\n    this.modal = document.querySelector(modal);\n    this.closeBtn = document.querySelector(closeBtn);\n\n    // bind\n    this.closeModal = this.closeModal.bind(this);\n    this.outsideCloseModal = this.outsideCloseModal.bind(this);\n  }\n\n  // Mensagem dentro do Modal\n  messageModal({ type, typeTitle, typeMessage, message }) {\n    // Mensagem do Titulo do Modal\n    this.modal.querySelector('.c-modal__title__type').innerHTML = typeTitle;\n    this.modal.querySelector(\n      '.c-modal__title__message'\n    ).innerHTML = typeMessage;\n\n    // Insere a mensagem no modal e a Cor do Modal dependendo do tipo de Erro\n    function insertMessage(classTitle, classItem) {\n      document.querySelector('.c-modal__title').classList.add(classTitle);\n\n      // Mensagem Modal\n      message.forEach((msg) => {\n        if (msg) {\n          document.querySelector('.c-modal__list').innerHTML += `\n          <li class=\"c-modal__list__item ${classItem}\">${msg}</li>    \n        `;\n        }\n      });\n    }\n\n    /* \n    Tipos\n     * 0: erro\n     * 1: sucesso\n     * 2: loading\n     */\n\n    if (type === 0) {\n      insertMessage('c-modal__title--erro', '');\n\n      // Removendo classes para mudar a cor do titulo\n      document\n        .querySelector('.c-modal__title')\n        .classList.remove('c-modal__title--sucesso');\n      document\n        .querySelector('.c-modal__title')\n        .classList.remove('c-modal__title--loading');\n    } else if (type === 1) {\n      insertMessage('c-modal__title--sucesso', 'c-modal__item--sucesso');\n\n      // Removendo classes para mudar a cor do titulo\n      document\n        .querySelector('.c-modal__title')\n        .classList.remove('c-modal__title--erro');\n      document\n        .querySelector('.c-modal__title')\n        .classList.remove('c-modal__title--loading');\n    } else if (type === 2) {\n      insertMessage('c-modal__title--loading', 'c-modal__item--loading');\n\n      // Removendo classes para mudar a cor do titulo\n      document\n        .querySelector('.c-modal__title')\n        .classList.remove('c-modal__title--erro');\n      document\n        .querySelector('.c-modal__title')\n        .classList.remove('c-modal__title--sucesso');\n    }\n  }\n\n  // Limpa mensagem do modal\n  clearModalMessage(elMessage) {\n    this.modal.querySelector(elMessage).innerHTML = '';\n  }\n\n  // Abre o modal\n  openModal() {\n    if (this.container.dataset.activeModal === 'false') {\n      this.container.dataset.activeModal = 'true';\n    }\n  }\n\n  // Fecha o Modal\n  closeModal() {\n    if (this.container.dataset.activeModal) {\n      this.container.dataset.activeModal = false;\n      this.container.removeEventListener('click', this.outsideCloseModal);\n      this.clearModalMessage('.c-modal__list');\n    }\n  }\n\n  // Fecha modal ao clicar fora\n  outsideCloseModal({ target }) {\n    if (target.dataset.activeModal) {\n      this.closeModal();\n    }\n  }\n\n  // Adiciona evento de click para fechar o modal ao clicar no botao X\n  addEvents() {\n    this.closeBtn.addEventListener('click', this.closeModal);\n    this.container.addEventListener('click', this.outsideCloseModal);\n  }\n\n  // Inicia a classe\n  start() {\n    if (this.container && this.modal && this.closeBtn) {\n      this.addEvents();\n      this.openModal();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Modal.js?");

/***/ }),

/***/ "./src/js/scripts/Scroll.js":
/*!**********************************!*\
  !*** ./src/js/scripts/Scroll.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Scroll\n/* harmony export */ });\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ \"./src/js/scripts/debounce.js\");\n\n\nclass Scroll {\n  constructor(elClick, elTarget) {\n    this.elClick = document.querySelector(elClick);\n    this.elTarget = document.querySelector(elTarget);\n\n    this.scrollTo = this.scrollTo.bind(this);\n    this.scrollTop = (0,_debounce__WEBPACK_IMPORTED_MODULE_0__.default)(this.scrollTop.bind(this), 100);\n  }\n\n  // Faz o scroll suave para a seção especifica\n  scrollTo() {\n    this.elTarget.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n  }\n\n  // Scroll para o topo\n  scrollTop() {\n    const scrollHeight = window.pageYOffset;\n    const elementHeight = this.elTarget.offsetHeight - 100;\n    const elTop = document.querySelector('.c-btn-top');\n\n    if (scrollHeight > elementHeight) {\n      elTop.style.display = 'flex';\n      elTop.addEventListener('click', this.scrollTo);\n    } else {\n      elTop.style.display = 'none';\n      elTop.removeEventListener('click', this.scrollTo);\n    }\n  }\n\n  addEvent() {\n    this.elClick.addEventListener('click', this.scrollTo);\n    window.addEventListener('scroll', this.scrollTop);\n  }\n\n  start() {\n    if (this.elClick && this.elTarget) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Scroll.js?");

/***/ }),

/***/ "./src/js/scripts/debounce.js":
/*!************************************!*\
  !*** ./src/js/scripts/debounce.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ debounce\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/debounce.js?");

/***/ }),

/***/ "./src/js/scripts/validateForm.js":
/*!****************************************!*\
  !*** ./src/js/scripts/validateForm.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ validateForm\n/* harmony export */ });\nconst types = {\n  dtNascimento: {\n    /* \n      25.04.2017  \n      02.04.2017  \n      2.4.2017  \n      25/04/2017  \n      5/12/2017  \n      15/2/2017  \n      25-04-2017  \n      6-10-2017  \n      16-5-2017 \n    */\n    regex: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,\n    message: 'Data de Nascimento inválida',\n  },\n  rg: {\n    /*\n    00.000.000-0 | X\n    */\n    regex: /(^\\d{1,2}).?(\\d{3}).?(\\d{3})-?(\\d{1}|X|x$)/,\n    message: 'RG inválido',\n  },\n  cpf: {\n    regex: /(?:\\d{3}[-.]?){3}\\d{2}/g,\n    message: 'CPF inválido',\n  },\n  cep: {\n    regex: /[0-9]{5}-[0-9]{3}/,\n    message: 'Informe um cep válido',\n  },\n  numero: {\n    regex: /^\\d+$/,\n    message: 'Utilize apenas números',\n  },\n  celular: {\n    regex: /(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}/g,\n    message: 'Celular inválido',\n  },\n  telefone: {\n    /*\n    '+55 11 98888-8888',\n  '+55 11 98888 8888',\n  '+55 11 988888888',\n  '+55 11988888888',\n  '+5511988888888',\n  '5511988888888',\n  '11 98888-8888',\n  '11 98888 8888',\n  '(11) 98888 8888',\n  '(11) 98888-8888',\n  '11-98888-8888',\n  '11 98888 8888',\n  '11988888888',\n  '11988888888',\n  '988888888',\n  '(11)988888888',\n  '98888 8888',\n  '8888 8888'\n    */\n    regex: /(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}/g,\n    message: 'Telefone inválido',\n  },\n  email: {\n    regex: /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,\n    message: 'Preencha um email válido',\n  },\n};\n\nfunction validateForm(type, value) {\n  // Mensagem de erro\n  let mensagem = '';\n\n  // Valida os valores e compara com a regex\n  function validate(value) {\n    if (type === false && value === false) return true;\n\n    if (value.length === 0) {\n      mensagem = `Preencha um valor no campo: <strong class=\"c-modal__list__campo\">${type}</strong>`;\n      return false;\n    } else if (types[type] && !types[type].regex.test(value)) {\n      mensagem = `${types[type].message}: <strong style=\"margin-left: .3rem;\">${type}</strong>`;\n      return false;\n    } else {\n      mensagem = '';\n      return true;\n    }\n  }\n\n  // Executa a função para retornar o valor no objeto\n  validate(value);\n\n  // Retorna um objeto com o valor de erro\n  return {\n    mensagem,\n  };\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/validateForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;