<template>
<b-card no-body class="main-card">
    <b-overlay :show="isBusy" rounded opacity="0.6" size="lg" spinner-variant="primary">
        <b-card-body class="p-0">
            <ul class="nav nav-pills nav-fill mb-3 nav-pills-custom">
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'ditugaskan' }" href="#" @click.prevent="setTab('ditugaskan')">
                        Forum
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'belumDiserahkan' }" href="#" @click.prevent="setTab('belumDiserahkan')">
                       Tugas
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'selesai' }" href="#" @click.prevent="setTab('selesai')">
                        Siswa
                    </a>
                </li>
            </ul>

            <div class="header-banner text-white p-4 mb-4">
                <h1 class="mb-1">Kelas X RPL 2</h1>
                <p class="mb-0">Pemrograman web</p>
                <p class="mb-0">Dudung Dzulkifli</p>
            </div>

            <div class="container-fluid">
                <b-row>
                    <b-col md="12">
                        <b-card class="mb-0 post-card shadow-sm rounded border-0 w-100" v-if="activeTab === 'ditugaskan'">
                            <!-- Button to trigger the modal -->
                            <b-button variant="success" @click="showModal = true" class="rounded-pill w-100">Tambah Pembelajaran</b-button>
                            <b-card-body class="d-flex align-items-center">
                                <b-img src="https://lh3.googleusercontent.com/a/ACg8ocLPS5kaZwaq3HcNkgRsgIOdS-Z_0x5irL74fZzP1raa6VTKkKWM=s40-c" rounded="circle" width="50" height="50" class="mr-3" alt="Avatar" />
                                <b-form-input placeholder="Umumkan sesuatu kepada kelas Anda" class="rounded-pill flex-grow-1 w-100" aria-label="Announcement input" />
                            </b-card-body>
                        </b-card>

                        <b-card class="mb-4 datatable-card w-100" v-if="activeTab === 'ditugaskan'">
                            <b-card-body>
                                <datatable :isAsesor="isAsesor" :isBusy="isBusy" :items="items" :fields="fields" :meta="meta" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" />
                            </b-card-body>
                        </b-card>

                        <add-ptk @reload="handleReload" :title="`Tambah Materi Baru`" :link_excel="`/excel/format_excel_materi.xlsx`" :jenis_gtk="`pengajar`" v-if="activeTab === 'ditugaskan'" />

                        <!-- Modal for adding new learning -->
                        <b-modal v-model="showModal" title="Tambah Pembelajaran" v-if="activeTab === 'ditugaskan'">
                            <form @submit.prevent="submitPembelajaran">
                                <!-- Tabel Input Topik -->
                                <b-form-group label="Topik Pembelajaran" label-for="topik-pembelajaran">
                                    <b-form-input id="topik-pembelajaran" v-model="newPembelajaran.topik" required class="w-100"></b-form-input>
                                </b-form-group>

                                <!-- Input Judul Tugas -->
                                <b-form-group label="Judul Pembelajaran" label-for="judul-pembelajaran">
                                    <b-form-input id="judul-pembelajaran" v-model="newPembelajaran.nama_mata_pelajaran" required class="w-100"></b-form-input>
                                </b-form-group>

                                <!-- Input Deskripsi -->
                                <b-form-group label="Deskripsi Pembelajaran" label-for="deskripsi-pembelajaran">
                                    <b-form-textarea id="deskripsi-pembelajaran" v-model="newPembelajaran.deskripsi" rows="3" required class="w-100"></b-form-textarea>
                                </b-form-group>

                                <!-- Input Batas Penyerahan -->
                                <b-form-group label="Batas Penyerahan Tugas" label-for="batas-penyerahan">
                                    <div class="mb-1">
                                        <b-form-datepicker id="batas-penyerahan" v-model="newPembelajaran.deadlineDate" :locale="'id'" :state="!newPembelajaran.deadlineDate ? null : true" placeholder="Pilih Tanggal" required class="w-100"></b-form-datepicker>
                                    </div>
                                    <div>
                                        <b-form-timepicker id="batas-penyerahan-time" v-model="newPembelajaran.deadlineTime" :locale="'id'" :state="!newPembelajaran.deadlineTime ? null : true" placeholder="Pilih Jam" required class="w-100"></b-form-timepicker>
                                    </div>
                                </b-form-group>

                                <!-- Input Upload File -->
                                <b-form-group label="Upload File" label-for="upload-file">
                                    <b-form-file id="upload-file" v-model="newPembelajaran.file" required class="w-100"></b-form-file>
                                </b-form-group>

                                <div class="d-flex justify-content-end">
                                    <b-button type="submit" variant="success">
                                        Tambahkan Tugas
                                    </b-button>
                                </div>
                            </form>
                        </b-modal>

                        <!-- Belum Diserahkan -->
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'belumDiserahkan'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Dummy Tugas 1</b> - Deskripsi tugas 1
                                </p>
                                <b-button variant="warning" class="ml-auto" @click="showTaskDetails">Detail Tugas</b-button>
                            </b-card-body>
                        </b-card>
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'belumDiserahkan'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Dummy Tugas 2</b> - Deskripsi tugas 2
                                </p>
                                <b-button variant="warning" class="ml-auto" @click="showTaskDetails">Detail Tugas</b-button>
                            </b-card-body>
                        </b-card>

                        <!-- Selesai -->
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'selesai'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Dummy Tugas 1</b> - Deskripsi tugas 1
                                </p>
                                <b-button variant="success" class="ml-auto" @click="showTaskDetails">Detail Tugas</b-button>
                            </b-card-body>
                        </b-card>
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'selesai'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Dummy Tugas 2</b> - Deskripsi tugas 2
                                </p>
                                <b-button variant="success" class="ml-auto" @click="showTaskDetails">Detail Tugas</b-button>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </div>

        </b-card-body>
    </b-overlay>
