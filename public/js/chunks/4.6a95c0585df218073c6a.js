(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _modal_DetilPtk_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../modal/DetilPtk.vue */ "./resources/js/src/views/referensi/modal/DetilPtk.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormInput"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTable"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BSpinner"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BPagination"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BOverlay"],
    DetilPtk: _modal_DetilPtk_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    meta: {
      required: true
    },
    isBusy: {
      type: Boolean,
      "default": function _default() {
        return true;
      }
    },
    isAsesor: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      hapus: false,
      loading: false,
      loading_modal: false,
      sortBy: null,
      sortDesc: false,
      judul: null,
      guru_id: '',
      data: null,
      form: {
        gelar_depan: [],
        gelar_belakang: [],
        dudi_id: ''
      },
      ref_gelar_depan: [],
      ref_gelar_belakang: [],
      ref_dudi: []
    };
  },
  watch: {
    sortBy: function sortBy(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    },
    sortDesc: function sortDesc(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    }
  },
  methods: {
    detil: function detil(item) {
      var _this = this;
      this.loading = true;
      this.guru_id = item.guru_id;
      this.$http.post('/guru/detil', {
        guru_id: this.guru_id,
        sekolah_id: item.sekolah_id,
        asesor: this.isAsesor
      }).then(function (response) {
        _this.loading = false;
        var getData = response.data;
        _this.data = getData.guru;
        var gelar_depan = [];
        getData.guru.gelar_depan.forEach(function (value, key) {
          gelar_depan.push(value.gelar_akademik_id);
        });
        var gelar_belakang = [];
        getData.guru.gelar_belakang.forEach(function (value, key) {
          gelar_belakang.push(value.gelar_akademik_id);
        });
        _this.form.gelar_depan = gelar_depan;
        _this.form.gelar_belakang = gelar_belakang;
        _this.ref_gelar_depan = getData.ref_gelar_depan;
        _this.ref_gelar_belakang = getData.ref_gelar_belakang;
        _this.ref_dudi = getData.ref_dudi;
        _this.form.dudi_id = getData.dudi_id;
        _this.judul = 'DETIL ' + getData.guru.nama_lengkap;
        if (_this.data.jenis_ptk_id === 97 || _this.data.jenis_ptk_id === 98) {
          _this.hapus = true;
        } else {
          _this.hapus = false;
        }
        _this.$refs['detil-modal'].show();
      });
    },
    handleOk: function handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;
      this.loading_modal = true;
      this.$http.post('/guru/update', {
        guru_id: this.guru_id,
        gelar_depan: this.form.gelar_depan,
        gelar_belakang: this.form.gelar_belakang,
        sekolah_id: this.user.sekolah_id,
        dudi_id: this.form.dudi_id,
        asesor: this.isAsesor
      }).then(function (response) {
        _this2.loading_modal = false;
        var getData = response.data;
        _this2.$swal({
          icon: getData.icon,
          title: getData.title,
          text: getData.text,
          customClass: {
            confirmButton: 'btn btn-success'
          }
        }).then(function (result) {
          _this2.$refs['detil-modal'].hide();
          _this2.loadPerPage(_this2.meta.per_page);
        });
      });
    },
    loadPerPage: function loadPerPage(val) {
      this.$emit('per_page', this.meta.per_page);
    },
    changePage: function changePage(val) {
      this.$emit('pagination', val);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function (e) {
      this.$emit('search', e);
    }, 500),
    hapusData: function hapusData() {
      var _this3 = this;
      this.$swal({
        title: 'Apakah Anda yakin?',
        text: 'Tindakan ini tidak ada dibatalkan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yakin!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false,
        allowOutsideClick: function allowOutsideClick() {
          return false;
        }
      }).then(function (result) {
        if (result.value) {
          _this3.loading_modal = true;
          _this3.$http.post('/guru/hapus', {
            data: _this3.data.jenis_ptk_id === 97 ? 'Instruktur' : 'Asesor',
            id: _this3.guru_id
          }).then(function (response) {
            var getData = response.data;
            _this3.$swal({
              icon: getData.icon,
              title: getData.title,
              text: getData.text,
              customClass: {
                confirmButton: 'btn btn-success'
              },
              allowOutsideClick: false
            }).then(function (result) {
              _this3.$refs['detil-modal'].hide();
              _this3.loadPerPage(_this3.meta.per_page);
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BOverlay"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    data: {
      required: true
    },
    ref_gelar_depan: {
      type: Array,
      required: true
    },
    ref_gelar_belakang: {
      type: Array,
      required: true
    },
    ref_dudi: {
      type: Array,
      required: true
    },
    loading_modal: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    isAsesor: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!sweetalert2/dist/sweetalert2.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sweetalert2/dist/sweetalert2.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n.swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  padding: 0.438rem 1rem;\n  color: #6e6b7b;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n  line-height: 1.45;\n}\n.swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line,\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n  color: #6e6b7b;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left,\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right,\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix,\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content,\n.dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre,\n.dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n  color: #b4b7bd;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=template&id=e32437ae":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=template&id=e32437ae ***!
  \************************************************************************************************************************************************************************************************************************/
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
        [
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { md: "4" } },
            [
              _c("v-select", {
                attrs: {
                  options: [10, 25, 50, 100],
                  clearable: false,
                  searchable: false,
                },
                on: { input: _vm.loadPerPage },
                model: {
                  value: _vm.meta.per_page,
                  callback: function ($$v) {
                    _vm.$set(_vm.meta, "per_page", $$v)
                  },
                  expression: "meta.per_page",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "4", "offset-md": "4" } },
            [
              _c("b-form-input", {
                attrs: { placeholder: "Cari data..." },
                on: { input: _vm.search },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-overlay",
        {
          attrs: {
            show: _vm.loading,
            rounded: "",
            opacity: "0.6",
            size: "lg",
            "spinner-variant": "warning",
          },
        },
        [
          _c("b-table", {
            attrs: {
              responsive: "",
              bordered: "",
              striped: "",
              items: _vm.items,
              fields: _vm.fields,
              "sort-by": _vm.sortBy,
              "sort-desc": _vm.sortDesc,
              "show-empty": "",
              busy: _vm.isBusy,
            },
            on: {
              "update:sortBy": function ($event) {
                _vm.sortBy = $event
              },
              "update:sort-by": function ($event) {
                _vm.sortBy = $event
              },
              "update:sortDesc": function ($event) {
                _vm.sortDesc = $event
              },
              "update:sort-desc": function ($event) {
                _vm.sortDesc = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "empty",
                fn: function (scope) {
                  return [
                    _c("p", { staticClass: "text-center" }, [
                      _vm._v("Tidak ada data untuk ditampilkan"),
                    ]),
                  ]
                },
              },
              {
                key: "table-busy",
                fn: function () {
                  return [
                    _c(
                      "div",
                      { staticClass: "text-center text-danger my-2" },
                      [
                        _c("b-spinner", { staticClass: "align-middle" }),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Loading...")]),
                      ],
                      1
                    ),
                  ]
                },
                proxy: true,
              },
              {
                key: "cell(ttl)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(row.item.tempat_lahir) +
                        ", " +
                        _vm._s(row.item.tanggal_lahir_indo) +
                        "\n      "
                    ),
                  ]
                },
              },
              {
                key: "cell(actions)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "warning", size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.detil(row.item)
                          },
                        },
                      },
                      [_vm._v("Detil")]
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-2" },
        [
          _c("b-col", { attrs: { md: "6" } }, [
            _c("p", [
              _vm._v(
                "Menampilkan " +
                  _vm._s(_vm.meta.from ? _vm.meta.from : 0) +
                  " sampai " +
                  _vm._s(_vm.meta.to) +
                  " dari " +
                  _vm._s(_vm.meta.total) +
                  " entri"
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("b-pagination", {
                attrs: {
                  "total-rows": _vm.meta.total,
                  "per-page": _vm.meta.per_page,
                  align: "right",
                  "aria-controls": "dw-datatable",
                },
                on: { change: _vm.changePage },
                model: {
                  value: _vm.meta.current_page,
                  callback: function ($$v) {
                    _vm.$set(_vm.meta, "current_page", $$v)
                  },
                  expression: "meta.current_page",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "detil-modal",
          attrs: {
            size: "lg",
            title: _vm.judul,
            "ok-title": "Simpan",
            "cancel-title": "Tutup",
          },
          on: { ok: _vm.handleOk },
        },
        [
          _c("detil-ptk", {
            attrs: {
              data: _vm.data,
              loading_modal: _vm.loading_modal,
              ref_gelar_depan: _vm.ref_gelar_depan,
              ref_gelar_belakang: _vm.ref_gelar_belakang,
              form: _vm.form,
              isAsesor: _vm.isAsesor,
              ref_dudi: _vm.ref_dudi,
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=template&id=452ea02d":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=template&id=452ea02d ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "b-overlay",
    {
      attrs: {
        show: _vm.loading_modal,
        rounded: "",
        opacity: "0.6",
        size: "lg",
        "spinner-variant": "danger",
      },
    },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.handleSubmit($event)
            },
          },
        },
        [
          _vm.data
            ? _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Nama Lengkap",
                            "label-cols-md": "3",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              value: _vm.data.nama_lengkap,
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: { label: "Gelar Depan", "label-cols-md": "3" },
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              multiple: "",
                              options: _vm.ref_gelar_depan,
                              reduce: function (kode) {
                                return kode.gelar_akademik_id
                              },
                              label: "kode",
                              placeholder: "== Pilih Gelar Depan ==",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "no-options",
                                  fn: function (ref) {
                                    var search = ref.search
                                    var searching = ref.searching
                                    var loading = ref.loading
                                    return [
                                      _vm._v(
                                        "\n              Tidak ada data untuk ditampilkan\n            "
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              false,
                              1385440287
                            ),
                            model: {
                              value: _vm.form.gelar_depan,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "gelar_depan", $$v)
                              },
                              expression: "form.gelar_depan",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Gelar Belakang",
                            "label-cols-md": "3",
                          },
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              multiple: "",
                              options: _vm.ref_gelar_belakang,
                              reduce: function (kode) {
                                return kode.gelar_akademik_id
                              },
                              label: "kode",
                              placeholder: "== Pilih Gelar Depan ==",
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "no-options",
                                  fn: function (ref) {
                                    var search = ref.search
                                    var searching = ref.searching
                                    var loading = ref.loading
                                    return [
                                      _vm._v(
                                        "\n              Tidak ada data untuk ditampilkan\n            "
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              false,
                              1385440287
                            ),
                            model: {
                              value: _vm.form.gelar_belakang,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "gelar_belakang", $$v)
                              },
                              expression: "form.gelar_belakang",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "NUPTK", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.nuptk, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "NIP", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.nip, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "NIK", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.nik, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Jenis Kelamin",
                            "label-cols-md": "3",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              value:
                                _vm.data.jenis_kelamin == "L"
                                  ? "Laki-laki"
                                  : "Perempuan",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Tempat Lahir",
                            "label-cols-md": "3",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              value: _vm.data.tempat_lahir,
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Tanggal Lahir",
                            "label-cols-md": "3",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              value: _vm.data.tanggal_lahir_indo,
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Agama", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              value: _vm.data.agama_id
                                ? _vm.data.agama.nama
                                : "",
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Alamat", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.alamat, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "RT", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.rt, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "RW", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.rw, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Desa/Kelurahan",
                            "label-cols-md": "3",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              value: _vm.data.desa_kelurahan,
                              disabled: "",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Kecamatan", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.kecamatan, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Kodepos", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.kode_pos, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Telp/HP", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.no_hp, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Email", "label-cols-md": "3" } },
                        [
                          _c("b-form-input", {
                            attrs: { value: _vm.data.email, disabled: "" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.isAsesor
                    ? _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "DUDI", "label-cols-md": "3" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  options: _vm.ref_dudi,
                                  reduce: function (nama) {
                                    return nama.dudi_id
                                  },
                                  label: "nama",
                                  placeholder: "== Pilih DUDI ==",
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "no-options",
                                      fn: function (ref) {
                                        var search = ref.search
                                        var searching = ref.searching
                                        var loading = ref.loading
                                        return [
                                          _vm._v(
                                            "\n              Tidak ada data untuk ditampilkan\n            "
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  1385440287
                                ),
                                model: {
                                  value: _vm.form.dudi_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "dudi_id", $$v)
                                  },
                                  expression: "form.dudi_id",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Datatable.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Datatable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Datatable_vue_vue_type_template_id_e32437ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datatable.vue?vue&type=template&id=e32437ae */ "./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=template&id=e32437ae");
/* harmony import */ var _Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue?vue&type=script&lang=js */ "./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Datatable_vue_vue_type_style_index_0_id_e32437ae_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss */ "./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datatable_vue_vue_type_template_id_e32437ae__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Datatable_vue_vue_type_template_id_e32437ae__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/referensi/gtk/Datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_style_index_0_id_e32437ae_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=style&index=0&id=e32437ae&lang=scss");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_style_index_0_id_e32437ae_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_style_index_0_id_e32437ae_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_style_index_0_id_e32437ae_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_style_index_0_id_e32437ae_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=template&id=e32437ae":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=template&id=e32437ae ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_e32437ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=template&id=e32437ae */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Datatable.vue?vue&type=template&id=e32437ae");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_e32437ae__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_e32437ae__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/referensi/modal/DetilPtk.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/referensi/modal/DetilPtk.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetilPtk_vue_vue_type_template_id_452ea02d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetilPtk.vue?vue&type=template&id=452ea02d */ "./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=template&id=452ea02d");
/* harmony import */ var _DetilPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetilPtk.vue?vue&type=script&lang=js */ "./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetilPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetilPtk_vue_vue_type_template_id_452ea02d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetilPtk_vue_vue_type_template_id_452ea02d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/referensi/modal/DetilPtk.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetilPtk.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=template&id=452ea02d":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=template&id=452ea02d ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPtk_vue_vue_type_template_id_452ea02d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetilPtk.vue?vue&type=template&id=452ea02d */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/DetilPtk.vue?vue&type=template&id=452ea02d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPtk_vue_vue_type_template_id_452ea02d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPtk_vue_vue_type_template_id_452ea02d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);