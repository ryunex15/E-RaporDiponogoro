(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Datatable.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/progress/Datatable.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a
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
    actions: {
      type: Object,
      "default": function _default() {
        return {
          showDelete: false,
          deleteRoute: ""
        };
      }
    },
    // Provide default values for actions prop
    deleteIdKey: {
      type: String,
      "default": "id" // Default ID key
    },
    deleteIdKeyTugas: {
      type: String,
      "default": "id" // Default ID key
    }
  },
  data: function data() {
    return {
      loading: false,
      sortBy: null,
      sortDesc: false
    };
  },
  methods: {
    handleAction: function handleAction(item) {
      this.$emit("action-clicked", item);
      console.log("Action clicked:", item);
      this.$router.push({
        path: "/referensi/kelas-pembelajaran/kelas/tugas",
        query: {
          someParam: item.someValue,
          id: item.tugas_id
        }
      });
      console.log("Navigating to: /details/".concat(item.tugas_id));
    },
    loadPerPage: function loadPerPage(val) {
      this.$emit("per_page", this.meta.per_page);
    },
    changePage: function changePage(val) {
      this.$emit("pagination", val);
    },
    handleDelete: function handleDelete(item, route) {
      // console.log('coba', item, route);
      this.$emit("delete-item", item, this.deleteIdKey, route);
    },
    handleDeleteTugas: function handleDeleteTugas(item, route) {
      console.log("coba", item, this.deleteIdKeyTugas, route, this.deleteIdKeyTugas);
      this.$emit("delete-item-tugas", item, this.deleteIdKeyTugas, route);
    },
    // Fungsi search menggunakan lodash debounce
    search: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function (e) {
      this.$emit("search", e);
    }, 500),
    // Menentukan class baris berdasarkan kondisi
    rowClass: function rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.induk_pembelajaran_id) return "table-warning";
    },
    // Menghitung jumlah aspek
    jumlahAspek: function jumlahAspek(array) {
      var total = 0; // Ubah variabel dari "Jumlah" ke "total"
      array.forEach(function (value) {
        total += value.aspek_budaya_kerja_count; // Tambahkan nilai setiap aspek
      });
      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Datatable.vue?vue&type=template&id=6ea2006c":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/progress/Datatable.vue?vue&type=template&id=6ea2006c ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                  searchable: false,
                  clearable: false,
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
              "tbody-tr-class": _vm.rowClass,
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
                key: "cell(actions)",
                fn: function (row) {
                  return [
                    _vm.actions.showDelete
                      ? _c(
                          "b-button",
                          {
                            attrs: { variant: "primary", size: "sm" },
                            on: {
                              click: function ($event) {
                                return _vm.handleAction(row.item)
                              },
                            },
                          },
                          [_vm._v("View")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.actions.showDelete
                      ? _c(
                          "b-button",
                          {
                            attrs: { variant: "danger", size: "sm" },
                            on: {
                              click: function ($event) {
                                return _vm.handleDelete(
                                  row.item.topik_tugas_id,
                                  "id",
                                  _vm.actions.deleteRoute
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    Delete " +
                                _vm._s(row.index + 1) +
                                "\n                "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.actions.showDeleteTugas
                      ? _c(
                          "b-button",
                          {
                            attrs: { variant: "danger", size: "sm" },
                            on: {
                              click: function ($event) {
                                return _vm.handleDeleteTugas(
                                  row.item.tugas_id,
                                  "/tugas/",
                                  _vm.actions.deleteRoute
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    Delete Tugas " +
                                _vm._s(row.index + 1) +
                                "\n                "
                            ),
                          ]
                        )
                      : _vm._e(),
                  ]
                },
              },
              {
                key: "cell(jurusan)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.paket_ukk.jurusan.nama_jurusan) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(kode)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.paket_ukk.nomor_paket) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(nama)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.paket_ukk.nama_paket_id) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(detil_ukk)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "success", size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.detilUkk(row.item.rencana_ukk_id)
                          },
                        },
                      },
                      [_vm._v("Detil")]
                    ),
                  ]
                },
              },
              {
                key: "cell(nama_ekskul)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.nama) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(kelas)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.rombongan_belajar.nama) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(dudi)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.akt_pd.dudi.nama) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(pks)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.akt_pd.judul_akt_pd) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(detil)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "success", size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.getDetilNilai(row.item)
                          },
                        },
                      },
                      [_vm._v("Detil")]
                    ),
                  ]
                },
              },
              {
                key: "cell(detil_pkl)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "success", size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.detilPkl(row.item.pkl_id)
                          },
                        },
                      },
                      [_vm._v("Detil")]
                    ),
                  ]
                },
              },
              {
                key: "cell(detil_p5)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "success", size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.getDetil(row.item.projek.pembelajaran_id)
                          },
                        },
                      },
                      [_vm._v("Detil")]
                    ),
                  ]
                },
              },
              {
                key: "cell(rombel_p5)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.nama) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(koordinator)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.projek.guru.nama_lengkap) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(tema_count)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.projek.tema_count) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(rencana_projek_count)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.projek.rencana_projek_count.length) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(aspek_projek_count)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.jumlahAspek(row.item.projek.rencana_projek_count)
                        ) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(pembina)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(row.item.wali_kelas.nama_lengkap) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(detil_rombongan_belajar_id)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "success", size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.getDetil(
                              row.item.rombongan_belajar_id,
                              row.item.kelas_ekskul.ekstrakurikuler_id
                            )
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
                "\n                Menampilkan " +
                  _vm._s(_vm.meta.from ? _vm.meta.from : 0) +
                  " sampai\n                " +
                  _vm._s(_vm.meta.to) +
                  " dari " +
                  _vm._s(_vm.meta.total) +
                  " entri\n            "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/progress/Datatable.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/progress/Datatable.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Datatable_vue_vue_type_template_id_6ea2006c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datatable.vue?vue&type=template&id=6ea2006c */ "./resources/js/src/views/progress/Datatable.vue?vue&type=template&id=6ea2006c");
/* harmony import */ var _Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue?vue&type=script&lang=js */ "./resources/js/src/views/progress/Datatable.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datatable_vue_vue_type_template_id_6ea2006c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Datatable_vue_vue_type_template_id_6ea2006c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/progress/Datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/progress/Datatable.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/progress/Datatable.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Datatable.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/progress/Datatable.vue?vue&type=template&id=6ea2006c":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/progress/Datatable.vue?vue&type=template&id=6ea2006c ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_6ea2006c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=template&id=6ea2006c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Datatable.vue?vue&type=template&id=6ea2006c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_6ea2006c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_6ea2006c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);