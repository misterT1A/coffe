/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 934:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-1.jpg";

/***/ }),

/***/ 696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-2.jpg";

/***/ }),

/***/ 310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-3.jpg";

/***/ }),

/***/ 764:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/about-4.jpg";

/***/ }),

/***/ 958:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-cup.svg";

/***/ }),

/***/ 796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-1.png";

/***/ }),

/***/ 55:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-2.png";

/***/ }),

/***/ 203:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/coffee-slider-3.png";

/***/ }),

/***/ 677:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/favicon-32x32.png";

/***/ }),

/***/ 483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.svg";

/***/ }),

/***/ 84:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mobile-screens.png";

/***/ }),

/***/ 106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/video (360p).mp4";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(677), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Coffe shop</title> <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin> <link href=\"https://fonts.cdnfonts.com/css/inter\" rel=\"stylesheet\"> <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> </head> <body> </body> </html>";
// Exports
/* harmony default export */ var src = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/modules/utils/HtmlToElement.js
function toElement(HTMLString) {
  const template = document.createElement('template');
  template.innerHTML = HTMLString;
  return template.content.firstChild;
}
;// CONCATENATED MODULE: ./src/modules/header/header.html
// Imports

var header_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(483), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(958), __webpack_require__.b);
// Module
var header_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(header_HTML_LOADER_IMPORT_0_);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var header_code = "<header class=\"header\"> <div class=\"container\"> <div class=\"header_wrapper\"> <a class=\"header_main_page\" href=\"./index.html\"> <img class=\"header_logo\" src=\"" + header_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"logo\"> </a> <div class=\"nav_wrapper\"> <nav class=\"nav\"> <ul class=\"nav_list\"> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"./index.html#favoritesCoffe\">Favorite coffee</a></li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"./index.html#about\">About</a> </li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"./index.html#mobile\">Mobile app</a> </li> <li class=\"nav_item\"><a class=\"nav_item_link hover_border\" href=\"#footer\">Contact us</a> </li> </ul> </nav> <div class=\"header_btn_wrapper\"> <a class=\"header_btn hover_border\" href=\"./menu.html\"> Menu <img class=\"header_btn_logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee-cup\"> </a> </div> </div> <div class=\"burger_btn\"> <span class=\"burger_btn_icon\"></span> </div> </div> </div> </header>";
// Exports
/* harmony default export */ var header = (header_code);
;// CONCATENATED MODULE: ./src/modules/header/header.js



const header_header = toElement(header);
/* harmony default export */ var modules_header_header = ({
  header: header_header
});
const mainPageBtn = document.querySelector('.header_main_page');
const menuBtn = document.querySelector('.header_btn');

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.add('active');
// });
;// CONCATENATED MODULE: ./src/modules/main/enjoy/enjoy.html
// Imports

var enjoy_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(106), __webpack_require__.b);
var enjoy_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(958), __webpack_require__.b);
// Module
var enjoy_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(enjoy_HTML_LOADER_IMPORT_0_);
var enjoy_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(enjoy_HTML_LOADER_IMPORT_1_);
var enjoy_code = "<section id=\"enjoy\" class=\"enjoy\"> <div class=\"container\"> <div class=\"enjoy_wrapper\"> <div class=\"enjoy_inner\"> <video id=\"video\" class=\"enjoy_video\" autoplay muted loop> <source src=\"" + enjoy_HTML_LOADER_REPLACEMENT_0_ + "\" type=\"video/mp4\"> </video> <h1 class=\"enjoy_title\"><span class=\"enjoy_word\">Enjoy</span> premium coffee at our charming cafe</h1> <span class=\"enjoy_description\">With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.</span> <a href=\"./menu.html\" class=\"enjoy_btn\"> <span class=\"enjoy_btn_text\">Menu</span> <img class=\"enjoy_btn_logo\" src=\"" + enjoy_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"coffee-cup\"> </a> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var enjoy = (enjoy_code);
;// CONCATENATED MODULE: ./src/modules/main/enjoy/enjoy.js



