(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Update.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Update.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  data: function data() {
    return {
      isBusy: true,
      tersedia: false,
      os: ''
    };
  },
  created: function created() {
    this.loadPostData();
  },
  methods: {
    loadPostData: function loadPostData() {
      var _this = this;
      this.isBusy = true;
      this.$http.get('/setting/check-update').then(function (response) {
        _this.isBusy = false;
        var getData = response.data;
        _this.tersedia = getData.tersedia;
        _this.os = getData.os;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Update.vue?vue&type=template&id=1591ad9e":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Update.vue?vue&type=template&id=1591ad9e ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c("b-card-body", [
        _vm.isBusy
          ? _c(
              "div",
              { staticClass: "text-center text-danger my-2" },
              [
                _c("b-spinner", { staticClass: "align-middle" }),
                _vm._v(" "),
                _c("strong", [_vm._v("Loading...")]),
              ],
              1
            )
          : _c(
              "div",
              [
                _vm.tersedia
                  ? [
                      _c(
                        "b-alert",
                        { attrs: { variant: "success", show: "" } },
                        [
                          _c("div", { staticClass: "alert-body" }, [
                            _c("p", [_vm._v("Pembaharuan tersedia!")]),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.os === "WIN"
                        ? [
                            _c(
                              "ol",
                              { staticClass: "ps-1", attrs: { type: "a" } },
                              [
                                _c("li", [
                                  _c("strong", [_vm._v("Manual")]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticStyle: { "padding-left": "10px" } },
                                    [
                                      _c("li", [
                                        _vm._v(
                                          "Buka Command Prompt (CMD) Run as Administrator"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Ketik "),
                                        _c("code", [
                                          _vm._v("cd C:\\eRaporSMK\\dataweb"),
                                        ]),
                                        _vm._v(" [enter]"),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Ketik "),
                                        _c("code", [_vm._v("git stash")]),
                                        _vm._v(" [enter]"),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Ketik "),
                                        _c("code", [_vm._v("git clean -df")]),
                                        _vm._v(" [enter]"),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Ketik "),
                                        _c("code", [
                                          _vm._v("git pull origin main"),
                                        ]),
                                        _vm._v(
                                          " [enter]. Tunggu sampai proses update file dari github selesai"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Ketik "),
                                        _c("code", [_vm._v("composer update")]),
                                        _vm._v(" [enter]"),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Ketik "),
                                        _c("code", [
                                          _vm._v("php artisan erapor:update"),
                                        ]),
                                        _vm._v(
                                          ". Tunggu sampai proses update versi aplikasi selesai."
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(
                                          "Pastikan di akhir informasi di Command Prompt, versi aplikasi sudah berubah"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(
                                          "Cek kembali aplikasi e-Rapor SMK, jika ada yang gagal silahkan laporkan ke Tim Helpdesk"
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("li", [
                                  _c("strong", [
                                    _vm._v("Menggunakan file .bat"),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticStyle: { "padding-left": "10px" } },
                                    [
                                      _c("li", [
                                        _vm._v("Silahkan download file "),
                                        _c("strong", [
                                          _vm._v(
                                            "updater e-Rapor SMK V7.0.0.bat"
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "https://drive.google.com/drive/folders/1gjKuWR0-17xa8m5v2WNvqRvmnMgqDk8a?usp=drive_link",
                                              target: "_blank",
                                            },
                                          },
                                          [_vm._v("disini")]
                                        ),
                                        _vm._v("."),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Buka file "),
                                        _c("strong", [
                                          _vm._v(
                                            "updater e-Rapor SMK V7.0.0.bat"
                                          ),
                                        ]),
                                        _vm._v(
                                          " dengan cara klik kanan dan pilih Run as Administartor."
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(
                                          "Tunggu sampai proses update versi aplikasi selesai."
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        : [
                            _c(
                              "ul",
                              { staticStyle: { "padding-left": "10px" } },
                              [
                                _c("li", [
                                  _vm._v(
                                    "Buka aplikasi Putty, jika belum ada, silahkan unduh "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",
                                        target: "_blank",
                                      },
                                    },
                                    [_vm._v("disini")]
                                  ),
                                  _vm._v(" kemudian install"),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Login ke SSH menggunakan username & password yang dimiliki"
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Masuk ke root direktori aplikasi e-Rapor SMK di install.(Contoh "
                                  ),
                                  _c("code", [
                                    _vm._v("cd /var/www/html/erapor"),
                                  ]),
                                  _vm._v(" [enter])"),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Ketik "),
                                  _c("code", [_vm._v("git stash")]),
                                  _vm._v(" [enter]"),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Ketik "),
                                  _c("code", [_vm._v("git clean -df")]),
                                  _vm._v(" [enter]"),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Ketik "),
                                  _c("code", [_vm._v("git pull origin main")]),
                                  _vm._v(
                                    " [enter]. Tunggu sampai proses update file dari github selesai."
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Ketik "),
                                  _c("code", [_vm._v("composer update")]),
                                  _vm._v(" [enter]"),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Ketik "),
                                  _c("code", [
                                    _vm._v("php artisan erapor:update"),
                                  ]),
                                  _vm._v(
                                    ". Tunggu sampai proses update versi aplikasi selesai."
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Pastikan di akhir informasi di SSH, versi aplikasi sudah berubah"
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Cek kembali aplikasi e-Rapor SMK, jika ada yang gagal silahkan laporkan ke Tim Helpdesk"
                                  ),
                                ]),
                              ]
                            ),
                          ],
                    ]
                  : [
                      _c(
                        "b-alert",
                        { attrs: { variant: "danger", show: "" } },
                        [
                          _c("div", { staticClass: "alert-body" }, [
                            _c("p", [_vm._v("Pembaharuan belum tersedia!")]),
                          ]),
                        ]
                      ),
                    ],
              ],
              2
            ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Update.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/pages/Update.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Update_vue_vue_type_template_id_1591ad9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Update.vue?vue&type=template&id=1591ad9e */ "./resources/js/src/views/pages/Update.vue?vue&type=template&id=1591ad9e");
/* harmony import */ var _Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update.vue?vue&type=script&lang=js */ "./resources/js/src/views/pages/Update.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Update_vue_vue_type_template_id_1591ad9e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Update_vue_vue_type_template_id_1591ad9e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Update.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Update.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Update.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Update.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Update.vue?vue&type=template&id=1591ad9e":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Update.vue?vue&type=template&id=1591ad9e ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_1591ad9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Update.vue?vue&type=template&id=1591ad9e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Update.vue?vue&type=template&id=1591ad9e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_1591ad9e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_1591ad9e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);