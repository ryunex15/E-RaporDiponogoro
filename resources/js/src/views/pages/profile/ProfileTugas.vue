<template>
    <b-card no-body class="main-card">
        <b-overlay
            :show="isBusy"
            rounded
            opacity="0.6"
            size="lg"
            spinner-variant="primary"
        >
            <ul class="nav nav-pills nav-fill mb-3 nav-pills-custom">
                <li class="nav-item">
                    <a
                        class="nav-link text-sm text-md text-lg"
                        :class="{ active: activeTab === 'ditugaskan' }"
                        href="#"
                        @click.prevent="setTab('ditugaskan')"
                    >
                        Ditugaskan
                    </a>
                </li>
            </ul>
            <!-- Header Section -->
            <div
                v-if="pembelajaran"
                class="header-banner text-white p-4 mb-4 text-md-start"
            >
                <h1 class="display-6 display-md-4 mb-1 text-white">
                    {{ pembelajaran.nama_mata_pelajaran }}
                </h1>
                <p class="lead mb-0">
                    Kelas:
                    {{
                        pembelajaran.rombongan_belajar_name || "Tidak tersedia"
                    }}
                </p>
                <p class="mb-0">
                    Guru : {{ pembelajaran.guru_name || "Tidak tersedia" }}
                </p>
            </div>

            <!-- Tabs Section: Diletakkan setelah header -->

            <!-- Content Section: Ini akan disembunyikan ketika tombol View diklik -->
            <div v-show="!isTaskView">
                <div class="container">
                    <b-row>
                        <b-col md="12">
                            <!-- Tabel untuk tugas -->
                            <b-table
                                striped
                                hover
                                :items="items"
                                :fields="fields"
                                small
                            >
                                <template #cell(aksi)="row">
                                    <b-button
                                        variant="primary"
                                        @click="viewTask(row.item)"
                                    >
                                        View
                                    </b-button>
                                </template>
                            </b-table>
                        </b-col>
                    </b-row>
                </div>
            </div>

            <!-- Task Detail Section: Ini akan ditampilkan ketika tombol View diklik -->
            <div v-show="isTaskView">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h2>{{ selectedTask.judul }}</h2>
                                    <p>
                                       {{pembelajaran.guru_name || "Tidak tersedia"}} •
                                        <span>{{ formatDate(selectedTask.created_at) }}</span>
                                    </p>
                                    <p>100 poin</p>
                                    <hr />
                                    </p>
                                    <p>{{selectedTask.deskripsi}}</p>
                                    <hr />
                                    <p>Lampiran File:</p>
                                    <p>
                                        {{selectedTask.file}}
                                    </p>
                                    <hr />
                                    <b-form-textarea
                                        id="input-with-placeholder"
                                        placeholder="Tambahkan komentar kelas"
                                        rows="3"
                                        max-rows="6"
                                    ></b-form-textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <b-button variant="secondary mt-2" @click="backToList"
                    >Kembali</b-button
                >
            </div>
        </b-overlay>
    </b-card>
</template>

<script>
import { BCard, BOverlay, BTable, BRow, BCol, BButton, BFormTextarea } from "bootstrap-vue";

export default {
    components: {
        BCard,
        BOverlay,
        BTable,
        BRow,
        BCol,
        BButton,
        BFormTextarea,
    },

    props: {
        pembelajaran_id: {
            type: String,
            required: true,
        },
        tugas: {
            type: Array,
            default: () => [],
        },
        pembelajaran: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            isBusy: false,
            activeTab: "ditugaskan",
            isTaskView: false, // State untuk menampilkan halaman detail tugas
            selectedTask: {},
            items: [],
            fields: [
                { key: "id", label: "ID" },
                { key: "judul", label: "JUDUL" },
                { key: "topik", label: "TOPIK" },
                { key: "tanggal", label: "TANGGAL" },
                { key: "aksi", label: "AKSI" },
            ],
        };
    },

    watch: {
        tugas(newTugas) {
            this.items = newTugas.map((tugas, index) => ({
                id: index + 1,
                judul: tugas.judul,
                topik: tugas["topik_tugas"].judul_topik,
                tanggal: tugas.deadline,
                deskripsi: tugas.deskripsi || "Deskripsi tidak tersedia", // Menambahkan deskripsi jika ada
                file: tugas.lampiran_document || "Deskripsi tidak tersedia", // Menambahkan deskripsi jika ada
                created_at: tugas.created_at || "ya", // Menambahkan deskripsi jika ada
            }));
        },
    },

    methods: {
        
        setTab(tab) {
            this.activeTab = tab;
        },
        viewTask(task) {
            this.selectedTask = task;
            this.isTaskView = true; // Menampilkan halaman detail tugas
        },
        backToList() {
            this.isTaskView = false; // Kembali ke daftar tugas
        },
        formatDate(date) {
      if (!date) return "-"; // Tampilkan dash jika tanggal tidak tersedia
      
      const formattedDate = new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
      });

      return formattedDate;
    },
    },
};
</script>

<style scoped>
.main-card {
    margin-bottom: 20px;
}

.nav-pills-custom .nav-link.active {
    background-color: #007bff;
}

.header-banner {
    background-color: #f78b20e4;
    border-radius: 10px;
}
</style>
