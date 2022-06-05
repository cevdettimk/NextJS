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
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    // map data to an array of path objects with params (id)\n    const paths = data.map((user)=>{\n        return {\n            params: {\n                id: user.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users/\" + id);\n    const data = await res.json();\n    return {\n        props: {\n            user: data\n        }\n    };\n};\nconst Details = ({ user  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\NextJS\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\NextJS\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.website\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\NextJS\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.address.city\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\NextJS\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\NextJS\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBTyxNQUFNQSxjQUFjLEdBQUcsVUFBWTtJQUN0QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3JFLE1BQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUU3Qix3REFBd0Q7SUFDeEQsTUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJO1FBQzdCLE9BQU87WUFDTEMsTUFBTSxFQUFFO2dCQUFFQyxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFBRTtTQUNuQztLQUNGLENBQUM7SUFFRixPQUFPO1FBQ0xMLEtBQUs7UUFDTE0sUUFBUSxFQUFFLEtBQUs7S0FDaEI7Q0FDRjtBQUVNLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxPQUFPLEdBQUs7SUFDL0MsTUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUM1QixNQUFNUixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUE2QyxHQUFHTyxFQUFFLENBQUM7SUFDM0UsTUFBTU4sSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBRTdCLE9BQU87UUFDTFUsS0FBSyxFQUFFO1lBQUVQLElBQUksRUFBRUosSUFBSTtTQUFFO0tBQ3RCO0NBQ0Y7QUFFRCxNQUFNWSxPQUFPLEdBQUcsQ0FBQyxFQUFFUixJQUFJLEdBQUUsR0FBSztJQUM1QixxQkFDRSw4REFBQ1MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUdWLElBQUksQ0FBQ1csSUFBSTs7Ozs7eUJBQU87MEJBQ3RCLDhEQUFDQyxHQUFDOzBCQUFHWixJQUFJLENBQUNhLEtBQUs7Ozs7O3lCQUFNOzBCQUNyQiw4REFBQ0QsR0FBQzswQkFBR1osSUFBSSxDQUFDYyxPQUFPOzs7Ozt5QkFBTTswQkFDdkIsOERBQUNGLEdBQUM7MEJBQUdaLElBQUksQ0FBQ2UsT0FBTyxDQUFDQyxJQUFJOzs7Ozt5QkFBTTs7Ozs7O2lCQUN4QixDQUNOO0NBQ0g7QUFFRCxpRUFBZVIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dC1hcHAvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgXHJcbiAgICAvLyBtYXAgZGF0YSB0byBhbiBhcnJheSBvZiBwYXRoIG9iamVjdHMgd2l0aCBwYXJhbXMgKGlkKVxyXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCh1c2VyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHsgaWQ6IHVzZXIuaWQudG9TdHJpbmcoKSB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXRocyxcclxuICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8nICsgaWQpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyB1c2VyOiBkYXRhIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgRGV0YWlscyA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+eyB1c2VyLm5hbWUgfTwvaDE+XHJcbiAgICAgICAgPHA+eyB1c2VyLmVtYWlsIH08L3A+XHJcbiAgICAgICAgPHA+eyB1c2VyLndlYnNpdGUgfTwvcD5cclxuICAgICAgICA8cD57IHVzZXIuYWRkcmVzcy5jaXR5IH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwibmFtZXMiOlsiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGF0aHMiLCJtYXAiLCJ1c2VyIiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJEZXRhaWxzIiwiZGl2IiwiaDEiLCJuYW1lIiwicCIsImVtYWlsIiwid2Vic2l0ZSIsImFkZHJlc3MiLCJjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();