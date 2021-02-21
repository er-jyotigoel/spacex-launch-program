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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_landing_page_LandingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/landing-page/LandingPage */ \"./src/landing-page/LandingPage.js\");\n\n\n\n\n\n\nconst PORT = 8080;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get(\"/\", (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_landing_page_LandingPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/*! exports provided: LAUNCH_YEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAUNCH_YEAR\", function() { return LAUNCH_YEAR; });\nconst LAUNCH_YEAR = [{\n  id: 1,\n  value: 2006\n}, {\n  id: 2,\n  value: 2007\n}, {\n  id: 3,\n  value: 2008\n}, {\n  id: 4,\n  value: 2009\n}, {\n  id: 5,\n  value: 2010\n}, {\n  id: 6,\n  value: 2011\n}, {\n  id: 7,\n  value: 2012\n}, {\n  id: 8,\n  value: 2013\n}, {\n  id: 9,\n  value: 2014\n}, {\n  id: 10,\n  value: 2015\n}, {\n  id: 11,\n  value: 2016\n}, {\n  id: 12,\n  value: 2017\n}, {\n  id: 13,\n  value: 2018\n}, {\n  id: 14,\n  value: 2019\n}, {\n  id: 15,\n  value: 2020\n}];\n\n//# sourceURL=webpack:///./src/constants/constants.js?");

/***/ }),

/***/ "./src/landing-page/LandingPage.css":
/*!******************************************!*\
  !*** ./src/landing-page/LandingPage.css ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/landing-page/LandingPage.css?");

/***/ }),

/***/ "./src/landing-page/LandingPage.js":
/*!*****************************************!*\
  !*** ./src/landing-page/LandingPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _records_filter_RecordsFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../records-filter/RecordsFilter */ \"./src/records-filter/RecordsFilter.js\");\n/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingPage.css */ \"./src/landing-page/LandingPage.css\");\n\n\n\nclass LandingPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      spacexPrograms: []\n    };\n  }\n\n  componentDidMount() {\n    fetch(\"https://api.spacexdata.com/v3/launches?limit=100\", {\n      method: \"GET\",\n      headers: {\n        \"content-type\": \"application/json\"\n      }\n    }).then(response => response.json()).then(response => {\n      this.setState({\n        spacexPrograms: response\n      });\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  render() {\n    return this.state.spacexPrograms.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"landing-page-heading\"\n    }, \"SpaceX Launch Programs\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n      className: \"content-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_records_filter_RecordsFilter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      spacexPrograms: this.state.spacexPrograms\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n      className: \"landing-page-footer\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Developed by:\"), \" Jyoti Goel\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, \"Loading ...\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/landing-page/LandingPage.js?");

/***/ }),

/***/ "./src/program-records-list/ProgramRecordsList.css":
/*!*********************************************************!*\
  !*** ./src/program-records-list/ProgramRecordsList.css ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/program-records-list/ProgramRecordsList.css?");

/***/ }),

/***/ "./src/program-records-list/ProgramRecordsList.js":
/*!********************************************************!*\
  !*** ./src/program-records-list/ProgramRecordsList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProgramRecordsList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProgramRecordsList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgramRecordsList.css */ \"./src/program-records-list/ProgramRecordsList.css\");\n\n\nclass ProgramRecordsList extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const {\n      spacexProgramsList\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"program-record-container\"\n    }, spacexProgramsList.map(program => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"program-record-container-card\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"image-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: program.links.mission_patch,\n        className: \"image-style\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"left-align-content text-cloro-blue\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, `${program.mission_name} # ${program.flight_number}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"left-align-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, `Mission Ids:`), program.mission_id.map(id => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: id,\n          className: \"text-cloro-blue\"\n        }, id);\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"left-align-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, `Launch Year:`), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"text-cloro-blue\"\n      }, ` ${program.launch_year}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"left-align-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, `Successful Launch:`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"text-cloro-blue\"\n      }, ` ${program.launch_success ? \"True\" : \"False\"}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"left-align-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, `Successful Landing:`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"text-cloro-blue\"\n      }, ` ${program.rocket.first_stage.cores[0].land_success ? \"True\" : \"False\"}`)));\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      \"area-hidden\": \"true\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      \"area-hidden\": \"true\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      \"area-hidden\": \"true\"\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/program-records-list/ProgramRecordsList.js?");

