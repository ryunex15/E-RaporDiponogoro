(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
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
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BTableSimple: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTableSimple"],
    BThead: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BThead"],
    BTbody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTbody"],
    BTfoot: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTfoot"],
    BTr: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTr"],
    BTh: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTh"],
    BTd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTd"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BOverlay"]
  },
  data: function data() {
    return {
      modalShow: false,
      loading: false,
      isBusy: true,
      table_sync: [],
      jumlah: 0,
      last_sync: '',
      form: {
        user_id: '',
        sekolah_id: '',
        semester_id: ''
      },
      offline: true,
      message: ''
    };
  },
  created: function created() {
    this.form.user_id = this.user.user_id;
    this.form.sekolah_id = this.user.sekolah_id;
    this.form.semester_id = this.user.semester.semester_id;
    this.loadPostsData();
  },
  methods: {
    loadPostsData: function loadPostsData() {
      var _this = this;
      this.$http.post('/sinkronisasi/erapor', this.form).then(function (response) {
        _this.isBusy = false;
        _this.loading = false;
        var getData = response.data;
        _this.last_sync = getData.last_sync;
        _this.table_sync = getData.table_sync;
        _this.jumlah = getData.jumlah;
        if (_this.jumlah >= 1000) {
          _this.modalShow = true;
        }
        _this.message = getData.response.message;
        _this.offline = _this.message ? true : false;
      });
    },
    kirimData: function kirimData() {
      var _this2 = this;
      this.loading = true;
      this.$http.post('/sinkronisasi/kirim-data', this.form).then(function (response) {
        var getData = response.data;
        _this2.$swal({
          icon: getData.icon,
          title: getData.title,
          text: getData.text,
          customClass: {
            confirmButton: 'btn btn-success'
          }
        }).then(function (result) {
          _this2.loadPostsData();
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!sweetalert2/dist/sweetalert2.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sweetalert2/dist/sweetalert2.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n.swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  padding: 0.438rem 1rem;\n  color: #6e6b7b;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n  line-height: 1.45;\n}\n.swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line,\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n  color: #6e6b7b;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left,\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right,\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix,\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content,\n.dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre,\n.dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n  color: #b4b7bd;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=template&id=943946b6":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=template&id=943946b6 ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { cols: "6", xl: "8", md: "8", sm: "6" } },
            [
              _vm.isBusy
                ? _c(
                    "b-card",
                    { staticClass: "text-center text-danger my-2" },
                    [
                      _c("b-spinner", { staticClass: "align-middle" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Loading...")]),
                    ],
                    1
                  )
                : _c(
                    "b-card",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "p-0" },
                        [
                          _c(
                            "b-table-simple",
                            { attrs: { bordered: "" } },
                            [
                              _c(
                                "b-tr",
                                [
                                  _c(
                                    "b-td",
                                    { attrs: { rowspan: "4", width: "10%" } },
                                    [
                                      _c("b-img", {
                                        staticStyle: { "max-width": "100px" },
                                        attrs: { src: "/logo.png" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", { attrs: { width: "30%" } }, [
                                    _vm._v("NPSN Sekolah"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-td", { attrs: { width: "60%" } }, [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.user.sekolah.npsn)),
                                    ]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tr",
                                [
                                  _c("b-td", [_vm._v("Nama Sekolah")]),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.user.sekolah.nama)),
                                    ]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tr",
                                [
                                  _c("b-td", [_vm._v("Alamat Sekolah")]),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("strong", [
                                      _vm._v(_vm._s(_vm.user.sekolah.alamat)),
                                    ]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tr",
                                [
                                  _c("b-td", [
                                    _vm._v("Desa Kelurahan Sekolah"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.user.sekolah.desa_kelurahan)
                                      ),
                                    ]),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "6", xl: "4", md: "4", sm: "6" } },
            [
              _vm.isBusy
                ? _c(
                    "b-card",
                    { staticClass: "text-center text-danger my-2" },
                    [
                      _c("b-spinner", { staticClass: "align-middle" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Loading...")]),
                    ],
                    1
                  )
                : _c(
                    "b-card",
                    { staticClass: "text-center" },
                    [
                      _c("p", [
                        _vm._v("Pengiriman data terakhir dilakukan pada "),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v(_vm._s(_vm.last_sync))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-overlay",
                        {
                          attrs: {
                            show: _vm.loading,
                            rounded: "",
                            opacity: "0.6",
                            size: "sm",
                            "spinner-variant": "danger",
                          },
                        },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                size: "lg",
                                variant: "success",
                                disabled: _vm.offline,
                              },
                              on: { click: _vm.kirimData },
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "fa-solid fa-cloud-arrow-up" },
                              }),
                              _vm._v(" "),
                              _c("strong", [_vm._v("KIRIM DATA")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      !_vm.isBusy
        ? [
            _c(
              "b-card",
              { staticClass: "text-center", attrs: { "bg-variant": "dark" } },
              [
                _c(
                  "b-card-text",
                  { staticClass: "h2", staticStyle: { color: "#fff" } },
                  [_vm._v("DATA YANG MENGALAMI PERUBAHAN")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.offline
              ? _c(
                  "b-card",
                  {
                    staticClass: "text-center",
                    attrs: { "bg-variant": "danger" },
                  },
                  [
                    _c(
                      "b-card-text",
                      { staticClass: "h2", staticStyle: { color: "#fff" } },
                      [_vm._v(_vm._s(_vm.message))]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "b-card",
              [
                _c(
                  "b-overlay",
                  {
                    attrs: {
                      show: _vm.loading,
                      rounded: "",
                      opacity: "0.6",
                      size: "xl",
                      "spinner-variant": "danger",
                    },
                  },
                  [
                    _c(
                      "b-table-simple",
                      { attrs: { bordered: "", responsive: "" } },
                      [
                        _c(
                          "b-thead",
                          [
                            _c(
                              "b-tr",
                              { attrs: { variant: "light" } },
                              [
                                _c(
                                  "b-th",
                                  {
                                    staticClass: "text-center",
                                    attrs: { width: "5%" },
                                  },
                                  [_vm._v("No")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-th",
                                  {
                                    staticClass: "text-center",
                                    attrs: { width: "80%" },
                                  },
                                  [_vm._v("Data")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-th",
                                  {
                                    staticClass: "text-center",
                                    attrs: { width: "15%" },
                                  },
                                  [_vm._v("Jml Data")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tbody",
                          [
                            _vm._l(_vm.table_sync, function (item, index) {
                              return [
                                _c(
                                  "b-tr",
                                  [
                                    _c("b-td", { staticClass: "text-center" }, [
                                      _vm._v(_vm._s(index + 1)),
                                    ]),
                                    _vm._v(" "),
                                    _c("b-td", [_vm._v(_vm._s(item.data))]),
                                    _vm._v(" "),
                                    _c("b-td", { staticClass: "text-center" }, [
                                      _vm._v(_vm._s(item.count)),
                                    ]),
                                  ],
                                  1
                                ),
                              ]
                            }),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "b-tfoot",
                          [
                            _c(
                              "b-tr",
                              { attrs: { variant: "light" } },
                              [
                                _c(
                                  "b-td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "2", variant: "light" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                JUMLAH\n              "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-td",
                                  {
                                    staticClass: "text-center",
                                    attrs: { variant: "light" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.jumlah) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "ok-only": "",
            "ok-title": "Tutup",
            size: "lg",
            title: "Informasi",
          },
          model: {
            value: _vm.modalShow,
            callback: function ($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow",
          },
        },
        [
          _c("p", [
            _vm._v(
              "Terdeteksi jumlah data yang akan dikirim melebihi 1.000 row. Sangat disarankan melakukan pengiriman data melalui "
            ),
            _c("code", [_vm._v("Command Prompt")]),
            _vm._v(" untuk menghindari kegagalan pengiriman data."),
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Cara melakukan pengiriman data melalui "),
            _c("code", [_vm._v("Command Prompt")]),
            _vm._v(":"),
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Untuk Pengguna "),
            _c("strong", [_vm._v("Windows")]),
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [_vm._v("Buka CMD")]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Ketik: "),
              _c("code", [_vm._v("cd c:\\eRaporSMK\\dataweb")]),
              _vm._v(" [enter]"),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Ketik: "),
              _c("code", [_vm._v("php artisan kirim:erapor")]),
              _vm._v(" [enter]"),
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Ketikkan email administrator")]),
            _vm._v(" "),
            _c("li", [_vm._v("Tunggu hingga proses pengiriman data selesai.")]),
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("Untuk Pengguna "), _c("strong", [_vm._v("Linux")])]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v("Buka Aplikasi Putty dan login ke "),
              _c("code", [_vm._v("shh")]),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Ketik: "),
              _c("code", [
                _vm._v("cd /var/www/html/dataweb"),
                _c("sup", [_vm._v("*")]),
              ]),
              _vm._v(" [enter]"),
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Ketik: "),
              _c("code", [_vm._v("php artisan kirim:erapor")]),
              _vm._v(" [enter]"),
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Ketikkan email administrator")]),
            _vm._v(" "),
            _c("li", [_vm._v("Tunggu hingga proses pengiriman data selesai.")]),
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Keterangan: "),
            _c("br"),
            _vm._v(
              "\n      * : Sesuaikan dengan direktori root folder aplikasi e-Rapor SMK di install "
            ),
            _c("br"),
            _vm._v(
              "\n      Untuk mengirimkan seluruh data yang tersimpan di database tanpa filter apapun, jalankan perintah: "
            ),
            _c("code", [_vm._v("php artisan kirim:erapor --force")]),
          ]),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/sinkronisasi/Erapor.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/sinkronisasi/Erapor.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Erapor_vue_vue_type_template_id_943946b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Erapor.vue?vue&type=template&id=943946b6 */ "./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=template&id=943946b6");
/* harmony import */ var _Erapor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Erapor.vue?vue&type=script&lang=js */ "./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Erapor_vue_vue_type_style_index_0_id_943946b6_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss */ "./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Erapor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Erapor_vue_vue_type_template_id_943946b6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Erapor_vue_vue_type_template_id_943946b6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sinkronisasi/Erapor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Erapor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_style_index_0_id_943946b6_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=style&index=0&id=943946b6&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_style_index_0_id_943946b6_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_style_index_0_id_943946b6_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_style_index_0_id_943946b6_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_style_index_0_id_943946b6_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=template&id=943946b6":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=template&id=943946b6 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_template_id_943946b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Erapor.vue?vue&type=template&id=943946b6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sinkronisasi/Erapor.vue?vue&type=template&id=943946b6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_template_id_943946b6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Erapor_vue_vue_type_template_id_943946b6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);