const enjoy_enjoy = toElement(enjoy);
class Observer {
  constructor(element, options) {
    this.observer = new IntersectionObserver(this.callback, options);
    this.observer.observe(document.querySelector(element));
  }
  callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  };
}
/* harmony default export */ var main_enjoy_enjoy = ({
  enjoy: enjoy_enjoy
});
;// CONCATENATED MODULE: ./src/modules/main/Favourites_Coffee/favorites.html
// Imports

var favorites_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(203), __webpack_require__.b);
var favorites_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(796), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(55), __webpack_require__.b);
// Module
var favorites_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(favorites_HTML_LOADER_IMPORT_0_);
var favorites_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(favorites_HTML_LOADER_IMPORT_1_);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var favorites_code = "<section id=\"favoritesCoffe\" class=\"favorites\"> <div class=\"container\"> <div class=\"favorites_wrapper\"> <h2 class=\"favorites_title\">Choose your <span class=\"favorites_word\">favorite</span> coffee</h2> <div class=\"favorites_slider_inner\"> <div class=\"favorites_slider_wrapper\"> <div class=\"fav_clider_arrow\"> <svg class=\"arrowBtn\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"transparent\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\"/> <path class=\"svg_arrow\" d=\"M36.5 30H24M24 30L30 24M24 30L30 36\" stroke=\"#403F3D\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> </div> <div class=\"fav_slider\"> <div class=\"fav_slider_wrapper\"> <div class=\"fav_slider_content slide3\"> <div class=\"fav_slider_content_inner\"> <img src=\"" + favorites_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"coffe1\" class=\"fav_slider_img\"> <div class=\"fav_slider_cont_description\"> <h4 class=\"fav_slider_description_title\">Ice coffee</h4> <span class=\"fav_slider_description_text\">A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.</span> <span class=\"fav_slider_description_price\">$4.50</span> </div> </div> </div> <div class=\"fav_slider_content slide1\"> <div class=\"fav_slider_content_inner\"> <img src=\"" + favorites_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"coffe1\" class=\"fav_slider_img\"> <div class=\"fav_slider_cont_description\"> <h4 class=\"fav_slider_description_title\">S’mores Frappuccino</h4> <span class=\"fav_slider_description_text\">This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.</span> <span class=\"fav_slider_description_price\">$5.50</span> </div> </div> </div> <div class=\"fav_slider_content slide2\"> <div class=\"fav_slider_content_inner\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"coffe1\" class=\"fav_slider_img\"> <div class=\"fav_slider_cont_description\"> <h4 class=\"fav_slider_description_title\">Caramel Macchiato</h4> <span class=\"fav_slider_description_text\">Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.</span> <span class=\"fav_slider_description_price\">$5.00</span> </div> </div> </div> </div> </div> <div class=\"fav_clider_arrow\"> <svg class=\"arrowBtn\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"transparent\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#665F55\"/> <path class=\"svg_arrow\" d=\"M24 30H36.5M36.5 30L30.5 24M36.5 30L30.5 36\" stroke=\"#403F3D\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> </div> </div> <div class=\"favorites_slider_pagination_wrapper\"> <div class=\"fav_pag_inner\"> <div class=\"fav_pag_element\"> <div class=\"fav_pag_time\"></div> </div> <div class=\"fav_pag_element\"> <div class=\"fav_pag_time\"></div> </div> <div class=\"fav_pag_element\"> <div class=\"fav_pag_time\"></div> </div> </div> </div> </div> </div> </div></section>";
// Exports
/* harmony default export */ var favorites = (favorites_code);
;// CONCATENATED MODULE: ./src/modules/main/Favourites_Coffee/favorites.js



const favoritesCoffe = toElement(favorites);
/* harmony default export */ var Favourites_Coffee_favorites = ({
  favoritesCoffe
});
;// CONCATENATED MODULE: ./src/modules/main/About/about.html
// Imports

