/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from /Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/asoom_n/Documents/Programming/RPT14/book-information-service/client/src/index.jsx: Unexpected token (8:12)\\n\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m    \\u001b[36msuper\\u001b[39m(props)\\u001b[0m\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39msetState \\u001b[33m=\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 | \\u001b[39m      state \\u001b[33m=\\u001b[39m \\u001b[32m''\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m}\\u001b[0m\\n    at Parser.raise (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:6344:17)\\n    at Parser.unexpected (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:7659:16)\\n    at Parser.parseMaybeAssign (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:8242:12)\\n    at Parser.parseMaybeAssign (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:8239:25)\\n    at Parser.parseExpression (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:8148:23)\\n    at Parser.parseStatementContent (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9917:23)\\n    at Parser.parseStatement (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Parser.parseBlockBody (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Parser.parseBlock (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10335:10)\\n    at Parser.parseFunctionBody (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9408:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9378:10)\\n    at Parser.parseMethod (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9332:10)\\n    at Parser.pushClassMethod (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10767:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10692:12)\\n    at Parser.parseClassMember (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10631:10)\\n    at withTopicForbiddingContext (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10586:14)\\n    at Parser.withTopicForbiddingContext (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9683:14)\\n    at Parser.parseClassBody (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10563:10)\\n    at Parser.parseClass (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10537:22)\\n    at Parser.parseStatementContent (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9830:21)\\n    at Parser.parseStatement (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Parser.parseBlockBody (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Parser.parseTopLevel (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:9717:10)\\n    at Parser.parse (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:11233:17)\\n    at parse (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/parser/lib/index.js:11269:38)\\n    at parser (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/asoom_n/Documents/Programming/RPT14/book-information-service/node_modules/@babel/core/lib/transformation/index.js:44:43)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qc3guanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.jsx\n");

/***/ })

/******/ });