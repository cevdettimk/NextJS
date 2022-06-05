"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/views";
exports.ids = ["pages/views"];
exports.modules = {

/***/ "./pages/views/index.js":
/*!******************************!*\
  !*** ./pages/views/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    return {\n        props: {\n            users: data\n        }\n    };\n};\nconst Users = ({ users: users1  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\extcevdett\\\\source\\\\repos\\\\ClientApps\\\\react-next-app\\\\pages\\\\views\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            users1.map((users)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"users.name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\extcevdett\\\\source\\\\repos\\\\ClientApps\\\\react-next-app\\\\pages\\\\views\\\\index.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\extcevdett\\\\source\\\\repos\\\\ClientApps\\\\react-next-app\\\\pages\\\\views\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined)\n                }, users.id, false, {\n                    fileName: \"C:\\\\Users\\\\extcevdett\\\\source\\\\repos\\\\ClientApps\\\\react-next-app\\\\pages\\\\views\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\extcevdett\\\\source\\\\repos\\\\ClientApps\\\\react-next-app\\\\pages\\\\views\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBTyxNQUFNQSxjQUFjLEdBQUcsVUFBVztJQUNyQyxNQUFPQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3RFLE1BQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUU3QixPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUFDQyxLQUFLLEVBQUdILElBQUk7U0FBQztLQUN4QjtDQUNKO0FBRUQsTUFBTUksS0FBSyxHQUFHLENBQUMsRUFBQ0QsS0FBSyxFQUFMQSxNQUFLLEdBQUMsR0FBSztJQUV2QixxQkFDSSw4REFBQ0UsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsU0FBTzs7Ozs7eUJBQUs7WUFDZkgsTUFBSyxDQUFDSSxHQUFHLENBQUNKLENBQUFBLEtBQUssaUJBQ1osOERBQUNFLEtBQUc7OEJBQ0EsNEVBQUNHLEdBQUM7d0JBQUNDLFNBQVMsRUFBQyxFQUFFO2tDQUNYLDRFQUFDQyxJQUFFO3NDQUFDLFlBQVU7Ozs7O3FDQUFLOzs7OztpQ0FDbkI7bUJBSEVQLEtBQUssQ0FBQ1EsRUFBRTs7Ozs2QkFLWjtZQUNULENBQUM7Ozs7OztpQkFHQSxDQUNQO0NBQ047QUFFRCxpRUFBZVAsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dC1hcHAvLi9wYWdlcy92aWV3cy9pbmRleC5qcz85ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+e1xyXG4gICAgY29uc3QgIHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wcyA6e3VzZXJzIDogZGF0YX1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5OZXh0IGpzPC9oMT5cclxuICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VycyA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXNlcnMuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+dXNlcnMubmFtZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJ1c2VycyIsIlVzZXJzIiwiZGl2IiwiaDEiLCJtYXAiLCJhIiwiY2xhc3NOYW1lIiwiaDMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/views/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/views/index.js"));
module.exports = __webpack_exports__;

})();