/***/ }),

/***/ "./src/records-filter/RecordsFilter.css":
/*!**********************************************!*\
  !*** ./src/records-filter/RecordsFilter.css ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/records-filter/RecordsFilter.css?");

/***/ }),

/***/ "./src/records-filter/RecordsFilter.js":
/*!*********************************************!*\
  !*** ./src/records-filter/RecordsFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecordsFilter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RecordsFilter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecordsFilter.css */ \"./src/records-filter/RecordsFilter.css\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var _program_records_list_ProgramRecordsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../program-records-list/ProgramRecordsList */ \"./src/program-records-list/ProgramRecordsList.js\");\n\n\n\n\nclass RecordsFilter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      spacexPrograms: this.props.spacexPrograms,\n      selectedYear: \"\",\n      launchSuccess: null,\n      landSuccess: null,\n      loading: false\n    };\n    this.toggleLaunchYear = this.toggleLaunchYear.bind(this);\n  }\n\n  toggleLaunchYear(year) {\n    this.setState({\n      selectedYear: this.state.selectedYear === year.value ? \"\" : year.value\n    }, () => {\n      this.filterRecord();\n    });\n  }\n\n  toggleLaunchSuccess(launch) {\n    this.setState(prevState => ({\n      launchSuccess: prevState.launchSuccess !== launch ? launch : null\n    }), () => {\n      this.filterRecord();\n    });\n  }\n\n  toggleLandSuccess(land) {\n    this.setState(prevState => ({\n      landSuccess: prevState.landSuccess !== land ? land : null\n    }), () => {\n      this.filterRecord();\n    });\n  }\n\n  filterRecord() {\n    const launchYearQuery = this.state.selectedYear !== \"\" ? `&launch_year=${this.state.selectedYear}` : \"\";\n    const launchSuccessQuery = this.state.launchSuccess !== null ? `&launch_success=${this.state.launchSuccess}` : \"\";\n    const landSuccessQuery = this.state.landSuccess !== null ? `&land_success=${this.state.landSuccess}` : \"\";\n    this.setState({\n      loading: true\n    });\n    fetch(`https://api.spacexdata.com/v3/launches?limit=100${launchYearQuery}${launchSuccessQuery}${landSuccessQuery}`, {\n      method: \"GET\",\n      headers: {\n        \"content-type\": \"application/json\"\n      }\n    }).then(response => response.json()).then(response => {\n      this.setState({\n        loading: false,\n        spacexPrograms: response\n      });\n    }).catch(err => {\n      this.setState({\n        loading: false\n      });\n      console.log(err);\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-container-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"filter-container-heading\"\n    }, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"filter-label\"\n    }, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-options-container\"\n    }, _constants_constants__WEBPACK_IMPORTED_MODULE_2__[\"LAUNCH_YEAR\"].map(year => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        key: year.id,\n        className: this.state.selectedYear === year.value ? \"filter-options-container-button filter-options-container-item-select\" : \"filter-options-container-button filter-options-container-item-deselect\",\n        onClick: () => this.toggleLaunchYear(year)\n      }, year.value);\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n      \"area-hidden\": \"true\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"filter-label\"\n    }, \"Successful Launch\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-options-container\"\n    }, [true, false].map(launch => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        key: launch,\n        className: this.state.launchSuccess === launch ? \"filter-options-container-button filter-options-container-item-select\" : \"filter-options-container-button filter-options-container-item-deselect\",\n        onClick: () => this.toggleLaunchSuccess(launch)\n      }, launch ? \"True\" : \"False\");\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"filter-label\"\n    }, \"Successful Landing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter-options-container\"\n    }, [true, false].map(landing => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        key: landing,\n        className: this.state.landSuccess === landing ? \"filter-options-container-button filter-options-container-item-select\" : \"filter-options-container-button filter-options-container-item-deselect\",\n        onClick: () => this.toggleLandSuccess(landing)\n      }, landing ? \"True\" : \"False\");\n    })))), this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading ...\") : this.state.spacexPrograms.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_program_records_list_ProgramRecordsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      spacexProgramsList: this.state.spacexPrograms\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"No Records Found\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/records-filter/RecordsFilter.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });