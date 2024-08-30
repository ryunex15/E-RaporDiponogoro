<template>
<div>
    <b-card no-body>
        <b-card-body>
            <div v-if="isBusy" class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
            <div v-else>
                <h4 class="card-title d-flex justify-content-between align-items-center">
                    Mata Pelajaran yang diampu di Tahun Pelajaran
                    {{ semester }}
                    <button type="button" class="btn btn-success ms-3" @click="showModal = true">
                        Tambah Pembelajaran
                    </button>
                </h4>
                <b-table-simple bordered responsive>
                    <b-thead>
                        <b-tr>
                            <b-th class="text-center">No</b-th>
                            <b-th class="text-center">Mata Pelajaran</b-th>
                            <b-th class="text-center">Rombel</b-th>
                            <b-th class="text-center">Wali Kelas</b-th>
                            <b-th class="text-center">Jml Peserta Didik</b-th>
                            <b-th class="text-center">Jml Peserta Didik Dinilai</b-th>
                            <b-th class="text-center">Detil Siswa</b-th>
                            <b-th class="text-center">Detil Kelas</b-th>

                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <template v-if="pembelajaran.length">
                            <template v-for="(item, index) in pembelajaran">
                                <b-tr :variant="
                                            item.induk_pembelajaran_id
                                                ? 'warning'
                                                : null
                                        ">
                                    <b-td class="text-center">{{
                                            item.no
                                        }}</b-td>
                                    <b-td>{{
                                            item.nama_mata_pelajaran
                                        }}</b-td>
                                    <b-td>{{ item.rombel }}</b-td>
                                    <b-td>{{ item.wali_kelas }}</b-td>
                                    <template v-if="
                                                item.mata_pelajaran_id ===
                                                800001000
                                            ">
                                        <b-td class="text-center">{{
                                                item.pd_pkl_count
                                            }}</b-td>
                                        <b-td class="text-center">{{
                                                item.pd_pkl_dinilai
                                            }}</b-td>
                                    </template>
                                    <template v-else>
                                        <b-td class="text-center">{{
                                                item.pd
                                            }}</b-td>
                                        <b-td class="text-center">{{
                                                item.pd_dinilai
                                            }}</b-td>
                                    </template>
                                    <b-td class="text-center">
                                        <b-button variant="success" size="sm" @click="detil(item)">
                                            Detil Siswa
                                        </b-button>
                                    </b-td>
                                    <b-td class="text-center">
                                      <router-link to="/referensi/kelas-pembelajaran/kelas">
                                        <b-button variant="success" size="sm">
                                            Detil Kelas
                                        </b-button>
                                      </router-link>
                                    </b-td>
                                </b-tr>
                            </template>
                        </template>
                        <template v-else>
                            <b-tr>
                                <b-td class="text-center" colspan="7">Tidak ada data untuk ditampilkan</b-td>
                            </b-tr>
                        </template>
                    </b-tbody>
                </b-table-simple>
            </div>
        </b-card-body>
        <detil-nilai :title="title" :data_siswa="data_siswa" :merdeka="merdeka" :is_ppa="is_ppa" :sub_mapel="sub_mapel" :induk="induk" :meta="meta" @detil="HandleDetil"></detil-nilai>
    </b-card>
    <dashboard-walas v-if="hasRole('wali')" @detil="HandleDetil"></dashboard-walas>

    <!-- Modal untuk Tambah Pembelajaran -->
    <b-modal v-model="showModal" title="Tambah Pembelajaran">
        <form @submit.prevent="submitPembelajaran">
            <!-- Tabel Input Topik -->
            <b-form-group label="Topik Pembelajaran" label-for="topik-pembelajaran">
                <b-form-input id="topik-pembelajaran" v-model="newPembelajaran.topik" required></b-form-input>
            </b-form-group>

            <!-- Input Judul Tugas -->
            <b-form-group label="Judul Pembelajaran" label-for="judul-pembelajaran">
                <b-form-input id="judul-pembelajaran" v-model="newPembelajaran.nama_mata_pelajaran" required></b-form-input>
            </b-form-group>

            <!-- Input Deskripsi -->
            <b-form-group label="Deskripsi Pembelajaran" label-for="deskripsi-pembelajaran">
                <b-form-textarea id="deskripsi-pembelajaran" v-model="newPembelajaran.deskripsi" rows="3" required></b-form-textarea>
            </b-form-group>

            <!-- Input Batas Penyerahan -->
            <b-form-group label="Batas Penyerahan Tugas" label-for="batas-penyerahan">
                <div class="mb-1">
                    <b-form-datepicker id="batas-penyerahan" v-model="newPembelajaran.deadlineDate" :locale="'id'" :state="!newPembelajaran.deadlineDate ? null : true" placeholder="Pilih Tanggal" required></b-form-datepicker>
                </div>
                <div>
                    <b-form-timepicker id="batas-penyerahan-time" v-model="newPembelajaran.deadlineTime" :locale="'id'" :state="!newPembelajaran.deadlineTime ? null : true" placeholder="Pilih Jam" required></b-form-timepicker>
                </div>
            </b-form-group>

            <!-- Input Upload File -->
            <b-form-group label="Upload File" label-for="upload-file">
                <b-form-file id="upload-file" v-model="newPembelajaran.file" required></b-form-file>
            </b-form-group>

            <div class="d-flex justify-content-end">
                <b-button type="submit" variant="success">
                    Tambahkan Tugas
                </b-button>
            </div>
        </form>
    </b-modal>
