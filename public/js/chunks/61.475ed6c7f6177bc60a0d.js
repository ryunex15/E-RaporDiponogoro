(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/eventBus */ "./resources/js/src/@core/utils/eventBus.js");



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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardBody"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSpinner"],
    BTableSimple: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTableSimple"],
    BThead: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BThead"],
    BTbody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTbody"],
    BTh: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTh"],
    BTr: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTr"],
    BTd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTd"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"]
  },
  data: function data() {
    return {
      isBusy: true,
      merdeka: false,
      form: {
        aksi: 'unduh-legger',
        user_id: '',
        guru_id: '',
        sekolah_id: '',
        semester_id: '',
        periode_aktif: '',
        pilihan: false
      },
      rombongan_belajar_id: '',
      data_siswa: [],
      data_pembelajaran: [],
      legger_link: '',
      is_ppa: false
    };
  },
  created: function created() {
    this.form.user_id = this.user.user_id;
    this.form.guru_id = this.user.guru_id;
    this.form.sekolah_id = this.user.sekolah_id;
    this.form.semester_id = this.user.semester.semester_id;
    this.form.periode_aktif = this.user.semester.nama;
    this.loadPostsData();
    _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('unduhLegger', this.handleEvent);
  },
  methods: {
    handleEvent: function handleEvent() {
      if (this.rombongan_belajar_id) {
        if (this.merdeka || this.is_ppa) {
          var url = "/downloads/leger-nilai-kurmer/".concat(this.rombongan_belajar_id, "/").concat(this.form.sekolah_id, "/").concat(this.form.semester_id);
        } else {
          var url = "/downloads/leger-nilai-rapor/".concat(this.rombongan_belajar_id);
        }
        window.open(url, '_blank').focus();
      }
    },
    loadPostsData: function loadPostsData() {
      var _this = this;
      this.$http.post('/walas/unduh-legger', this.form).then(function (response) {
        _this.isBusy = false;
        var getData = response.data;
        if (getData.rombel) {
          _this.rombongan_belajar_id = getData.rombel.rombongan_belajar_id;
        }
        _this.data_siswa = getData.data_siswa;
        _this.data_pembelajaran = getData.pembelajaran;
        _this.merdeka = getData.merdeka;
        _this.is_ppa = getData.is_ppa;
      });
    },
    getNilai: function getNilai(arr, anggota_rombel_id) {
      var nilai_akhir = '-';
      var nilai = arr.filter(function (el) {
        return el.anggota_rombel_id == anggota_rombel_id;
      });
      if (nilai.length) {
        nilai_akhir = nilai[0].nilai;
      }
      return nilai_akhir;
    },
    getRerata: function getRerata(nilai_p, nilai_k, rasio_p, rasio_k) {
      nilai_p = nilai_p * this.getRasio(rasio_p);
      nilai_k = nilai_k * this.getRasio(rasio_k);
      var nilai_akhir = (nilai_p + nilai_k) / 100;
      if (isNaN(nilai_akhir)) {
        nilai_akhir = '-';
      } else {
        nilai_akhir = Math.ceil(nilai_akhir);
      }
      return nilai_akhir;
    },
    getRasio: function getRasio(rasio) {
      return rasio ? rasio : 50;
    },
    getNilaiPilihan: function getNilaiPilihan(arr, anggota_pilihan) {
      var nilai_akhir = '-';
      if (anggota_pilihan) {
        var nilai = arr.filter(function (el) {
          return el.anggota_rombel_id == anggota_pilihan.anggota_rombel_id;
        });
        if (nilai.length) {
          nilai_akhir = nilai[0].nilai;
        }
      }
      return nilai_akhir;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=template&id=31d44baf":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=template&id=31d44baf ***!
  \******************************************************************************************************************************************************************************************************************/
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
                _c(
                  "b-table-simple",
                  { attrs: { bordered: "", striped: "", responsive: "" } },
                  [
                    _c(
                      "b-thead",
                      [
                        _vm.merdeka
                          ? [
                              _c(
                                "b-tr",
                                [
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Nama Peserta Didik"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("NISN"),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.data_pembelajaran,
                                    function (pembelajaran, index) {
                                      return [
                                        _c(
                                          "b-th",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                pembelajaran.nama_mata_pelajaran
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("S"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("I"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("A"),
                                  ]),
                                ],
                                2
                              ),
                            ]
                          : [
                              _vm.is_ppa
                                ? [
                                    _c(
                                      "b-tr",
                                      [
                                        _c(
                                          "b-th",
                                          { staticClass: "text-center" },
                                          [_vm._v("Nama Peserta Didik")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          { staticClass: "text-center" },
                                          [_vm._v("NISN")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.data_pembelajaran,
                                          function (pembelajaran, index) {
                                            return [
                                              _c(
                                                "b-th",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      pembelajaran.nama_mata_pelajaran
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          }
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          { staticClass: "text-center" },
                                          [_vm._v("S")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          { staticClass: "text-center" },
                                          [_vm._v("I")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          { staticClass: "text-center" },
                                          [_vm._v("A")]
                                        ),
                                      ],
                                      2
                                    ),
                                  ]
                                : [
                                    _c(
                                      "b-tr",
                                      [
                                        _c(
                                          "b-th",
                                          {
                                            staticClass:
                                              "text-center align-middle",
                                            attrs: { rowspan: "3" },
                                          },
                                          [_vm._v("Nama Peserta Didik")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          {
                                            staticClass:
                                              "text-center align-middle",
                                            attrs: { rowspan: "3" },
                                          },
                                          [_vm._v("NISN")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.data_pembelajaran,
                                          function (pembelajaran, index) {
                                            return [
                                              _c(
                                                "b-th",
                                                {
                                                  staticClass: "text-center",
                                                  attrs: { colspan: "3" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      pembelajaran.nama_mata_pelajaran
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          }
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          {
                                            staticClass:
                                              "text-center align-middle",
                                            attrs: { rowspan: "3" },
                                          },
                                          [_vm._v("S")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          {
                                            staticClass:
                                              "text-center align-middle",
                                            attrs: { rowspan: "3" },
                                          },
                                          [_vm._v("I")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-th",
                                          {
                                            staticClass:
                                              "text-center align-middle",
                                            attrs: { rowspan: "3" },
                                          },
                                          [_vm._v("A")]
                                        ),
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-tr",
                                      [
                                        _vm._l(
                                          _vm.data_pembelajaran,
                                          function (pembelajaran, index) {
                                            return [
                                              _c(
                                                "b-th",
                                                { staticClass: "text-center" },
                                                [_vm._v("P")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-th",
                                                { staticClass: "text-center" },
                                                [_vm._v("K")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-th",
                                                {
                                                  staticClass:
                                                    "text-center align-middle",
                                                  attrs: { rowspan: "2" },
                                                },
                                                [_vm._v("R")]
                                              ),
                                            ]
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-tr",
                                      [
                                        _vm._l(
                                          _vm.data_pembelajaran,
                                          function (pembelajaran, index) {
                                            return [
                                              _c(
                                                "b-th",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "Rasio P: " +
                                                      _vm._s(
                                                        _vm.getRasio(
                                                          pembelajaran.rasio_p
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-th",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "Rasio K: " +
                                                      _vm._s(
                                                        _vm.getRasio(
                                                          pembelajaran.rasio_k
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                  ],
                            ],
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tbody",
                      [
                        _vm._l(_vm.data_siswa, function (item, index) {
                          return [
                            _c(
                              "b-tr",
                              [
                                _c("b-td", [_vm._v(_vm._s(item.nama))]),
                                _vm._v(" "),
                                _c("b-td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(item.nisn)),
                                ]),
                                _vm._v(" "),
                                _vm.merdeka
                                  ? [
                                      _vm._l(
                                        _vm.data_pembelajaran,
                                        function (pembelajaran, index) {
                                          return [
                                            pembelajaran.rombongan_belajar
                                              .jenis_rombel == "1"
                                              ? [
                                                  _c(
                                                    "b-td",
                                                    {
                                                      staticClass:
                                                        "text-center",
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getNilai(
                                                            pembelajaran.all_nilai_akhir_kurmer,
                                                            item.anggota_rombel
                                                              .anggota_rombel_id
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              : [
                                                  _c(
                                                    "b-td",
                                                    {
                                                      staticClass:
                                                        "text-center",
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getNilaiPilihan(
                                                            pembelajaran.all_nilai_akhir_kurmer,
                                                            item.anggota_pilihan
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                          ]
                                        }
                                      ),
                                    ]
                                  : [
                                      _vm._l(
                                        _vm.data_pembelajaran,
                                        function (pembelajaran, index) {
                                          return [
                                            pembelajaran.rombongan_belajar
                                              .jenis_rombel == "1"
                                              ? [
                                                  _vm.is_ppa
                                                    ? [
                                                        _c(
                                                          "b-td",
                                                          {
                                                            staticClass:
                                                              "text-center",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.getNilai(
                                                                  pembelajaran.all_nilai_akhir_pengetahuan,
                                                                  item
                                                                    .anggota_rombel
                                                                    .anggota_rombel_id
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    : [
                                                        _c(
                                                          "b-td",
                                                          {
                                                            staticClass:
                                                              "text-center",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.getNilai(
                                                                  pembelajaran.all_nilai_akhir_pengetahuan,
                                                                  item
                                                                    .anggota_rombel
                                                                    .anggota_rombel_id
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-td",
                                                          {
                                                            staticClass:
                                                              "text-center",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.getNilai(
                                                                  pembelajaran.all_nilai_akhir_keterampilan,
                                                                  item
                                                                    .anggota_rombel
                                                                    .anggota_rombel_id
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-td",
                                                          {
                                                            staticClass:
                                                              "text-center",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                        " +
                                                                _vm._s(
                                                                  _vm.getRerata(
                                                                    _vm.getNilai(
                                                                      pembelajaran.all_nilai_akhir_pengetahuan,
                                                                      item
                                                                        .anggota_rombel
                                                                        .anggota_rombel_id
                                                                    ),
                                                                    _vm.getNilai(
                                                                      pembelajaran.all_nilai_akhir_keterampilan,
                                                                      item
                                                                        .anggota_rombel
                                                                        .anggota_rombel_id
                                                                    ),
                                                                    _vm.getRasio(
                                                                      pembelajaran.rasio_p
                                                                    ),
                                                                    _vm.getRasio(
                                                                      pembelajaran.rasio_k
                                                                    )
                                                                  )
                                                                ) +
                                                                "\n                      "
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                ]
                                              : [
                                                  _c(
                                                    "b-td",
                                                    {
                                                      staticClass:
                                                        "text-center",
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.getNilaiPilihan(
                                                            pembelajaran.all_nilai_akhir_kurmer,
                                                            item.anggota_pilihan
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                          ]
                                        }
                                      ),
                                    ],
                                _vm._v(" "),
                                _c("b-td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      item.anggota_rombel.absensi
                                        ? item.anggota_rombel.absensi.sakit
                                        : "-"
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      item.anggota_rombel.absensi
                                        ? item.anggota_rombel.absensi.izin
                                        : "-"
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      item.anggota_rombel.absensi
                                        ? item.anggota_rombel.absensi.alpa
                                        : "-"
                                    )
                                  ),
                                ]),
                              ],
                              2
                            ),
                          ]
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/eventBus.js":
/*!**************************************************!*\
  !*** ./resources/js/src/@core/utils/eventBus.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var eventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (eventBus);

/***/ }),

/***/ "./resources/js/src/views/walas/UnduhLegger.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/walas/UnduhLegger.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnduhLegger_vue_vue_type_template_id_31d44baf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnduhLegger.vue?vue&type=template&id=31d44baf */ "./resources/js/src/views/walas/UnduhLegger.vue?vue&type=template&id=31d44baf");
/* harmony import */ var _UnduhLegger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnduhLegger.vue?vue&type=script&lang=js */ "./resources/js/src/views/walas/UnduhLegger.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _UnduhLegger_vue_vue_type_style_index_0_id_31d44baf_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss */ "./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UnduhLegger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnduhLegger_vue_vue_type_template_id_31d44baf__WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnduhLegger_vue_vue_type_template_id_31d44baf__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/walas/UnduhLegger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/walas/UnduhLegger.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/walas/UnduhLegger.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhLegger.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_style_index_0_id_31d44baf_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=style&index=0&id=31d44baf&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_style_index_0_id_31d44baf_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_style_index_0_id_31d44baf_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_style_index_0_id_31d44baf_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_style_index_0_id_31d44baf_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/walas/UnduhLegger.vue?vue&type=template&id=31d44baf":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/walas/UnduhLegger.vue?vue&type=template&id=31d44baf ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_template_id_31d44baf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhLegger.vue?vue&type=template&id=31d44baf */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/walas/UnduhLegger.vue?vue&type=template&id=31d44baf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_template_id_31d44baf__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhLegger_vue_vue_type_template_id_31d44baf__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);