var about_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(934), __webpack_require__.b);
var about_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(696), __webpack_require__.b);
var about_HTML_LOADER_IMPORT_2_ = new URL(/* asset import */ __webpack_require__(310), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(764), __webpack_require__.b);
// Module
var about_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(about_HTML_LOADER_IMPORT_0_);
var about_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(about_HTML_LOADER_IMPORT_1_);
var about_HTML_LOADER_REPLACEMENT_2_ = getUrl_default()(about_HTML_LOADER_IMPORT_2_);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var about_code = "<section id=\"about\" class=\"about\"> <div class=\"container\"> <div class=\"about_wrapper\"> <h2 class=\"abou_title\">Resource is <span class=\"about_word\">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h2> <div class=\"about_imgs\"> <div class=\"about_left\"> <div class=\"about_elem\"> <img class=\"about_img\" src=\"" + about_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"about-1\"> </div> <div class=\"about_elem about_elem_min\"> <img class=\"about_img\" src=\"" + about_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"about-2\"> </div> </div> <div class=\"about_right\"> <div class=\"about_elem about_elem_min\"> <img class=\"about_img\" src=\"" + about_HTML_LOADER_REPLACEMENT_2_ + "\" alt=\"about-3\"> </div> <div class=\"about_elem\"> <img class=\"about_img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"about-4\"> </div> </div> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var about = (about_code);
;// CONCATENATED MODULE: ./src/modules/main/About/about.js



const about_about = toElement(about);
/* harmony default export */ var About_about = ({
  about: about_about
});
;// CONCATENATED MODULE: ./src/modules/main/Mobile App/mobile.html
// Imports

var mobile_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(84), __webpack_require__.b);
// Module
var mobile_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(mobile_HTML_LOADER_IMPORT_0_);
var mobile_code = "<section id=\"mobile\" class=\"mobile\"> <div class=\"container\"> <div class=\"mobile_wrapper\"> <div class=\"mobile_left_part\"> <div class=\"mobile_content\"> <h2 class=\"mobile_title\"><span class=\"mobile_word\">Download</span> our apps to start ordering</h2> <span class=\"mobile_desription\">Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are</span> <div class=\"mobile_buttons\"> <a href=\"javascript:void(0)\" class=\"mobile_btn\"> <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"icon\"> <g id=\"Icon\"> <g id=\"Vector\" class=\"svg_path\"> <path d=\"M26.7063 18.6307C26.6694 14.6324 30.0641 12.6872 30.2193 12.5966C28.2967 9.86366 25.3169 9.49026 24.2697 9.46048C21.767 9.20369 19.3393 10.9206 18.0644 10.9206C16.764 10.9206 14.8008 9.48529 12.6848 9.52747C9.96196 9.56841 7.41468 11.1055 6.01762 13.4923C3.13444 18.359 5.28474 25.5108 8.04705 29.4446C9.42884 31.3712 11.0435 33.5223 13.1569 33.4466C15.2245 33.3635 15.9968 32.1614 18.4919 32.1614C20.9641 32.1614 21.6893 33.4466 23.8447 33.3983C26.0637 33.3635 27.4608 31.463 28.7942 29.519C30.3911 27.3108 31.0323 25.1362 31.0578 25.0245C31.0056 25.0071 26.7483 23.4229 26.7063 18.6307Z\" fill=\"#403F3D\"/> <path d=\"M22.6347 6.87268C23.7468 5.51675 24.5076 3.67205 24.2964 1.80005C22.6869 1.86952 20.674 2.88554 19.5149 4.21169C18.4893 5.38029 17.5732 7.29571 17.8099 9.097C19.6179 9.2285 21.4743 8.20752 22.6347 6.87268Z\" fill=\"#403F3D\"/> </g> </g> </g> </svg> <div class=\"mobile_btn_content\"> <span class=\"mobile_btn_title\">Available on the</span> <span class=\"mobile_btn_text\">App Store</span> </div> </a> <a href=\"javascript:void(0)\" class=\"mobile_btn\"> <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"icon\"> <g id=\"Icon\" class=\"svg_path\"> <path id=\"Vector\" d=\"M3.7558 3.20309C3.39335 3.57302 3.18359 4.14896 3.18359 4.89483V31.4995C3.18359 32.2454 3.39335 32.8213 3.7558 33.1913L3.84525 33.2725L19.1359 18.3701V18.0182L3.84525 3.11587L3.7558 3.20309Z\" fill=\"#403F3D\"/> <path id=\"Vector_2\" d=\"M26.0776 23.34L20.9863 18.3701V18.0182L26.0837 13.0482L26.1979 13.1129L32.2345 16.4618C33.9573 17.4122 33.9573 18.9761 32.2345 19.9325L26.1979 23.2754L26.0776 23.34Z\" fill=\"#403F3D\"/> <path id=\"Vector_3\" d=\"M25.2733 24.2008L20.0617 19.1196L4.68164 34.1167C5.25384 34.7031 6.18695 34.7738 7.24807 34.1873L25.2733 24.2008Z\" fill=\"#403F3D\"/> <path id=\"Vector_4\" d=\"M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z\" fill=\"#403F3D\"/> </g> </g> </svg> <div class=\"mobile_btn_content\"> <span class=\"mobile_btn_title\">Available on</span> <span class=\"mobile_btn_text\">Google Play</span> </div> </a> </div> </div> </div> <div class=\"mobile_right_part\"> <img class=\"mobile_img\" src=\"" + mobile_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"mobiles\"> </div> </div> </div> </section>";
// Exports
/* harmony default export */ var mobile = (mobile_code);
;// CONCATENATED MODULE: ./src/modules/main/Mobile App/mobile.js



