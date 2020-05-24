module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/calendarios/brazil/feriados.js":
/*!*********************************************!*\
  !*** ./core/calendarios/brazil/feriados.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return feriados; });
/* harmony import */ var _feriado__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feriado */ "./core/feriado.js");

function feriados(domingoDePascoa) {
  let feriados = {};
  let feriadosFixos = {};
  feriadosFixos.newYearsDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1, "New Year's Day");
  feriadosFixos.SaoPauloAnniversary = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](25, 1, "Sao Paulo's Anniversary");
  feriadosFixos.tiradentesDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](21, 4, "Tiradentes Day");
  feriadosFixos.laborDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](1, 5, "Labor Day");
  feriadosFixos.revolutionDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](9, 7, "Revolution Day");
  feriadosFixos.independenceDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](7, 9, "Independence Day");
  feriadosFixos.nossaSraAparecidaDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](12, 10, "Nossa Senhora Aparecida's Day");
  feriadosFixos.allSoulsDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](2, 11, "All Souls Day");
  feriadosFixos.blackConciousnessDay = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](20, 11, "Black Conciousness Day");
  feriadosFixos.christmasEve = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](24, 12, "Christams Eve");
  feriadosFixos.christmas = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"](25, 12, "Christams Eve");

  function feriadosComIntervaloFixo() {
    let carnivalMonday = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    carnivalMonday.obterFeriadoComIntervaloFixo(domingoDePascoa, -48, "Carnival Monday");
    let carnivalTuesday = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    carnivalTuesday.obterFeriadoComIntervaloFixo(domingoDePascoa, -47, "Carnival Tuesday");
    let passionOfChrist = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    passionOfChrist.obterFeriadoComIntervaloFixo(domingoDePascoa, -2, "Passion of Christ");
    let corpusChristi = new _feriado__WEBPACK_IMPORTED_MODULE_0__["default"]();
    corpusChristi.obterFeriadoComIntervaloFixo(domingoDePascoa, 60, "Corpus Christi");
    console.log(carnivalMonday);
    return {
      carnivalMonday,
      carnivalTuesday,
      passionOfChrist,
      corpusChristi
    };
  }

  feriados.feriadosFixos = feriadosFixos;
  feriados.feriadosComIntervaloFixo = feriadosComIntervaloFixo();
  return feriados;
}

/***/ }),

/***/ "./core/calendarios/brazil/tiposDeCalendarios/ANBIMA.js":
/*!**************************************************************!*\
  !*** ./core/calendarios/brazil/tiposDeCalendarios/ANBIMA.js ***!
  \**************************************************************/
/*! exports provided: obterListaDeFeriados */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obterListaDeFeriados", function() { return obterListaDeFeriados; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feriados__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feriados */ "./core/calendarios/brazil/feriados.js");
/* harmony import */ var _calendariosLunares_gregoriano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendariosLunares/gregoriano */ "./core/calendariosLunares/gregoriano.js");



function obterListaDeFeriados(ano) {
  const domingoDePascoa = Object(_calendariosLunares_gregoriano__WEBPACK_IMPORTED_MODULE_2__["obterDomingoDePascoa"])(ano);
  let listaDeFeriados = [];
  const lista = Object(_feriados__WEBPACK_IMPORTED_MODULE_1__["default"])(domingoDePascoa);
  console.log(lista);
  listaDeFeriados.push(lista);
  return listaDeFeriados;
}

/***/ }),

/***/ "./core/calendariosLunares/gregoriano.js":
/*!***********************************************!*\
  !*** ./core/calendariosLunares/gregoriano.js ***!
  \***********************************************/
/*! exports provided: obterDomingoDePascoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obterDomingoDePascoa", function() { return obterDomingoDePascoa; });
function obterDomingoDePascoa(ano) {
  let a = ano % 19;
  let b = Math.floor(parseFloat(ano) / 100);
  let c = ano % 100;
  let d = Math.floor(b / 4);
  let e = b % 4;
  let f = Math.floor((b + 8) / 25);
  let g = Math.floor((b - f + 1) / 3);
  let h = (19 * a + b - d - g + 15) % 30;
  let i = Math.floor(parseFloat(c) / 4);
  let k = c % 4;
  let l = (32 + 2 * e + 2 * i - h - k) % 7;
  let m = Math.floor((a + 11 * h + 22 * l) / 451);
  let mes = Number(Math.floor((h + l - 7 * m + 114) / 31));
  let dia = Number((h + l - 7 * m + 114) % 31) + 1;
  return {
    dia,
    mes,
    ano
  };
}

/***/ }),

