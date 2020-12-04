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

/***/ "./src/js/scripts/Form.js":
/*!********************************!*\
  !*** ./src/js/scripts/Form.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Form\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/scripts/Modal.js\");\n\n\nclass Form {\n  constructor() {\n    this.form = document.forms.formulario;\n\n    this.submit = this.submit.bind(this);\n  }\n\n  // Validar Formulario ao Submeter\n  submit(event) {\n    event.preventDefault();\n\n    // Instanciando Modal\n    const modal = new _Modal__WEBPACK_IMPORTED_MODULE_0__.default(\n      '.c-modal',\n      '.c-modal__container',\n      '.c-modal__close'\n    );\n\n    // Validação Formulário\n    const b = false;\n\n    const nome = this.form.nome.value;\n    const sexo = this.form.sexo.value;\n\n    // Sucesso\n    if (nome && sexo) {\n      // Mensagem do Modal\n      modal.messageModal({\n        type: 1,\n        typeTitle: 'sucesso',\n        typeMessage: 'mensagem enviada com sucesso',\n        message: ['Mensagem enviada com sucesso !'],\n      });\n\n      // Inicia o Modal (Abre o modal e adiciona evento de fechar modal)\n      modal.start();\n    } else {\n      // Mensagem do Modal\n      modal.messageModal({\n        type: 0,\n        typeTitle: 'ERRO',\n        typeMessage: 'verifique os dados',\n        message: ['Preencha o campo nome', 'Selecione o campo sexo'],\n      });\n      // Inicia o Modal (Abre o modal e adiciona evento de fechar modal)\n      modal.start();\n    }\n  }\n\n  // Adiciona Evento ao formulario\n  addEvents() {\n    this.form.addEventListener('submit', this.submit);\n  }\n\n  // Inicia a classe\n  start() {\n    if (this.form) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Form.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Modal\n/* harmony export */ });\nclass Modal {\n  constructor(container, modal, closeBtn) {\n    this.container = document.querySelector(container);\n    this.modal = document.querySelector(modal);\n    this.closeBtn = document.querySelector(closeBtn);\n\n    this.closeModal = this.closeModal.bind(this);\n  }\n\n  // Mensagem dentro do Modal\n  messageModal({ type, typeTitle, typeMessage, message }) {\n    // Mensagem do Titulo do Modal\n    this.modal.querySelector('.c-modal__title__type').innerHTML = typeTitle;\n    this.modal.querySelector(\n      '.c-modal__title__message'\n    ).innerHTML = typeMessage;\n\n    // Insere a mensagem no modal e a Cor do Modal dependendo do tipo de Erro\n    function insertMessage(classTitle, classItem) {\n      document.querySelector('.c-modal__title').classList.add(classTitle);\n\n      // Mensagem Modal\n      message.forEach((msg) => {\n        document.querySelector('.c-modal__list').innerHTML += `\n          <li class=\"c-modal__list__item ${classItem}\">${msg}</li>    \n        `;\n      });\n    }\n\n    /* \n    Tipos de erros\n     * 0: erro\n     * 1: sucesso\n     */\n\n    if (type === 0) {\n      insertMessage('c-modal__title--erro', '');\n    } else if (type === 1) {\n      insertMessage('c-modal__title--sucesso', 'c-modal__item--sucesso');\n    }\n  }\n\n  // Abre o modal\n  openModal() {\n    if (this.container.dataset.activeModal === 'false') {\n      this.container.dataset.activeModal = 'true';\n    }\n  }\n\n  // Fecha o Modal\n  closeModal() {\n    if (this.container.dataset.activeModal === 'true') {\n      this.container.dataset.activeModal = 'false';\n    }\n  }\n\n  // Fecha modal ao clicar fora\n  outsideCloseModal({ target }) {\n    if (!target.dataset.activeModal) {\n      this.container.dataset.activeModal = false;\n      this.container.removeEventListener('click', this.outsideCloseModal);\n    }\n  }\n\n  // Adiciona evento de click para fechar o modal ao clicar no botao X\n  addEvents() {\n    this.closeBtn.addEventListener('click', this.closeModal);\n    this.container.addEventListener('click', this.outsideCloseModal);\n  }\n\n  // Inicia a classe\n  start() {\n    if (this.container && this.modal && this.closeBtn) {\n      this.addEvents();\n      this.openModal();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://landing-page-supermercados-magmaxx-cupom-desconto/./src/js/scripts/Modal.js?");

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