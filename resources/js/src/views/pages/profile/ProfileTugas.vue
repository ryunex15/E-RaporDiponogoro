<template>
    <b-card no-body class="main-card">
        <b-overlay
            :show="isBusy"
            rounded
            opacity="0.6"
            size="lg"
            spinner-variant="primary"
        >
            <b-card-body class="p-0">
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

                <div class="header-banner text-white p-4 mb-4 text-md-start">
                    <h1 class="display-6 display-md-4 mb-1 text-white">
                        Kelas X RPL 2
                    </h1>
                    <p class="lead mb-0">Pemrograman web</p>
                    <p class="mb-0">Dudung Dzulkifli</p>
                </div>

                <div class="container">
                    <b-row>
                        <b-col md="12">
                            <!-- Ditugaskan -->
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
                                        @click="showTaskDetails(row.item)"
                                    >
                                        View
                                    </b-button>
                                </template>
                            </b-table>

                            <!-- End list tabel disini -->
                        </b-col>
                    </b-row>
                </div>
            </b-card-body>
        </b-overlay>

        <!-- Modal for Detail Tugas -->
        <b-modal
            id="task-modal"
            title="Detail Tugas"
            v-model="isDetailModalVisible"
            hide-footer
            centered
        >
            <h3>{{ selectedTask.judul }}</h3>
            <h5>Pemberi Materi : {{ selectedTask.pemateri }}</h5>
            <p>Batas Penyerahan : {{ selectedTask.tanggal }}</p>

            <!-- Preview gambar tugas di sini -->
            <img
                src="/images/tutwuri.png"
                alt="Deskripsi Gambar"
                class="mb-4 w-25 d-block mx-auto"
            />

            <h5>{{ selectedTask.topik }}</h5>
            <br />
            <b-button variant="secondary" @click="isDetailModalVisible = false"
                >Tutup</b-button
            >
        </b-modal>
    </b-card>
</template>

<script>
import {
    BCard,
    BCardBody,
    BButton,
    BRow,
    BCol,
    BOverlay,
    BModal,
    BTable,
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BCardBody,
        BButton,
        BRow,
        BCol,
        BOverlay,
        BModal,
        BTable,
    },
    data() {
        return {
            isBusy: false,
            activeTab: "ditugaskan",
            isDetailModalVisible: false,
            selectedTask: {},
            items: [
                {
                    tipe: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    judul: "Materi baru: Section 3",
                    topik: "Pemrograman Web",
                    tanggal: "13 Apr 2023",
                },
                {
                    tipe: "Materi",
                    pemateri: "Dudung Dzulkifli",
                    judul: "Materi baru: Section 2",
                    topik: "Pemrograman Web",
                    tanggal: "13 Apr 2023",
                },
                {
                    tipe: "Tugas",
                    pemateri: "Dudung Dzulkifli",
                    judul: "Materi baru: Section 1",
                    topik: "Pemrograman Web",
                    tanggal: "13 Apr 2023",
                },
                // Add more data here
            ],
            fields: [
                { key: "tipe", label: "TIPE" },
                { key: "pemateri", label: "PEMATERI" },
                { key: "judul", label: "JUDUL" },
                { key: "topik", label: "TOPIK" },
                { key: "tanggal", label: "TANGGAL" },
                { key: "aksi", label: "AKSI" },
            ],
        };
    },
    methods: {
        setTab(tab) {
            this.activeTab = tab;
        },
        showTaskDetails(task) {
            this.selectedTask = task;
            this.isDetailModalVisible = true;
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

.responsive-text {
    font-size: 1rem;
}

.post-card {
    transition: box-shadow 0.3s ease-in-out;
}

.post-card:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
</style>