/***/ "./core/feriado.js":
/*!*************************!*\
  !*** ./core/feriado.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feriado; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendariosLunares_gregoriano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendariosLunares/gregoriano */ "./core/calendariosLunares/gregoriano.js");


class Feriado {
  constructor(dia, mes, descricao) {
    this.dia = dia;
    this.mes = mes;
    this.descricao = descricao;
  }

  obterFeriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
    let diaAdicionado = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(domingoDePascoa, intervalo));
    let mesAdicionado = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"])(domingoDePascoa, intervalo));
    return new Feriado(diaAdicionado, mesAdicionado, descricao);
  }

}

/***/ }),

/***/ "./core/servicos.js":
/*!**************************!*\
  !*** ./core/servicos.js ***!
  \**************************/
/*! exports provided: verify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return verify; });
/* harmony import */ var _calendarios_brazil_tiposDeCalendarios_ANBIMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendarios/brazil/tiposDeCalendarios/ANBIMA */ "./core/calendarios/brazil/tiposDeCalendarios/ANBIMA.js");

function verify() {
  const listaDeFeriados = Object(_calendarios_brazil_tiposDeCalendarios_ANBIMA__WEBPACK_IMPORTED_MODULE_0__["obterListaDeFeriados"])(2020);
  return listaDeFeriados;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_servicos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/servicos */ "./core/servicos.js");
