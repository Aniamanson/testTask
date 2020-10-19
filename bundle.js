/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map */ "./src/js/map.js");
/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_map__WEBPACK_IMPORTED_MODULE_0__);

 // form validation

document.addEventListener("DOMContentLoaded", function (e) {
  var form = document.querySelector('form');
  var name = document.getElementById('formName');
  var phone = document.getElementById('formPhone');
  var error = document.getElementsByClassName('error');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = {
      'phone': {
        'msg': 'Неверный формат номера',
        'pattern': /^([+]?[0-9\s-\(\)]{5,25})*$/
      },
      'name': {
        'msg': 'Введите Ваше реальное имя',
        'pattern': /[\t-\r \xA0\u0401\u0410-\u044F\u0451\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]{2,20}/g
      },
      'required': {
        'msg': 'Поле не может быть пустым',
        'pattern': /[0-9A-Z_a-z\u0401\u0410-\u044F\u0451]|\b/g
      }
    };
    var arr = [name, phone];
    var rules = ['name', 'phone'];

    for (var i = 0; i < arr.length; i++) {
      var x = arr[i].value;

      if (x === '') {
        console.log(x);
        error[i].style.display = 'block';
        error[i].innerHTML = err.required.msg;
      } else {
        console.log(x);
        var z = err[rules[i]];
        console.log(z);

        if (!z.pattern.test(x)) {
          error[i].style.display = 'block';
          error[i].innerHTML = z.msg;
        } else {
          error[i].style.display = 'none';
        }
      }
    }

    name.focus();
  });
});

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

ymaps.ready(init);

function init() {
  var map = new ymaps.Map("yMap", {
    // Центр карты
    center: [48.87, 58.23],
    // Коэффициент масштабирования
    zoom: 4,
    // Тип карты
    type: "yandex#map",
    controls: []
  });

  var setCenter = function setCenter(x, y) {
    map.setCenter(x, y);
  };

  window.addEventListener('resize', function () {
    if (document.body.clientWidth < 650) {
      setCenter([48.87, 40.23], 5);
    } else {
      setCenter([48.87, 58.23], 4);
    }
  });
  map.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
  var style = {
    hideIconOnBalloonOpen: false,
    iconLayout: 'default#image',
    iconImageHref: 'img/pin.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-5, -38]
  };
  var placemark = [];
  var cities = [[55.753215, 37.622504], [48.707067, 44.516948], [51.533557, 46.034257], [45.035470, 38.975313], [51.660781, 39.200269], [40.177628, 44.512546], [55.030199, 82.920430]];
  cities.forEach(function (item) {
    placemark.push(new ymaps.Placemark(item, null, style));
  });
  placemark.forEach(function (item) {
    map.geoObjects.add(item);
  });
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map