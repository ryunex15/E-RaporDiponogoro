(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _Datatable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Datatable.vue */ "./resources/js/src/views/referensi/gtk/Datatable.vue");
/* harmony import */ var _modal_AddPtk_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../modal/AddPtk.vue */ "./resources/js/src/views/referensi/modal/AddPtk.vue");
/* harmony import */ var _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/eventBus */ "./resources/js/src/@core/utils/eventBus.js");


//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormFile"],
    BTableSimple: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTableSimple"],
    BThead: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BThead"],
    BTbody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTbody"],
    BTh: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTh"],
    BTr: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTr"],
    BTd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTd"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BOverlay"],
    AddPtk: _modal_AddPtk_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Datatable: _Datatable_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isAsesor: true,
      simpan: false,
      loading: false,
      isBusy: true,
      fields: [{
        key: 'nama_lengkap',
        label: 'Nama',
        sortable: true,
        thClass: 'text-center'
      }, {
        key: 'jenis_kelamin',
        label: 'L/P',
        sortable: true,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'ttl',
        label: 'Tempat, Tanggal Lahir',
        sortable: false,
        thClass: 'text-center'
      }, {
        key: 'email',
        label: 'Email',
        sortable: true,
        thClass: 'text-center'
      }, {
        key: 'actions',
        label: 'Aksi',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }],
      items: [],
      meta: {},
      current_page: 1,
      //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10,
      //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'nama',
      //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false //ASCEDING
    };
  },
  created: function created() {
    this.loadPostsData();
    _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_5__["default"].$on('modal-asesor', this.handleEvent);
  },
  methods: {
    handleEvent: function handleEvent() {
      _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_5__["default"].$emit('open-modal-ptk');
    },
    handleReload: function handleReload() {
      this.loadPostsData();
    },
    loadPostsData: function loadPostsData() {
      var _this = this;
      this.isBusy = true;
      //let current_page = this.search == '' ? this.current_page : this.current_page != 1 ? 1 : this.current_page
      var current_page = this.current_page; //this.search == '' ? this.current_page : 1
      //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN
      this.$http.get('/guru', {
        params: {
          jenis_gtk: 'asesor',
          user_id: this.user.user_id,
          sekolah_id: this.user.sekolah_id,
          semester_id: this.user.semester.semester_id,
          periode_aktif: this.user.semester.nama,
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: this.sortByDesc ? 'DESC' : 'ASC'
        }
      }).then(function (response) {
        //this.items = response.data.all_pd
        var getData = response.data.data;
        _this.isBusy = false;
        _this.items = getData.data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
        //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
        _this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
          role_id: _this.role_id,
          roles: response.data.roles
        };
      });
    },
    //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
    handlePerPage: function handlePerPage(val) {
      this.per_page = val; //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT
      this.loadPostsData(); //DAN REQUEST DATA BARU KE SERVER
    },
    //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
    handlePagination: function handlePagination(val) {
      this.current_page = val; //SET CURRENT PAGE YANG AKTIF
      this.loadPostsData();
    },
    //JIKA ADA DATA PENCARIAN
    handleSearch: function handleSearch(val) {
      this.search = val; //SET VALUE PENCARIAN KE VARIABLE SEARCH
      this.loadPostsData(); //REQUEST DATA BARU
    },
    //JIKA ADA EMIT SORT
    handleSort: function handleSort(val) {
      if (val.sortBy) {
        this.sortBy = val.sortBy;
        this.sortByDesc = val.sortDesc;
        this.loadPostsData(); //DAN LOAD DATA BARU BERDASARKAN SORT
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=template&id=56650564":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=template&id=56650564 ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    [
      _c("datatable", {
        attrs: {
          isAsesor: _vm.isAsesor,
          isBusy: _vm.isBusy,
          items: _vm.items,
          fields: _vm.fields,
          meta: _vm.meta,
        },
        on: {
          per_page: _vm.handlePerPage,
          pagination: _vm.handlePagination,
          search: _vm.handleSearch,
          sort: _vm.handleSort,
        },
      }),
      _vm._v(" "),
      _c("add-ptk", {
        attrs: {
          title: "Tambah Data Asesor",
          link_excel: "/excel/format_excel_asesor.xlsx",
          jenis_gtk: "asesor",
        },
        on: { reload: _vm.handleReload },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Asesor.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Asesor.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asesor_vue_vue_type_template_id_56650564__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asesor.vue?vue&type=template&id=56650564 */ "./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=template&id=56650564");
/* harmony import */ var _Asesor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asesor.vue?vue&type=script&lang=js */ "./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Asesor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Asesor_vue_vue_type_template_id_56650564__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Asesor_vue_vue_type_template_id_56650564__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/referensi/gtk/Asesor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asesor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asesor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asesor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=template&id=56650564":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=template&id=56650564 ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Asesor_vue_vue_type_template_id_56650564__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asesor.vue?vue&type=template&id=56650564 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/gtk/Asesor.vue?vue&type=template&id=56650564");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Asesor_vue_vue_type_template_id_56650564__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Asesor_vue_vue_type_template_id_56650564__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);