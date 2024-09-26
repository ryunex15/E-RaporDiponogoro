(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Penilaian.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/progress/Penilaian.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _Datatable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Datatable.vue */ "./resources/js/src/views/progress/Datatable.vue");
/* harmony import */ var _components_modal_dashboard_DetilNilai_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/modal/dashboard/DetilNilai.vue */ "./resources/js/src/views/components/modal/dashboard/DetilNilai.vue");
/* harmony import */ var _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/eventBus */ "./resources/js/src/@core/utils/eventBus.js");


//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BSpinner"],
    Datatable: _Datatable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    DetilNilai: _components_modal_dashboard_DetilNilai_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isBusy: true,
      loading: false,
      periode_aktif: '',
      fields: [{
        key: 'rombel',
        label: 'Rombel',
        sortable: false,
        thClass: 'text-center'
      }, {
        key: 'nama_mata_pelajaran',
        label: 'Mata Pelajaran',
        sortable: false,
        thClass: 'text-center'
      }, {
        key: 'guru',
        label: 'Guru Mata Pelajaran',
        sortable: false,
        thClass: 'text-center'
      }, {
        key: 'pd',
        label: 'Jumlah Peserta Didik',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'pd_dinilai',
        label: 'Jml Peserta Didik Dinilai',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'detil',
        label: 'Detil',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }],
      items: [],
      meta: {},
      current_page: 1,
      per_page: 10,
      search: '',
      sortBy: 'mata_pelajaran_id',
      sortByDesc: false,
      data_siswa: [],
      merdeka: false,
      title: '',
      sub_mapel: 0,
      detil_meta: {}
    };
  },
  created: function created() {
    this.periode_aktif = this.user.semester.nama;
    this.loadPostsData();
  },
  methods: {
    loadPostsData: function loadPostsData() {
      var _this = this;
      this.isBusy = true;
      var current_page = this.current_page;
      this.$http.get('/progress/penilaian', {
        params: {
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
        var getData = response.data.data;
        _this.isBusy = false;
        _this.items = getData.data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
        //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
        _this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to
        };
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handlePerPage: function handlePerPage(val) {
      this.per_page = val;
      this.loadPostsData();
    },
    handlePagination: function handlePagination(val) {
      this.current_page = val;
      this.loadPostsData();
    },
    handleSearch: function handleSearch(val) {
      this.search = val;
      this.loadPostsData();
    },
    handleSort: function handleSort(val) {
      if (val.sortBy) {
        this.sortBy = val.sortBy;
        this.sortByDesc = val.sortDesc;
        this.loadPostsData();
      }
    },
    detil: function detil(item) {
      var _this2 = this;
      this.detil_meta = {
        kkm: item.kkm,
        kelompok_id: item.kelompok_id,
        semester_id: item.semester_id
      };
      this.loading = true;
      this.$http.post('/progress/detil', {
        aksi: 'pembelajaran',
        pembelajaran_id: item.pembelajaran_id,
        rombongan_belajar_id: item.rombongan_belajar_id
      }).then(function (response) {
        _this2.loading = false;
        var getData = response.data;
        _this2.title = getData.title;
        _this2.data_siswa = getData.data_siswa;
        _this2.merdeka = getData.merdeka;
        _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_5__["default"].$emit('open-modal-detil-nilai', {
          data: {
            rombongan_belajar_id: item.rombongan_belajar_id,
            pembelajaran_id: item.pembelajaran_id
          }
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    HandleDetil: function HandleDetil(pembelajaran_id) {
      this.detil(pembelajaran_id);
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Penilaian.vue?vue&type=template&id=c344304e":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/progress/Penilaian.vue?vue&type=template&id=c344304e ***!
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
    "b-card",
    {
      attrs: {
        "no-body": "",
        title: "Progres Penilaian Tahun Pelajaran " + _vm.periode_aktif,
      },
    },
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
                _c("datatable", {
                  attrs: {
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
                    detil: _vm.HandleDetil,
                  },
                }),
              ],
              1
            ),
      ]),
      _vm._v(" "),
      _c("detil-nilai", {
        attrs: {
          title: _vm.title,
          data_siswa: _vm.data_siswa,
          merdeka: _vm.merdeka,
          sub_mapel: _vm.sub_mapel,
          meta: _vm.detil_meta,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter, get_kkm, konversi_huruf, mapel_agama, filter_pembelajaran_agama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_kkm", function() { return get_kkm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "konversi_huruf", function() { return konversi_huruf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapel_agama", function() { return mapel_agama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter_pembelajaran_agama", function() { return filter_pembelajaran_agama; });
/* harmony import */ var C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");








// eslint-disable-next-line object-curly-newline

var isObject = function isObject(obj) {
  return Object(C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return /* eslint-disable operator-linebreak */(
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};
var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
};

// ? Light and Dark variant is not included
// prettier-ignore
var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_7__["default"].resolve(route),
    resolvedRoute = _router$resolve.route;
  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_7__["default"].currentRoute.path;
};

// Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1
var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_8__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
var get_kkm = function get_kkm(kelompok_id, kkm, semester_id) {
  if (kkm) {
    return kkm;
  }
  var tahun = check_2018(semester_id);
  var new_kkm = kkm;
  if (tahun) {
    var produktif = [4, 5, 9, 10, 13];
    var non_produktif = [1, 2, 3, 6, 7, 8, 11, 12, 99];
    if (produktif.includes(kelompok_id)) {
      65, Object(C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_0__["default"])("new_kkm");
    } else if (non_produktif.includes(kelompok_id)) {
      60, Object(C_laragon_www_E_RaporDiponogoro_done_node_modules_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_0__["default"])("new_kkm");
    }
  }
  return new_kkm;
};
var check_2018 = function check_2018(semester_id) {
  var tahun = semester_id.substr(0, 4);
  if (tahun >= 2018) {
    return true;
  } else {
    return false;
  }
};
var predikat = function predikat(kkm, nilai) {
  var produktif = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  //console.log('nilai', nilai);
  //nilai = nilai.toUpperCase();
  var result = [];
  if (produktif) {
    result = {
      'A+': 100,
      'A': 94,
      'A-': 89,
      'B+': 84,
      'B': 79,
      'B-': 74,
      'C': 69,
      'D': 64
    };
  } else {
    result = {
      'A+': 100,
      'A': 94,
      'A-': 89,
      'B+': 84,
      'B': 79,
      'B-': 74,
      'C': 69,
      'D': 59
    };
  }
  if (result[nilai] > 100) result[nilai] = 100;
  return result[nilai];
};
var konversi_huruf = function konversi_huruf(kkm, nilai) {
  var produktif = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var semester_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var predikat_str = null;
  if (check_2018(semester_id)) {
    var a = predikat(kkm, 'A') + 1;
    var a_min = predikat(kkm, 'A-') + 1;
    var b_plus = predikat(kkm, 'B+') + 1;
    var _b = predikat(kkm, 'B') + 1;
    var b_min = predikat(kkm, 'B-') + 1;
    var _c = predikat(kkm, 'C') + 1;
    var _d = predikat(kkm, 'D', produktif) + 1;
    if (nilai == 0) {
      predikat_str = '-';
    } else if (nilai >= a) {
      //settings->a_min){ //86
      predikat_str = 'A+';
    } else if (nilai >= a_min) {
      //settings->a_min){ //86
      predikat_str = 'A';
    } else if (nilai >= b_plus) {
      //settings->a_min){ //86
      predikat_str = 'A-';
    } else if (nilai >= _b) {
      //settings->a_min){ //86
      predikat_str = 'B+';
    } else if (nilai >= b_min) {
      //settings->a_min){ //86
      predikat_str = 'B';
    } else if (nilai >= _c) {
      //settings->a_min){ //86
      predikat_str = 'B-';
    } else if (nilai >= _d) {
      //settings->a_min){ //86
      predikat_str = 'C';
    } else if (nilai < _d) {
      //settings->a_min){ //86
      predikat_str = 'D';
    }
  } else {
    b = predikat(kkm, 'b') + 1;
    c = predikat(kkm, 'c') + 1;
    d = predikat(kkm, 'd') + 1;
    if (nilai == 0) {
      predikat_str = '-';
      sikap = '-';
      sikap_full = '-';
    } else if (nilai >= b) {
      //settings->a_min){ //86
      predikat_str = 'A';
      sikap = 'SB';
      sikap_full = 'Sangat Baik';
    } else if (nilai >= c) {
      //71
      predikat_str = 'B';
      sikap = 'B';
      sikap_full = 'Baik';
    } else if (nilai >= d) {
      //56
      predikat_str = 'C';
      sikap = 'C';
      sikap_full = 'Cukup';
    } else if (nilai < d) {
      //56
      predikat_str = 'D';
      sikap = 'K';
      sikap_full = 'Kurang';
    }
  }
  return predikat_str;
};
var mapel_agama = function mapel_agama() {
  return [100014000, 100014140, 100015000, 100015010, 100016000, 100016010, 109011000, 109011010, 100011000, 100011070, 100013000, 100013010, 100012000, 100012050];
};
var filter_pembelajaran_agama = function filter_pembelajaran_agama(agama_siswa, nama_agama) {
  //let result = text.replace("Microsoft", "W3Schools");
  var new_nama = nama_agama;
  new_nama = new_nama.replace('Budha', 'Buddha');
  new_nama = new_nama.replace('Budha', 'Buddha');
  new_nama = new_nama.replace('Pendidikan Agama', '');
  new_nama = new_nama.replace('dan Budi Pekerti', '');
  new_nama = new_nama.replace('Pendidikan Kepercayaan', '');
  new_nama = new_nama.replace('terhadap', 'kpd');
  new_nama = new_nama.replace('KongHuChu', 'Konghuchu');
  new_nama = new_nama.replace('Kong Hu Chu', 'Konghuchu');
  new_nama = new_nama.trim();
  var new_agama = agama_siswa;
  new_agama = new_agama.replace('KongHuChu', 'Konghuchu');
  new_agama = new_agama.replace('Kong Hu Chu', 'Konghuchu');
  new_agama = new_agama.replace('Kepercayaan ', '');
  return new_nama === new_agama;
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }

//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })

//   return a
// }

/***/ }),

/***/ "./resources/js/src/views/progress/Penilaian.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/progress/Penilaian.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Penilaian_vue_vue_type_template_id_c344304e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Penilaian.vue?vue&type=template&id=c344304e */ "./resources/js/src/views/progress/Penilaian.vue?vue&type=template&id=c344304e");
/* harmony import */ var _Penilaian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Penilaian.vue?vue&type=script&lang=js */ "./resources/js/src/views/progress/Penilaian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Penilaian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Penilaian_vue_vue_type_template_id_c344304e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Penilaian_vue_vue_type_template_id_c344304e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/progress/Penilaian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/progress/Penilaian.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/progress/Penilaian.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penilaian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Penilaian.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Penilaian.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penilaian_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/progress/Penilaian.vue?vue&type=template&id=c344304e":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/progress/Penilaian.vue?vue&type=template&id=c344304e ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penilaian_vue_vue_type_template_id_c344304e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Penilaian.vue?vue&type=template&id=c344304e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/progress/Penilaian.vue?vue&type=template&id=c344304e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penilaian_vue_vue_type_template_id_c344304e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penilaian_vue_vue_type_template_id_c344304e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);