var _jsxFileName = "C:\\Users\\Bruno Pinheiro\\Desktop\\codes\\calculator\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function HomePage() {
  console.log(Object(_core_servicos__WEBPACK_IMPORTED_MODULE_1__["verify"])(2020));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Bem vindo, Fernandinho!"), __jsx("div", {
    className: "calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bruno Pinheiro\Desktop\codes\calculator\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jYWxlbmRhcmlvcy9icmF6aWwvZmVyaWFkb3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jYWxlbmRhcmlvcy9icmF6aWwvdGlwb3NEZUNhbGVuZGFyaW9zL0FOQklNQS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NhbGVuZGFyaW9zTHVuYXJlcy9ncmVnb3JpYW5vLmpzIiwid2VicGFjazovLy8uL2NvcmUvZmVyaWFkby5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3NlcnZpY29zLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJmZXJpYWRvcyIsImRvbWluZ29EZVBhc2NvYSIsImZlcmlhZG9zRml4b3MiLCJuZXdZZWFyc0RheSIsIkZlcmlhZG8iLCJTYW9QYXVsb0Fubml2ZXJzYXJ5IiwidGlyYWRlbnRlc0RheSIsImxhYm9yRGF5IiwicmV2b2x1dGlvbkRheSIsImluZGVwZW5kZW5jZURheSIsIm5vc3NhU3JhQXBhcmVjaWRhRGF5IiwiYWxsU291bHNEYXkiLCJibGFja0NvbmNpb3VzbmVzc0RheSIsImNocmlzdG1hc0V2ZSIsImNocmlzdG1hcyIsImZlcmlhZG9zQ29tSW50ZXJ2YWxvRml4byIsImNhcm5pdmFsTW9uZGF5Iiwib2J0ZXJGZXJpYWRvQ29tSW50ZXJ2YWxvRml4byIsImNhcm5pdmFsVHVlc2RheSIsInBhc3Npb25PZkNocmlzdCIsImNvcnB1c0NocmlzdGkiLCJjb25zb2xlIiwibG9nIiwib2J0ZXJMaXN0YURlRmVyaWFkb3MiLCJhbm8iLCJvYnRlckRvbWluZ29EZVBhc2NvYSIsImxpc3RhRGVGZXJpYWRvcyIsImxpc3RhIiwicHVzaCIsImEiLCJiIiwiTWF0aCIsImZsb29yIiwicGFyc2VGbG9hdCIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwibCIsIm0iLCJtZXMiLCJOdW1iZXIiLCJkaWEiLCJjb25zdHJ1Y3RvciIsImRlc2NyaWNhbyIsImludGVydmFsbyIsImRpYUFkaWNpb25hZG8iLCJnZXREYXkiLCJhZGREYXlzIiwibWVzQWRpY2lvbmFkbyIsImdldE1vbnRoIiwidmVyaWZ5IiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxlQUFsQixFQUFtQztBQUNoRCxNQUFJRCxRQUFRLEdBQUcsRUFBZjtBQUVBLE1BQUlFLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxlQUFhLENBQUNDLFdBQWQsR0FBNEIsSUFBSUMsZ0RBQUosQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixnQkFB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Ozs7QUNMRDtBQUVBOztBQUVBLFNBQVM4QixRQUFULEdBQW9CO0FBQ2xCbkMsU0FBTyxDQUFDQyxHQUFSLENBQVlpQyw2REFBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1EOztBQUVjQyx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBGZXJpYWRvIGZyb20gXCIuLi8uLi9mZXJpYWRvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXJpYWRvcyhkb21pbmdvRGVQYXNjb2EpIHtcclxuICBsZXQgZmVyaWFkb3MgPSB7fTtcclxuXHJcbiAgbGV0IGZlcmlhZG9zRml4b3MgPSB7fTtcclxuICBmZXJpYWRvc0ZpeG9zLm5ld1llYXJzRGF5ID0gbmV3IEZlcmlhZG8oMSwgMSwgXCJOZXcgWWVhcidzIERheVwiKTtcclxuICBmZXJpYWRvc0ZpeG9zLlNhb1BhdWxvQW5uaXZlcnNhcnkgPSBuZXcgRmVyaWFkbyhcclxuICAgIDI1LFxyXG4gICAgMSxcclxuICAgIFwiU2FvIFBhdWxvJ3MgQW5uaXZlcnNhcnlcIlxyXG4gICk7XHJcbiAgZmVyaWFkb3NGaXhvcy50aXJhZGVudGVzRGF5ID0gbmV3IEZlcmlhZG8oMjEsIDQsIFwiVGlyYWRlbnRlcyBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5sYWJvckRheSA9IG5ldyBGZXJpYWRvKDEsIDUsIFwiTGFib3IgRGF5XCIpO1xyXG4gIGZlcmlhZG9zRml4b3MucmV2b2x1dGlvbkRheSA9IG5ldyBGZXJpYWRvKDksIDcsIFwiUmV2b2x1dGlvbiBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5pbmRlcGVuZGVuY2VEYXkgPSBuZXcgRmVyaWFkbyg3LCA5LCBcIkluZGVwZW5kZW5jZSBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5ub3NzYVNyYUFwYXJlY2lkYURheSA9IG5ldyBGZXJpYWRvKFxyXG4gICAgMTIsXHJcbiAgICAxMCxcclxuICAgIFwiTm9zc2EgU2VuaG9yYSBBcGFyZWNpZGEncyBEYXlcIlxyXG4gICk7XHJcbiAgZmVyaWFkb3NGaXhvcy5hbGxTb3Vsc0RheSA9IG5ldyBGZXJpYWRvKDIsIDExLCBcIkFsbCBTb3VscyBEYXlcIik7XHJcbiAgZmVyaWFkb3NGaXhvcy5ibGFja0NvbmNpb3VzbmVzc0RheSA9IG5ldyBGZXJpYWRvKFxyXG4gICAgMjAsXHJcbiAgICAxMSxcclxuICAgIFwiQmxhY2sgQ29uY2lvdXNuZXNzIERheVwiXHJcbiAgKTtcclxuICBmZXJpYWRvc0ZpeG9zLmNocmlzdG1hc0V2ZSA9IG5ldyBGZXJpYWRvKDI0LCAxMiwgXCJDaHJpc3RhbXMgRXZlXCIpO1xyXG4gIGZlcmlhZG9zRml4b3MuY2hyaXN0bWFzID0gbmV3IEZlcmlhZG8oMjUsIDEyLCBcIkNocmlzdGFtcyBFdmVcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGZlcmlhZG9zQ29tSW50ZXJ2YWxvRml4bygpIHtcclxuICAgIGxldCBjYXJuaXZhbE1vbmRheSA9IG5ldyBGZXJpYWRvKCk7XHJcbiAgICBjYXJuaXZhbE1vbmRheS5vYnRlckZlcmlhZG9Db21JbnRlcnZhbG9GaXhvKFxyXG4gICAgICBkb21pbmdvRGVQYXNjb2EsXHJcbiAgICAgIC00OCxcclxuICAgICAgXCJDYXJuaXZhbCBNb25kYXlcIlxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgY2Fybml2YWxUdWVzZGF5ID0gbmV3IEZlcmlhZG8oKTtcclxuICAgIGNhcm5pdmFsVHVlc2RheS5vYnRlckZlcmlhZG9Db21JbnRlcnZhbG9GaXhvKFxyXG4gICAgICBkb21pbmdvRGVQYXNjb2EsXHJcbiAgICAgIC00NyxcclxuICAgICAgXCJDYXJuaXZhbCBUdWVzZGF5XCJcclxuICAgICk7XHJcblxyXG4gICAgbGV0IHBhc3Npb25PZkNocmlzdCA9IG5ldyBGZXJpYWRvKCk7XHJcbiAgICBwYXNzaW9uT2ZDaHJpc3Qub2J0ZXJGZXJpYWRvQ29tSW50ZXJ2YWxvRml4byhcclxuICAgICAgZG9taW5nb0RlUGFzY29hLFxyXG4gICAgICAtMixcclxuICAgICAgXCJQYXNzaW9uIG9mIENocmlzdFwiXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBjb3JwdXNDaHJpc3RpID0gbmV3IEZlcmlhZG8oKTtcclxuICAgIGNvcnB1c0NocmlzdGkub2J0ZXJGZXJpYWRvQ29tSW50ZXJ2YWxvRml4byhcclxuICAgICAgZG9taW5nb0RlUGFzY29hLFxyXG4gICAgICA2MCxcclxuICAgICAgXCJDb3JwdXMgQ2hyaXN0aVwiXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhcm5pdmFsTW9uZGF5KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJuaXZhbE1vbmRheSxcclxuICAgICAgY2Fybml2YWxUdWVzZGF5LFxyXG4gICAgICBwYXNzaW9uT2ZDaHJpc3QsXHJcbiAgICAgIGNvcnB1c0NocmlzdGksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZmVyaWFkb3MuZmVyaWFkb3NGaXhvcyA9IGZlcmlhZG9zRml4b3M7XHJcbiAgZmVyaWFkb3MuZmVyaWFkb3NDb21JbnRlcnZhbG9GaXhvID0gZmVyaWFkb3NDb21JbnRlcnZhbG9GaXhvKCk7XHJcblxyXG4gIHJldHVybiBmZXJpYWRvcztcclxufVxyXG4iLCJpbXBvcnQgeyBnZXREYXRlIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBmZXJpYWRvcyBmcm9tIFwiLi4vZmVyaWFkb3NcIjtcclxuaW1wb3J0IHsgb2J0ZXJEb21pbmdvRGVQYXNjb2EgfSBmcm9tIFwiLi4vLi4vLi4vY2FsZW5kYXJpb3NMdW5hcmVzL2dyZWdvcmlhbm9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnRlckxpc3RhRGVGZXJpYWRvcyhhbm8pIHtcclxuICBjb25zdCBkb21pbmdvRGVQYXNjb2EgPSBvYnRlckRvbWluZ29EZVBhc2NvYShhbm8pO1xyXG5cclxuICBsZXQgbGlzdGFEZUZlcmlhZG9zID0gW107XHJcblxyXG4gIGNvbnN0IGxpc3RhID0gZmVyaWFkb3MoZG9taW5nb0RlUGFzY29hKTtcclxuXHJcbiAgY29uc29sZS5sb2cobGlzdGEpO1xyXG5cclxuICBsaXN0YURlRmVyaWFkb3MucHVzaChsaXN0YSk7XHJcblxyXG4gIHJldHVybiBsaXN0YURlRmVyaWFkb3M7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG9idGVyRG9taW5nb0RlUGFzY29hKGFubykge1xyXG4gIGxldCBhID0gYW5vICUgMTk7XHJcbiAgbGV0IGIgPSBNYXRoLmZsb29yKHBhcnNlRmxvYXQoYW5vKSAvIDEwMCk7XHJcbiAgbGV0IGMgPSBhbm8gJSAxMDA7XHJcbiAgbGV0IGQgPSBNYXRoLmZsb29yKGIgLyA0KTtcclxuICBsZXQgZSA9IGIgJSA0O1xyXG4gIGxldCBmID0gTWF0aC5mbG9vcigoYiArIDgpIC8gMjUpO1xyXG4gIGxldCBnID0gTWF0aC5mbG9vcigoYiAtIGYgKyAxKSAvIDMpO1xyXG4gIGxldCBoID0gKDE5ICogYSArIGIgLSBkIC0gZyArIDE1KSAlIDMwO1xyXG4gIGxldCBpID0gTWF0aC5mbG9vcihwYXJzZUZsb2F0KGMpIC8gNCk7XHJcbiAgbGV0IGsgPSBjICUgNDtcclxuICBsZXQgbCA9ICgzMiArIDIgKiBlICsgMiAqIGkgLSBoIC0gaykgJSA3O1xyXG4gIGxldCBtID0gTWF0aC5mbG9vcigoYSArIDExICogaCArIDIyICogbCkgLyA0NTEpO1xyXG5cclxuICBsZXQgbWVzID0gTnVtYmVyKE1hdGguZmxvb3IoKGggKyBsIC0gNyAqIG0gKyAxMTQpIC8gMzEpKTtcclxuICBsZXQgZGlhID0gTnVtYmVyKChoICsgbCAtIDcgKiBtICsgMTE0KSAlIDMxKSArIDE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkaWEsXHJcbiAgICBtZXMsXHJcbiAgICBhbm8sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGREYXlzLCBnZXREYXksIGdldE1vbnRoIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IG9idGVyRG9taW5nb0RlUGFzY29hIH0gZnJvbSBcIi4vY2FsZW5kYXJpb3NMdW5hcmVzL2dyZWdvcmlhbm9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlcmlhZG8ge1xyXG4gIGNvbnN0cnVjdG9yKGRpYSwgbWVzLCBkZXNjcmljYW8pIHtcclxuICAgIHRoaXMuZGlhID0gZGlhO1xyXG4gICAgdGhpcy5tZXMgPSBtZXM7XHJcbiAgICB0aGlzLmRlc2NyaWNhbyA9IGRlc2NyaWNhbztcclxuICB9XHJcblxyXG4gIG9idGVyRmVyaWFkb0NvbUludGVydmFsb0ZpeG8oZG9taW5nb0RlUGFzY29hLCBpbnRlcnZhbG8sIGRlc2NyaWNhbykge1xyXG4gICAgbGV0IGRpYUFkaWNpb25hZG8gPSBnZXREYXkoYWRkRGF5cyhkb21pbmdvRGVQYXNjb2EsIGludGVydmFsbykpO1xyXG4gICAgbGV0IG1lc0FkaWNpb25hZG8gPSBnZXRNb250aChhZGREYXlzKGRvbWluZ29EZVBhc2NvYSwgaW50ZXJ2YWxvKSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGZXJpYWRvKGRpYUFkaWNpb25hZG8sIG1lc0FkaWNpb25hZG8sIGRlc2NyaWNhbyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG9idGVyTGlzdGFEZUZlcmlhZG9zIH0gZnJvbSBcIi4vY2FsZW5kYXJpb3MvYnJhemlsL3RpcG9zRGVDYWxlbmRhcmlvcy9BTkJJTUFcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnkoKSB7XHJcbiAgY29uc3QgbGlzdGFEZUZlcmlhZG9zID0gb2J0ZXJMaXN0YURlRmVyaWFkb3MoMjAyMCk7XHJcbiAgcmV0dXJuIGxpc3RhRGVGZXJpYWRvcztcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgVmVyaWZpY2FyU2VEaWFVdGlsLCB2ZXJpZnkgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNvc1wiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc29sZS5sb2codmVyaWZ5KDIwMjApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5CZW0gdmluZG8sIEZlcm5hbmRpbmhvITwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9