/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(60);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(61);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default({
	  el: '#container',
	  render: function render(h) {
	    return h(
	      _index2.default,
	      {
	        attrs: { bannerData: window.GLOBAL.bannerData, listData: window.GLOBAL.listData }
	      },
	      []
	    );
	  }
	});

/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = window.Vue;

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(62);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(63);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['bannerData', 'listData'],
	  render: function render(h) {

	    return h(
	      'div',
	      null,
	      [h(
	        _index4.default,
	        {
	          attrs: { data: this.bannerData }
	        },
	        []
	      ), h(
	        _index2.default,
	        {
	          attrs: { data: this.listData }
	        },
	        []
	      )]
	    );
	  }
	};

/***/ },

/***/ 62:
/***/ function(module, exports) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  props: ['data'],

	  render: function render(h) {
	    return h(
	      'div',
	      null,
	      [h(
	        'h2',
	        null,
	        ['VueList']
	      ), this.data.map(function (item, idx) {
	        return h(
	          'div',
	          { key: idx, style: {
	              float: 'left',
	              width: '200px',
	              marginRight: '10px',
	              marginBottom: '10px'
	            } },
	          [h(
	            'img',
	            {
	              attrs: { src: item.img },
	              style: {
	                width: '100%'
	              } },
	            []
	          ), h(
	            'p',
	            null,
	            [item.title]
	          ), h(
	            'div',
	            null,
	            []
	          )]
	        );
	      })]
	    );
	  }
	};

/***/ },

/***/ 63:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  props: ['data'],

	  render: function render(h) {
	    var _this = this;

	    var itemStyle = {
	      display: 'inline-block',
	      width: '200px',
	      marginLeft: '200px'
	    };

	    var imgStyle = {
	      width: '100%'
	    };

	    return h(
	      'div',
	      null,
	      [h(
	        'h2',
	        null,
	        ['Vue Banner: ']
	      ), this.data.map(function (item, idx) {
	        return h(
	          'div',
	          { style: itemStyle, on: {
	              'click': _this.onBannerClick.bind(_this, item)
	            }
	          },
	          [h(
	            'img',
	            {
	              attrs: { src: item.img },
	              style: imgStyle },
	            []
	          )]
	        );
	      })]
	    );
	  },


	  methods: {
	    onBannerClick: function onBannerClick(item) {
	      alert('click banner:' + item.title);
	    }
	  }

	};

/***/ }

/******/ });