const mobile_mobile = toElement(mobile);
/* harmony default export */ var Mobile_App_mobile = ({
  mobile: mobile_mobile
});
;// CONCATENATED MODULE: ./src/modules/main/main.js




const main = document.createElement('main');
main.append(main_enjoy_enjoy.enjoy, Favourites_Coffee_favorites.favoritesCoffe, About_about.about, Mobile_App_mobile.mobile);
/* harmony default export */ var main_main = (main);
;// CONCATENATED MODULE: ./src/modules/footer/footer.html
// Module
var footer_code = "<footer id=\"footer\" class=\"footer\"> <div class=\"container\"> <div class=\"footer_wrapper\"> <div class=\"footer_left\"> <h2 class=\"footer_title\">Sip, Savor, Smile. <span class=\"footer_word\">It’s coffee time!</span></h2> <div class=\"footer_social\"> <svg class=\"footer_svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/> <path d=\"M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> <svg class=\"footer_svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/> <path d=\"M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z\" stroke=\"#E1D4C9\"/> <path d=\"M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M35.5 24.51L35.51 24.4989\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> <svg class=\"footer_svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\"/> <path d=\"M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </svg> </div> </div> <div class=\"footer_right\"> <h3 class=\"footer_contacts\">Contact us</h3> <ul class=\"footer_contact_list\"> <li class=\"footer_contact_item\"><a class=\"footer_link footer_border\" href=\"https://maps.app.goo.gl/wnpKrwLwXwXnsNwj8\" target=\"_blank\"> <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"pin-alt\"> <path id=\"Ellipse\" d=\"M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z\" stroke=\"#E1D4C9\" stroke-width=\"1.5\"/> <path id=\"Vector\" d=\"M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z\" fill=\"#E1D4C9\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> </svg> <span class=\"footer_link_text\">8558 Green Rd., LA</span> </a></li> <li class=\"footer_contact_item\"><a class=\"footer_link footer_border\" href=\"tel:+1 (603) 555-0123\"> <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"phone\"> <path id=\"Path\" d=\"M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> </svg> <span class=\"footer_link_text\">+1 (603) 555-0123</span> </a></li> <li class=\"footer_contact_item\"><span class=\"footer_link_date\"> <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g id=\"clock\" clip-path=\"url(#clip0_217_1736)\"> <path id=\"Vector\" d=\"M10 5L10 10L15 10\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path id=\"Vector_2\" d=\"M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> <defs> <clipPath id=\"clip0_217_1736\"> <rect width=\"20\" height=\"20\" fill=\"white\"/> </clipPath> </defs> </svg> <span class=\"footer_link_text\">Mon-Sat: 9:00 AM – 23:00 PM</span> </span></li> </ul> </div> </div> </div> </footer>";
// Exports
/* harmony default export */ var footer = (footer_code);
;// CONCATENATED MODULE: ./src/modules/footer/footer.js



