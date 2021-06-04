module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/images.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/images.ts":
/*!*********************************!*\
  !*** ./src/pages/api/images.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst {\n  query\n} = faunadb__WEBPACK_IMPORTED_MODULE_0___default.a;\nconst client = new faunadb__WEBPACK_IMPORTED_MODULE_0___default.a.Client({\n  secret: process.env.FAUNA_API_KEY\n});\nasync function handler(req, res) {\n  console.log(10002, req.body);\n\n  if (req.method === 'POST') {\n    const {\n      url,\n      title,\n      description\n    } = req.body;\n    console.log(10001, url);\n    return client.query(query.Create(query.Collection('images'), {\n      data: {\n        title,\n        description,\n        url\n      }\n    })).then(() => {\n      return res.status(201).json({\n        success: true\n      });\n    }).catch(err => res.status(501).json({\n      error: `Sorry something Happened! ${err.message}`\n    }));\n  }\n\n  if (req.method === 'GET') {\n    const {\n      after\n    } = req.query;\n\n    const queryOptions = _objectSpread({\n      size: 6\n    }, after && {\n      after: query.Ref(query.Collection('images'), after)\n    });\n\n    return client.query(query.Map(query.Paginate(query.Documents(query.Collection('images')), queryOptions), query.Lambda('X', query.Get(query.Var('X'))))).then(response => {\n      const formattedData = response.data.map(item => _objectSpread(_objectSpread({}, item.data), {}, {\n        ts: item.ts,\n        id: item.ref.id\n      }));\n      return res.json({\n        data: formattedData,\n        after: response.after ? response.after[0].id : null\n      });\n    }).catch(err => {\n      return res.status(400).json(err);\n    });\n  }\n\n  return res.status(405).json({\n    error: `Method '${req.method}' Not Allowed`\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2ltYWdlcy50cz84YTE4Il0sIm5hbWVzIjpbInF1ZXJ5IiwiZmF1bmEiLCJjbGllbnQiLCJDbGllbnQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFfQVBJX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm1ldGhvZCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsInRoZW4iLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiYWZ0ZXIiLCJxdWVyeU9wdGlvbnMiLCJzaXplIiwiUmVmIiwiTWFwIiwiUGFnaW5hdGUiLCJEb2N1bWVudHMiLCJMYW1iZGEiLCJHZXQiLCJWYXIiLCJyZXNwb25zZSIsImZvcm1hdHRlZERhdGEiLCJtYXAiLCJpdGVtIiwidHMiLCJpZCIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQVlDLDhDQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCw4Q0FBSyxDQUFDRSxNQUFWLENBQWlCO0FBQUVDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQXRCLENBQWpCLENBQWY7QUFtQmUsZUFBZUMsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHRTtBQUNmQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQWtCSCxHQUFHLENBQUNJLElBQXRCOztBQUNBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU07QUFBRUMsU0FBRjtBQUFPQyxXQUFQO0FBQWNDO0FBQWQsUUFBOEJSLEdBQUcsQ0FBQ0ksSUFBeEM7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkcsR0FBbkI7QUFDQSxXQUFPYixNQUFNLENBQ1ZGLEtBREksQ0FFSEEsS0FBSyxDQUFDa0IsTUFBTixDQUFhbEIsS0FBSyxDQUFDbUIsVUFBTixDQUFpQixRQUFqQixDQUFiLEVBQXlDO0FBQ3ZDQyxVQUFJLEVBQUU7QUFDSkosYUFESTtBQUVKQyxtQkFGSTtBQUdKRjtBQUhJO0FBRGlDLEtBQXpDLENBRkcsRUFVSk0sSUFWSSxDQVVDLE1BQU07QUFDVixhQUFPWCxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0QsS0FaSSxFQWFKQyxLQWJJLENBYUVDLEdBQUcsSUFDUmhCLEdBQUcsQ0FDQVksTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQUVJLFdBQUssRUFBRyw2QkFBNEJELEdBQUcsQ0FBQ0UsT0FBUTtBQUFsRCxLQUZSLENBZEcsQ0FBUDtBQWtCRDs7QUFFRCxNQUFJbkIsR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsVUFBTTtBQUFFZTtBQUFGLFFBQVlwQixHQUFHLENBQUNULEtBQXRCOztBQUVBLFVBQU04QixZQUFZO0FBQ2hCQyxVQUFJLEVBQUU7QUFEVSxPQUVaRixLQUFLLElBQUk7QUFBRUEsV0FBSyxFQUFFN0IsS0FBSyxDQUFDZ0MsR0FBTixDQUFVaEMsS0FBSyxDQUFDbUIsVUFBTixDQUFpQixRQUFqQixDQUFWLEVBQXNDVSxLQUF0QztBQUFULEtBRkcsQ0FBbEI7O0FBS0EsV0FBTzNCLE1BQU0sQ0FDVkYsS0FESSxDQUVIQSxLQUFLLENBQUNpQyxHQUFOLENBQ0VqQyxLQUFLLENBQUNrQyxRQUFOLENBQ0VsQyxLQUFLLENBQUNtQyxTQUFOLENBQWdCbkMsS0FBSyxDQUFDbUIsVUFBTixDQUFpQixRQUFqQixDQUFoQixDQURGLEVBRUVXLFlBRkYsQ0FERixFQUtFOUIsS0FBSyxDQUFDb0MsTUFBTixDQUFhLEdBQWIsRUFBa0JwQyxLQUFLLENBQUNxQyxHQUFOLENBQVVyQyxLQUFLLENBQUNzQyxHQUFOLENBQVUsR0FBVixDQUFWLENBQWxCLENBTEYsQ0FGRyxFQVVKakIsSUFWSSxDQVVDa0IsUUFBUSxJQUFJO0FBQ2hCLFlBQU1DLGFBQWEsR0FBR0QsUUFBUSxDQUFDbkIsSUFBVCxDQUFjcUIsR0FBZCxDQUFrQkMsSUFBSSxvQ0FDdkNBLElBQUksQ0FBQ3RCLElBRGtDO0FBRTFDdUIsVUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBRmlDO0FBRzFDQyxVQUFFLEVBQUVGLElBQUksQ0FBQ0csR0FBTCxDQUFTRDtBQUg2QixRQUF0QixDQUF0QjtBQU1BLGFBQU9sQyxHQUFHLENBQUNhLElBQUosQ0FBUztBQUNkSCxZQUFJLEVBQUVvQixhQURRO0FBRWRYLGFBQUssRUFBRVUsUUFBUSxDQUFDVixLQUFULEdBQWlCVSxRQUFRLENBQUNWLEtBQVQsQ0FBZSxDQUFmLEVBQWtCZSxFQUFuQyxHQUF3QztBQUZqQyxPQUFULENBQVA7QUFJRCxLQXJCSSxFQXNCSm5CLEtBdEJJLENBc0JFQyxHQUFHLElBQUk7QUFDWixhQUFPaEIsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJHLEdBQXJCLENBQVA7QUFDRCxLQXhCSSxDQUFQO0FBeUJEOztBQUVELFNBQU9oQixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSSxTQUFLLEVBQUcsV0FBVWxCLEdBQUcsQ0FBQ0ssTUFBTztBQUEvQixHQUFyQixDQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2ltYWdlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBmYXVuYSBmcm9tICdmYXVuYWRiJztcblxuY29uc3QgeyBxdWVyeSB9ID0gZmF1bmE7XG5jb25zdCBjbGllbnQgPSBuZXcgZmF1bmEuQ2xpZW50KHsgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQV9BUElfS0VZIH0pO1xuXG5pbnRlcmZhY2UgSW1hZ2VzUXVlcnlSZXNwb25zZSB7XG4gIGFmdGVyPzoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH07XG4gIGRhdGE6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG4gICAgdHM6IG51bWJlcjtcbiAgICByZWY6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgfTtcbiAgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnNvbGUubG9nKDEwMDAyLHJlcS5ib2R5KVxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyB1cmwsIHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gcmVxLmJvZHk7XG4gICAgY29uc29sZS5sb2coMTAwMDEsIHVybClcbiAgICByZXR1cm4gY2xpZW50XG4gICAgICAucXVlcnkoXG4gICAgICAgIHF1ZXJ5LkNyZWF0ZShxdWVyeS5Db2xsZWN0aW9uKCdpbWFnZXMnKSwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+XG4gICAgICAgIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNTAxKVxuICAgICAgICAgIC5qc29uKHsgZXJyb3I6IGBTb3JyeSBzb21ldGhpbmcgSGFwcGVuZWQhICR7ZXJyLm1lc3NhZ2V9YCB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHsgYWZ0ZXIgfSA9IHJlcS5xdWVyeTtcblxuICAgIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IHtcbiAgICAgIHNpemU6IDYsXG4gICAgICAuLi4oYWZ0ZXIgJiYgeyBhZnRlcjogcXVlcnkuUmVmKHF1ZXJ5LkNvbGxlY3Rpb24oJ2ltYWdlcycpLCBhZnRlcikgfSksXG4gICAgfTtcblxuICAgIHJldHVybiBjbGllbnRcbiAgICAgIC5xdWVyeTxJbWFnZXNRdWVyeVJlc3BvbnNlPihcbiAgICAgICAgcXVlcnkuTWFwKFxuICAgICAgICAgIHF1ZXJ5LlBhZ2luYXRlKFxuICAgICAgICAgICAgcXVlcnkuRG9jdW1lbnRzKHF1ZXJ5LkNvbGxlY3Rpb24oJ2ltYWdlcycpKSxcbiAgICAgICAgICAgIHF1ZXJ5T3B0aW9uc1xuICAgICAgICAgICksXG4gICAgICAgICAgcXVlcnkuTGFtYmRhKCdYJywgcXVlcnkuR2V0KHF1ZXJ5LlZhcignWCcpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gcmVzcG9uc2UuZGF0YS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIC4uLml0ZW0uZGF0YSxcbiAgICAgICAgICB0czogaXRlbS50cyxcbiAgICAgICAgICBpZDogaXRlbS5yZWYuaWQsXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgIGRhdGE6IGZvcm1hdHRlZERhdGEsXG4gICAgICAgICAgYWZ0ZXI6IHJlc3BvbnNlLmFmdGVyID8gcmVzcG9uc2UuYWZ0ZXJbMF0uaWQgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBgTWV0aG9kICcke3JlcS5tZXRob2R9JyBOb3QgQWxsb3dlZGAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/images.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ })

/******/ });