</b-card>
</template>

<script>
import {
    BCard,
    BCardBody,
    BOverlay,
    BRow,
    BCol,
    BFormInput,
    BImg,
    BLink,
    BButton,
    BModal,
    BForm,
    BFormGroup,
    BFormFile,
    BFormDatepicker,
    BFormTimepicker,
    BFormTextarea,
} from "bootstrap-vue";
import Datatable from "../../progress/Datatable.vue";
import AddPtk from "./../modal/AddPtk.vue";
import eventBus from "@core/utils/eventBus";

export default {
    components: {
        BCard,
        BCardBody,
        BOverlay,
        BRow,
        BCol,
        BFormInput,
        BImg,
        BLink,
        BButton,
        BModal,
        BForm,
        BFormGroup,
        BFormFile,
        BFormDatepicker,
        BFormTimepicker,
        BFormTextarea,
        Datatable,
        AddPtk,
        BOverlay,
    },
    data() {
        return {
            isBusy: false,
            activeTab: "ditugaskan",
            isAsesor: false,
            isBusy: false,
            fields: this.getFields(),
            items: this.getInitialItems(),
            meta: {},
            current_page: 1,
            per_page: 10,
            search: "",
            sortBy: "date",
            sortByDesc: true,
            showModal: false,
            newPembelajaran: {
                topik: "",
                nama_mata_pelajaran: "",
                deskripsi: "",
                file: null,
                deadlineDate: null,
                deadlineTime: null,
            },
        };
    },
    created() {
        this.loadPostsData();
        eventBus.$on("modal-materi", this.handleEvent);
    },
    methods: {
        setTab(tab) {
            this.activeTab = tab;
        },
        showTaskDetails() {
            alert("Detail Tugas Diklik");
            // Tambahkan logika lain di sini
        },
        getFields() {
            return [{
                    key: "type",
                    label: "Tipe",
                    sortable: true,
                },
                {
                    key: "pemateri",
                    label: "Pemateri",
                    sortable: true,
                },
                {
                    key: "title",
                    label: "Judul",
                    sortable: true,
                },
                {
                    key: "topik",
                    label: "Topik",
                    sortable: true,
                },
                {
                    key: "date",
                    label: "Tanggal",
                    sortable: true,
                },
                {
                    key: "actions",
                    label: "Aksi",
                    sortable: false,
                    thClass: "text-center",
                    tdClass: "text-center",
                   
                },
            ];
        },
        getInitialItems() {
            return [{
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 3",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Materi",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 2",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 1",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 3",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Materi",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 2",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 1",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 3",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Materi",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 2",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 1",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 3",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Materi",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 2",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
                {
                    type: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    title: "Materi baru: Section 1",
                    topik: "Pemograman Web",
                    date: "13 Apr 2023",
                },
            ];
        },
        handleEvent() {
            eventBus.$emit("open-modal-ptk");
        },
        handleReload() {
            this.loadPostsData();
        },
        loadPostsData() {
            this.isBusy = true;
            setTimeout(() => {
                this.isBusy = false;
                this.meta = {
                    total: this.items.length,
                    current_page: this.current_page,
                    per_page: this.per_page,
                    from: 1,
                    to: this.items.length,
                };
            }, 1000);
        },
        handlePerPage(val) {
            this.per_page = val;
            this.loadPostsData();
        },
        handlePagination(val) {
            this.current_page = val;
            this.loadPostsData();
        },
        handleSearch(val) {
            this.search = val;
            this.loadPostsData();
        },
        handleSort(val) {
            if (val.sortBy) {
                this.sortBy = val.sortBy;
                this.sortByDesc = val.sortDesc;
                this.loadPostsData();
            }
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
            this.showModal = false;
            this.resetForm();
        },
        resetForm() {
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

<style scoped>
.main-card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: none;
}

.nav-pills-custom .nav-link.active {
    background-color: #007bff;
}

.header-banner {
    background-color: #90daff;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.sidebar-card,
.post-card,
.datatable-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
}

.post-card .form-control {
    border: none;
    background-color: #f0f2f5;
}

.type-cell {
    width: 40px;
    text-align: center;
}

.modal-footer {
    display: none;
}
</style>