const footer_footer = toElement(footer);
/* harmony default export */ var modules_footer_footer = ({
  footer: footer_footer
});
;// CONCATENATED MODULE: ./src/modules/header/burger.js
class BurgerMenu {
  constructor(body) {
    this.body = body;
    this.wrapper = document.querySelector('.nav_wrapper');
    this.burgerBtn = document.querySelector('.burger_btn');
    this.navLinks = document.querySelectorAll('.nav_item_link');
    this.menuLink = document.querySelector('.header_btn');
    this.addListers();
  }
  addListers() {
    this.burgerBtn.addEventListener('click', this.navTogleOnBtn.bind(this));
    this.wrapper.addEventListener('click', this.checkNavActive.bind(this));
    this.navLinks.forEach(link => link.addEventListener('click', this.checkNavActive.bind(this)));
    this.menuLink.addEventListener('click', this.checkNavActive.bind(this));
  }
  navTogleOnBtn() {
    if (!this.wrapper.classList.contains('nav_active')) {
      this.burgerBtn.classList.add('burger_btn_active');
      this.wrapper.setAttribute('style', 'display: flex;');
      setTimeout(() => {
        this.body.setAttribute('style', 'overflow: hidden');
        this.wrapper.classList.add('nav_active');
      }, 100);
    } else {
      this.burgerBtn.classList.remove('burger_btn_active');
      this.wrapper.classList.remove('nav_active');
      setTimeout(() => {
        this.wrapper.removeAttribute('style', 'display: flex;');
        this.body.removeAttribute('style', 'overflow: hidden');
      }, 300);
    }
  }
  checkNavActive() {
    if (this.wrapper.classList.contains('nav_active')) {
      this.burgerBtn.classList.remove('burger_btn_active');
      this.wrapper.classList.remove('nav_active');
      setTimeout(() => {
        this.wrapper.removeAttribute('style', 'display: flex;');
        this.body.removeAttribute('style', 'overflow: hidden');
      }, 300);
    }
  }
}
;// CONCATENATED MODULE: ./src/modules/main/Favourites_Coffee/slider.js
class Slider {
  constructor(sladerBlock) {
    this.sladerBlock = sladerBlock;
    this.slider = this.sladerBlock.querySelector('.fav_slider');
    this.sliderContent = this.sladerBlock.querySelectorAll('.fav_slider_content_inner');
    this.slideBtn = this.sladerBlock.querySelectorAll('.arrowBtn');
    this.sliderWrapper = document.querySelector('.fav_slider_wrapper');
    this.slidesElements = this.sladerBlock.querySelectorAll('.fav_slider_content');
    this.pagElems = document.querySelectorAll('.fav_pag_element');
    this.count = 0;
    this.timeCount = 0;
    this.isMove = false;
    this.isOnView = false;
    this.elemWidth = 0;
    this.midleElem = 0;
    this.posStart = 0;
    this.posX1 = 0;
    this.posX2 = 0;
    this.posEnd = 0;
    this.checkWidth();
    this.changePagElem(this.count);
    this.addListners();
  }
  checkWidth() {
    this.elemWidth = this.slider.offsetWidth;
    this.midleElem = this.elemWidth / 2;
    this.slidesElements.forEach(element => {
      element.setAttribute('style', `width: ${this.elemWidth}px`);
    });
  }
  changePagElem(counter) {
    this.pagElems.forEach(elem => {
      if (elem.classList.contains('fav_pag_active')) {
        elem.classList.remove('fav_pag_hover');
        elem.classList.remove('fav_pag_active');
        elem.children[0].setAttribute('style', 'width: 0');
      }
    });
    this.pagElems[counter].classList.add('fav_pag_active');
  }
  slideNext() {
    if (!this.isMove) {
      this.isMove = true;
      this.timeCount = 0;
      if (this.count >= 2) {
        this.count = 0;
      } else {
        this.count += 1;
      }
      const slide = this.sliderWrapper.children[0];
      this.sliderWrapper.classList.add('slide_next');
      this.changePagElem(this.count);
      setTimeout(() => {
        this.sliderWrapper.classList.remove('slide_next');
        this.sliderWrapper.children[0].remove();
        this.sliderWrapper.append(slide);
        this.isMove = false;
      }, 650);
    }
  }
  slidePrev() {
    if (!this.isMove) {
      this.isMove = true;
      this.timeCount = 0;
      if (this.count <= 0) {
        this.count = 2;
      } else {
        this.count -= 1;
      }
      const slide = this.sliderWrapper.children[2];
      this.sliderWrapper.classList.add('slide_prev');
      this.changePagElem(this.count);
      setTimeout(() => {
        this.sliderWrapper.classList.remove('slide_prev');
        this.sliderWrapper.children[2].remove();
        this.sliderWrapper.prepend(slide);
        this.isMove = false;
      }, 650);
    }
  }
  swipeStart(event) {
    this.midleElem = this.elemWidth / 2;
    this.posStart = event.touches[0].clientX;
  }
  swipeMove(event) {
    this.posEnd = event.touches[0].clientX;
  }
  swipeEnd(event) {
    if (this.posStart - this.posEnd > 0) {
      this.slideNext();
    } else {
      this.slidePrev();
    }
  }
  timeInterval(elements) {
    elements.forEach(elem => {
      if (elem.classList.contains('fav_pag_active')) {
        if (this.timeCount <= 110) {
          this.timeCount += 2.5;
          elem.children[0].setAttribute('style', `width: ${this.timeCount}%`);
        } else {
          this.timeCount = 0;
          elem.children[0].setAttribute('style', `width: ${this.timeCount}%`);
          elem.children[0].classList.add('fav_pag_hover');
          setTimeout(() => {
            elem.children[0].classList.remove('fav_pag_hover');
          }, 800);
          this.slideNext();
        }
      } else {
        elem.children[0].setAttribute('style', `width: 0%`);
      }
    });
  }
  callbackObserver(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        this.isOnView = false;
        clearInterval(this.autoInterval);
      } else {
        this.isOnView = true;
        this.autoInterval = setInterval(() => this.timeInterval(this.pagElems), 125);
      }
    });
  }
  startObserver() {
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    this.observerSlider = new IntersectionObserver(this.callbackObserver.bind(this), this.options);
    this.observerSlider.observe(this.slider);
  }
  addListners() {
    window.addEventListener('resize', this.checkWidth.bind(this));
    window.addEventListener('load', this.startObserver.bind(this));
    this.slideBtn[0].addEventListener('click', this.slidePrev.bind(this));
    this.slideBtn[1].addEventListener('click', this.slideNext.bind(this));
    this.slider.addEventListener('touchstart', event => {
      if (this.isOnView) {
        clearInterval(this.autoInterval);
      }
      this.swipeStart(event);
    });
    this.slider.addEventListener('touchmove', event => {
      this.swipeMove(event);
    });
    this.slider.addEventListener('touchend', event => {
      if (this.isOnView) {
        this.autoInterval = setInterval(() => this.timeInterval(this.pagElems), 125);
      }
      this.swipeEnd(event);
    });
    this.sliderContent.forEach(elem => {
      elem.addEventListener('mouseover', () => {
        if (this.isOnView) {
          clearInterval(this.autoInterval);
        }
      });
      elem.addEventListener('mouseout', () => {
        if (this.isOnView) {
          this.autoInterval = setInterval(() => this.timeInterval(this.pagElems), 125);
        }
      });
    });
  }
}
;// CONCATENATED MODULE: ./src/index.js



// components






// import ObserverSlider from './modules/main/Favourites_Coffee/slider';

const bodyMain = document.querySelector('body');
bodyMain.append(modules_header_header.header, main_main, modules_footer_footer.footer);
const logoLink = document.querySelector('.header_main_page');
// eslint-disable-next-line no-script-url
logoLink.setAttribute('href', 'javascript:void(0)');
logoLink.classList.add('menu_logo_disabled');
const src_mainPageBtn = document.querySelector('.header_main_page');
const src_menuBtn = document.querySelector('.header_btn');
src_menuBtn.addEventListener('click', () => {
  src_menuBtn.classList.add('active');
});
// burger
const {
  body
} = document;
const navTogle = new BurgerMenu(body);
// ===

// video perfomans

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};
window.addEventListener('load', event => {
  const observe = new Observer('#video', options);
}, false);
// =====
// slider
const sladerBlock = document.querySelector('.favorites_slider_wrapper');
const slider = new Slider(sladerBlock);
// ==
}();
/******/ })()
;
//# sourceMappingURL=main.js.map