</div>
</template>

<script>
import {
    BCard,
    BCardBody,
    BSpinner,
    BTableSimple,
    BTbody,
    BThead,
    BTr,
    BTd,
    BTh,
    BButton,
    BOverlay,
    BModal,
    BForm,
    BFormGroup,
    BFormInput,
    BFormFile,
    BFormDatepicker,
    BFormTimepicker,
    BFormTextarea,
} from "bootstrap-vue";
import DashboardWalas from "./DashboardWalas.vue";
import DetilNilai from "./../components/modal/dashboard/DetilNilai.vue";
import eventBus from "@core/utils/eventBus";

export default {
    components: {
        BCard,
        BCardBody,
        BSpinner,
        BTableSimple,
        BTbody,
        BThead,
        BTr,
        BTd,
        BTh,
        BButton,
        BOverlay,
        BModal,
        BForm,
        BFormGroup,
        BFormInput,
        BFormFile,
        BFormDatepicker,
        BFormTimepicker,
        BFormTextarea,
        DashboardWalas,
        DetilNilai,
    },
    computed: {
        semester() {
            return this.user ? this.user.semester.nama : "-";
        },
    },
    data() {
        return {
            isBusy: true,
            pembelajaran: [],
            title: "",
            loading_modal: false,
            data_siswa: [],
            merdeka: false,
            is_ppa: false,
            sub_mapel: 0,
            pembelajaran_id: null,
            rombongan_belajar_id: null,
            meta: {},
            induk: null,
            showModal: false,
            newPembelajaran: {
                topik: "", // New field for topik
                nama_mata_pelajaran: "",
                deskripsi: "", // New field for deskripsi
                file: null,
                deadlineDate: null,
                deadlineTime: null,
            },
        };
    },
    created() {
        this.loadPostData();
    },
    methods: {
        loadPostData() {
            this.$http
                .post("/dashboard", {
                    sekolah_id: this.user.sekolah_id,
                    semester_id: this.user.semester.semester_id,
                    periode_aktif: this.user.semester.nama,
                    guru_id: this.user.guru_id,
                })
                .then((response) => {
                    this.isBusy = false;
                    let getData = response.data;
                    this.pembelajaran = getData.pembelajaran;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        detil(item) {
            this.pembelajaran_id = item.pembelajaran_id;
            this.rombongan_belajar_id = item.rombongan_belajar_id;
            this.meta = {
                kkm: item.kkm,
                kelompok_id: item.kelompok_id,
                peminatan_id: item.peminatan_id,
                agama_id: item.agama_id,
            };
            this.loading_modal = true;
            this.$http
                .post("/dashboard/detil", {
                    pembelajaran_id: this.pembelajaran_id,
                    rombongan_belajar_id: this.rombongan_belajar_id,
                    mata_pelajaran_id: item.mata_pelajaran_id,
                })
                .then((response) => {
                    this.data_siswa = response.data.siswa;
                    this.merdeka = response.data.merdeka;
                    this.induk = response.data.induk;
                    this.loading_modal = false;
                    eventBus.$emit("updateDetil");
                })
                .catch((error) => {
                    console.log(error);
                });
            this.title = item.nama_mata_pelajaran + " - " + item.rombel;
            this.$bvModal.show("detil-nilai");
        },
        submitPembelajaran() {
            const payload = {
                topik: this.newPembelajaran.topik,
                nama_mata_pelajaran: this.newPembelajaran.nama_mata_pelajaran,
                deskripsi: this.newPembelajaran.deskripsi,
                deadlineDate: this.newPembelajaran.deadlineDate,
                deadlineTime: this.newPembelajaran.deadlineTime,
                file: this.newPembelajaran.file,
            };
            console.log(payload);
            // Lakukan sesuatu dengan payload, misalnya kirim ke API atau simpan di state
            this.showModal = false;
            // Reset form
            this.newPembelajaran = {
                topik: "",
                nama_mata_pelajaran: "",
                deskripsi: "",
                file: null,
                deadlineDate: null,
                deadlineTime: null,
            };
        },
    },
};
</script>
