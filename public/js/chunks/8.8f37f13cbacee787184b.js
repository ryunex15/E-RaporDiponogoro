(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BOverlay"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BForm"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormFile"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BTableSimple: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTableSimple"],
    BThead: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BThead"],
    BTbody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTbody"],
    BTh: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTh"],
    BTr: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTr"],
    BTd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTd"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"]
  },
  props: {
    title: {
      required: true
    },
    link_excel: {
      required: true
    },
    jenis_gtk: {
      required: true
    }
  },
  data: function data() {
    return {
      simpan: false,
      addPtk: false,
      loading: false,
      form: {
        sekolah_id: '',
        nama: {},
        nuptk: {},
        nip: {},
        nik: {},
        jenis_kelamin: {},
        tempat_lahir: {},
        tanggal_lahir: {},
        agama: {},
        alamat_jalan: {},
        rt: {},
        rw: {},
        desa_kelurahan: {},
        kecamatan: {},
        kodepos: {},
        telp_hp: {},
        email: {}
      },
      state: {
        nama: null,
        nik: null,
        tanggal_lahir: null,
        agama: null,
        email: null,
        jenis_kelamin: null
      },
      feedback: {
        nama: '',
        nik: '',
        tanggal_lahir: '',
        agama: '',
        email: '',
        jenis_kelamin: ''
      },
      file: null,
      fileState: null,
      feedback_file: '',
      imported_data: [],
      data_status: [{
        value: null,
        text: '== Pilih Status =='
      }, {
        value: '1',
        text: 'Aktif'
      }, {
        value: '0',
        text: 'Tidak Aktif'
      }]
    };
  },
  created: function created() {
    this.form.tahun_pelajaran = this.user.semester.nama;
    this.form.jenis_gtk = this.jenis_gtk;
    this.form.sekolah_id = this.user.sekolah_id;
    _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('open-modal-ptk', this.handleEvent);
  },
  methods: {
    handleEvent: function handleEvent() {
      this.addPtk = true;
    },
    hideModal: function hideModal() {
      this.addPtk = false;
      this.resetModal();
    },
    resetModal: function resetModal() {
      /*this.form.sekolah_id = ''
      this.form.nama = {}
      this.form.nuptk = {}
      this.form.nip = {}
      this.form.nik = {}
      this.form.jenis_kelamin = {}
      this.form.tempat_lahir = {}
      this.form.tanggal_lahir = {}
      this.form.agama = {}
      this.form.alamat_jalan = {}
      this.form.rt = {}
      this.form.rw = {}
      this.form.desa_kelurahan = {}
      this.form.kecamatan = {}
      this.form.kodepos = {}
      this.form.telp_hp = {}
      this.form.email = {}
      this.state.nama = null
      this.state.nik = null
      this.state.tanggal_lahir = null
      this.state.agama = null
      this.state.email = null
      this.state.jenis_kelamin = null
      this.feedback.nama = ''
      this.feedback.nik = ''
      this.feedback.tanggal_lahir = ''
      this.feedback.agama = ''
      this.feedback.email = ''
      this.feedback.jenis_kelamin = ''*/
    },
    onFileChange: function onFileChange(e) {
      var _this = this;
      //this.$emit('loading', true)
      //this.$emit('simpan', false)
      this.loading = true;
      this.simpan = false;
      this.file = e.target.files[0];
      var data = new FormData();
      data.append('file_excel', this.file ? this.file : '');
      this.$http.post('/guru/upload', data).then(function (response) {
        //this.$emit('loading', false)
        _this.loading = false;
        var data = response.data;
        _this.fileState = null;
        _this.feedback_file = '';
        if (data.errors) {
          _this.fileState = data.errors.file_excel ? false : null;
          _this.feedback_file = data.errors.file_excel ? data.errors.file_excel.join(', ') : '';
        } else {
          //this.$emit('simpan', true)
          _this.simpan = true;
          _this.imported_data = data.imported_data;
          var nama = {};
          var nuptk = {};
          var nip = {};
          var nik = {};
          var jenis_kelamin = {};
          var tempat_lahir = {};
          var tanggal_lahir = {};
          var agama = {};
          var alamat_jalan = {};
          var rt = {};
          var rw = {};
          var desa_kelurahan = {};
          var kecamatan = {};
          var kodepos = {};
          var telp_hp = {};
          var email = {};
          var nama_state = {};
          var nik_state = {};
          var jenis_kelamin_state = {};
          var tempat_lahir_state = {};
          var tanggal_lahir_state = {};
          var agama_state = {};
          var email_state = {};
          var nama_feedback = {};
          var nik_feedback = {};
          var jenis_kelamin_feedback = {};
          var tempat_lahir_feedback = {};
          var tanggal_lahir_feedback = {};
          var agama_feedback = {};
          var email_feedback = {};
          _this.imported_data.forEach(function (value, key) {
            nama[value.no] = value.nama;
            nuptk[value.no] = value.nuptk;
            nip[value.no] = value.nip;
            nik[value.no] = value.nik;
            jenis_kelamin[value.no] = value.jenis_kelamin;
            tempat_lahir[value.no] = value.tempat_lahir;
            tanggal_lahir[value.no] = value.tanggal_lahir;
            agama[value.no] = value.agama;
            alamat_jalan[value.no] = value.alamat_jalan;
            rt[value.no] = value.rt;
            rw[value.no] = value.rw;
            desa_kelurahan[value.no] = value.desa_kelurahan;
            kecamatan[value.no] = value.kecamatan;
            kodepos[value.no] = value.kodepos;
            telp_hp[value.no] = value.telp_hp;
            email[value.no] = value.email;
            nama_state[value.no] = null;
            nik_state[value.no] = null;
            jenis_kelamin_state[value.no] = null;
            tempat_lahir_state[value.no] = null;
            tanggal_lahir_state[value.no] = null;
            agama_state[value.no] = null;
            email_state[value.no] = null;
            nama_feedback[value.no] = '';
            nik_feedback[value.no] = '';
            jenis_kelamin_feedback[value.no] = '';
            tanggal_lahir_feedback[value.no] = '';
            tanggal_lahir_feedback[value.no] = '';
            agama_feedback[value.no] = '';
            email_feedback[value.no] = '';
          });
          _this.form.nama = nama;
          _this.form.nuptk = nuptk;
          _this.form.nip = nip;
          _this.form.nik = nik;
          _this.form.jenis_kelamin = jenis_kelamin;
          _this.form.tempat_lahir = tempat_lahir;
          _this.form.tanggal_lahir = tanggal_lahir;
          _this.form.agama = agama;
          _this.form.alamat_jalan = alamat_jalan;
          _this.form.rt = rt;
          _this.form.rw = rw;
          _this.form.desa_kelurahan = desa_kelurahan;
          _this.form.kecamatan = kecamatan;
          _this.form.kodepos = kodepos;
          _this.form.telp_hp = telp_hp;
          _this.form.email = email;
          _this.state.nama = nama_state;
          _this.state.nik = nik_state;
          _this.state.jenis_kelamin = jenis_kelamin_state;
          _this.state.tanggal_lahir = tanggal_lahir_state;
          _this.state.tempat_lahir = tempat_lahir_state;
          _this.state.agama = agama_state;
          _this.state.email = email_state;
          _this.feedback.nama = nama_feedback;
          _this.feedback.nik = nik_feedback;
          _this.feedback.jenis_kelamin = jenis_kelamin_feedback;
          _this.feedback.tempat_lahir = tempat_lahir_feedback;
          _this.feedback.tanggal_lahir = tanggal_lahir_feedback;
          _this.feedback.agama = agama_feedback;
          _this.feedback.email = email_feedback;
        }
      })["catch"](function (error) {
        console.log(error);
        _this.fileState = false;
        _this.feedback_file = 'Isian salah. Silahkan periksa kembali!!!';
      });
    },
    handleOk: function handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;
      this.loading = true;
      this.$http.post('/guru/simpan', this.form).then(function (response) {
        _this2.loading = false;
        var data = response.data;
        if (data.errors) {
          var nama_state = {};
          var nik_state = {};
          var tanggal_lahir_state = {};
          var agama_state = {};
          var email_state = {};
          var jenis_kelamin_state = {};
          var tempat_lahir_state = {};
          var nama_feedback = {};
          var nik_feedback = {};
          var jenis_kelamin_feedback = {};
          var tempat_lahir_feedback = {};
          var tanggal_lahir_feedback = {};
          var agama_feedback = {};
          var email_feedback = {};
          _this2.imported_data.forEach(function (value, key) {
            nama_state[value.no] = data.errors['nama.' + value.no] ? false : null;
            nik_state[value.no] = data.errors['nik.' + value.no] ? false : null;
            jenis_kelamin_state[value.no] = data.errors['jenis_kelamin.' + value.no] ? false : null;
            tempat_lahir_state[value.no] = data.errors['tempat_lahir.' + value.no] ? false : null;
            tanggal_lahir_state[value.no] = data.errors['tanggal_lahir.' + value.no] ? false : null;
            agama_state[value.no] = data.errors['agama.' + value.no] ? false : null;
            email_state[value.no] = data.errors['email.' + value.no] ? false : null;
            nama_feedback[value.no] = data.errors['nama.' + value.no] ? data.errors['nama.' + value.no].join(', ') : '';
            nik_feedback[value.no] = data.errors['nik.' + value.no] ? data.errors['nik.' + value.no].join(', ') : '';
            jenis_kelamin_feedback[value.no] = data.errors['jenis_kelamin.' + value.no] ? data.errors['jenis_kelamin.' + value.no].join(', ') : '';
            tempat_lahir_feedback[value.no] = data.errors['tempat_lahir.' + value.no] ? data.errors['tempat_lahir.' + value.no].join(', ') : '';
            tanggal_lahir_feedback[value.no] = data.errors['tanggal_lahir.' + value.no] ? data.errors['tanggal_lahir.' + value.no].join(', ') : '';
            agama_feedback[value.no] = data.errors['agama.' + value.no] ? data.errors['agama.' + value.no].join(', ') : '';
            email_feedback[value.no] = data.errors['email.' + value.no] ? data.errors['email.' + value.no].join(', ') : '';
          });
          _this2.state.nama = nama_state;
          _this2.state.nik = nik_state;
          _this2.state.jenis_kelamin = jenis_kelamin_state;
          _this2.state.tanggal_lahir = tanggal_lahir_state;
          _this2.state.tempat_lahir = tempat_lahir_state;
          _this2.state.agama = agama_state;
          _this2.state.email = email_state;
          _this2.feedback.nama = nama_feedback;
          _this2.feedback.nik = nik_feedback;
          _this2.feedback.jenis_kelamin = jenis_kelamin_feedback;
          _this2.feedback.tempat_lahir = tempat_lahir_feedback;
          _this2.feedback.tanggal_lahir = tanggal_lahir_feedback;
          _this2.feedback.agama = agama_feedback;
          _this2.feedback.email = email_feedback;
        } else {
          _this2.$swal({
            icon: data.icon,
            title: data.title,
            text: data.text,
            customClass: {
              confirmButton: 'btn btn-success'
            }
          }).then(function (result) {
            _this2.hideModal();
            _this2.$emit('reload');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=template&id=75449aa2":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=template&id=75449aa2 ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: {
        size: "xl",
        title: _vm.title,
        "ok-title": "Simpan",
        "cancel-title": "Batal",
      },
      on: { show: _vm.resetModal, hidden: _vm.resetModal, ok: _vm.handleOk },
      scopedSlots: _vm._u([
        {
          key: "modal-footer",
          fn: function (ref) {
            var ok = ref.ok
            var cancel = ref.cancel
            return [
              _c(
                "b-overlay",
                {
                  attrs: {
                    show: _vm.loading,
                    rounded: "",
                    opacity: "0.6",
                    size: "sm",
                    "spinner-variant": "secondary",
                  },
                },
                [
                  _c(
                    "b-button",
                    {
                      on: {
                        click: function ($event) {
                          return cancel()
                        },
                      },
                    },
                    [_vm._v("Tutup")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.simpan
                ? _c(
                    "b-overlay",
                    {
                      attrs: {
                        show: _vm.loading,
                        rounded: "",
                        opacity: "0.6",
                        size: "sm",
                        "spinner-variant": "primary",
                      },
                    },
                    [
                      _vm.simpan
                        ? _c(
                            "b-button",
                            {
                              attrs: { variant: "primary" },
                              on: {
                                click: function ($event) {
                                  return ok()
                                },
                              },
                            },
                            [_vm._v("Simpan")]
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
            ]
          },
        },
      ]),
      model: {
        value: _vm.addPtk,
        callback: function ($$v) {
          _vm.addPtk = $$v
        },
        expression: "addPtk",
      },
    },
    [
      _c(
        "b-overlay",
        {
          attrs: {
            show: _vm.loading,
            rounded: "",
            opacity: "0.6",
            size: "lg",
            "spinner-variant": "danger",
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "8" } },
                [
                  _c("b-form-file", {
                    attrs: {
                      placeholder: "Choose a file or drop it here...",
                      "drop-placeholder": "Drop file here...",
                      state: _vm.fileState,
                    },
                    on: { change: _vm.onFileChange },
                    model: {
                      value: _vm.file,
                      callback: function ($$v) {
                        _vm.file = $$v
                      },
                      expression: "file",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.feedback_file,
                          expression: "feedback_file",
                        },
                      ],
                      staticClass: "text-danger",
                    },
                    [_vm._v(_vm._s(_vm.feedback_file))]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "b-button",
                    {
                      attrs: {
                        block: "",
                        variant: "warning",
                        href: _vm.link_excel,
                        target: "_blank",
                      },
                    },
                    [_vm._v("UNDUH TEMPLATE")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.imported_data.length
            ? _c(
                "b-row",
                { staticClass: "mt-2" },
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-table-simple",
                        { attrs: { hover: "", bordered: "", responsive: "" } },
                        [
                          _c(
                            "b-thead",
                            [
                              _c(
                                "b-tr",
                                [
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("No"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Nama"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("NUPTK"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("NIP"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("NIK"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Jenis Kelamin"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Tempat Lahir"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Tanggal Lahir"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Agama"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Alamat Jalan"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("RT"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("RW"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Desa/Kelurahan"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Kecamatan"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Kodepos"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Telp/HP"),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-th", { staticClass: "text-center" }, [
                                    _vm._v("Email"),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tbody",
                            _vm._l(_vm.imported_data, function (item, index) {
                              return _c(
                                "b-tr",
                                { key: item.no },
                                [
                                  _c("b-td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.no)),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.nama[item.no],
                                            state: _vm.state.nama[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.nama[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.nama,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.nama[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.nuptk[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.nuptk,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.nuptk[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.nip[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.nip,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.nip[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.nik[item.no],
                                            state: _vm.state.nik[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.nik[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.nik,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.nik[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.jenis_kelamin[
                                                item.no
                                              ],
                                            state:
                                              _vm.state.jenis_kelamin[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value:
                                                _vm.form.jenis_kelamin[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.jenis_kelamin,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.jenis_kelamin[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.tempat_lahir[
                                                item.no
                                              ],
                                            state:
                                              _vm.state.tempat_lahir[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value:
                                                _vm.form.tempat_lahir[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.tempat_lahir,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.tempat_lahir[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.tanggal_lahir[
                                                item.no
                                              ],
                                            state:
                                              _vm.state.tanggal_lahir[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value:
                                                _vm.form.tanggal_lahir[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.tanggal_lahir,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.tanggal_lahir[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.agama[item.no],
                                            state: _vm.state.agama[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.agama[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.agama,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.agama[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value:
                                                _vm.form.alamat_jalan[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.alamat_jalan,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.alamat_jalan[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.rt[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.rt,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.rt[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.rw[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.rw,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.rw[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value:
                                                _vm.form.desa_kelurahan[
                                                  item.no
                                                ],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.desa_kelurahan,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.desa_kelurahan[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value:
                                                _vm.form.kecamatan[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.kecamatan,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.kecamatan[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.kodepos[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.kodepos,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.kodepos[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.telp_hp[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.telp_hp,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.telp_hp[item.no]",
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
                                    "b-td",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.feedback.email[item.no],
                                            state: _vm.state.email[item.no],
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            model: {
                                              value: _vm.form.email[item.no],
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form.email,
                                                  item.no,
                                                  $$v
                                                )
                                              },
                                              expression: "form.email[item.no]",
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
                            }),
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

/***/ "./resources/js/src/views/referensi/modal/AddPtk.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/referensi/modal/AddPtk.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPtk_vue_vue_type_template_id_75449aa2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPtk.vue?vue&type=template&id=75449aa2 */ "./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=template&id=75449aa2");
/* harmony import */ var _AddPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPtk.vue?vue&type=script&lang=js */ "./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPtk_vue_vue_type_template_id_75449aa2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPtk_vue_vue_type_template_id_75449aa2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/referensi/modal/AddPtk.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPtk.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPtk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=template&id=75449aa2":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=template&id=75449aa2 ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPtk_vue_vue_type_template_id_75449aa2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPtk.vue?vue&type=template&id=75449aa2 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/referensi/modal/AddPtk.vue?vue&type=template&id=75449aa2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPtk_vue_vue_type_template_id_75449aa2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPtk_vue_vue_type_template_id_75449aa2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);