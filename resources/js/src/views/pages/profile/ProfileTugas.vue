<template>
<b-card no-body class="main-card">
    <b-overlay :show="isBusy" rounded opacity="0.6" size="lg" spinner-variant="primary">
        <b-card-body class="p-0">
            <ul class="nav nav-pills nav-fill mb-3 nav-pills-custom">
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'ditugaskan' }" href="#" @click.prevent="setTab('ditugaskan')">
                        Ditugaskan
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'belumDiserahkan' }" href="#" @click.prevent="setTab('belumDiserahkan')">
                        Belum Diserahkan
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'selesai' }" href="#" @click.prevent="setTab('selesai')">
                        Selesai
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
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'ditugaskan'" v-for="(item, index) in topik" :key="index">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>{{ item.judul_topik }}</b> - Mempelajari Akupuntur.
                                </p>
                                <b-button variant="info" class="ml-auto" @click="showTaskDetails">Detail Tugas</b-button>
                            </b-card-body>
                        </b-card>

                        <!-- Belum Diserahkan -->
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'belumDiserahkan'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Tugas 1</b> - Mempelajari Akupuntur.
                                    <br />
                                    <b>Batas Penyerahan : Selasa 3
                                        September 2024</b>
                                </p>
                                <b-button variant="success" class="ml-auto" @click="showSubmitTask">Kirim Tugas</b-button>
                            </b-card-body>
                        </b-card>

                        <!-- Selesai -->
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'selesai'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Tugas 1</b> - Telah diserahkan.
                                </p>
                            </b-card-body>
                        </b-card>
                        <b-card class="mb-4 post-card shadow-sm rounded border-0" v-if="activeTab === 'selesai'">
                            <b-card-body>
                                <p class="responsive-text">
                                    <b>Tugas 2</b> - Telah diserahkan.
                                </p>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-card-body>
    </b-overlay>

    <!-- Modal for Detail Tugas -->
    <b-modal id="task-modal" title="Detail Tugas" v-model="isDetailModalVisible" hide-footer centered>
        <h3>Mempelajari Akupuntur</h3>
        <p>Batas Penyerahan : Selasa, 3 September 2024</p>

        <!-- Preview gambar tugas di sini -->
        <b-img src="https://images.unsplash.com/photo-1719937051058-63705ed35502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" fluid alt="Preview Gambar Tugas" />

        <h5>
            Manfaat akupuntur juga bisa membantu meredakan nyeri sendi.
            Akupuntur bisa dipakai untuk terapi penyembuhan cedera pada
            lutut. Penderitanya perlu melakukan akupuntur secara berulang
            untuk menurunkan gejala nyerinya.
        </h5>
        <br />
        <b-button variant="secondary" @click="isDetailModalVisible = false">Tutup</b-button>
    </b-modal>

    <!-- Modal for Kirim Tugas -->
    <b-modal id="submit-modal" title="Kirim Tugas" v-model="isSubmitModalVisible" hide-footer centered>
        <b-form @submit.prevent="submitTask">
            <b-form-group label="Nama" label-for="nama-input">
                <b-form-input id="nama-input" v-model="nama" required></b-form-input>
            </b-form-group>

            <b-form-group label="Kelas" label-for="kelas-input">
                <b-form-input id="kelas-input" v-model="kelas" required></b-form-input>
            </b-form-group>

            <b-form-group label="Lampirkan File" label-for="file-input">
                <b-form-file id="file-input" v-model="file" required></b-form-file>
            </b-form-group>

            <b-button type="submit" variant="success">Kirim</b-button>
            <b-button variant="danger" @click="isSubmitModalVisible = false">Batal</b-button>
        </b-form>
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
    BForm,
    BFormGroup,
    BFormInput,
    BFormFile,
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
        BForm,
        BFormGroup,
        BFormInput,
        BFormFile,
    },

    props: {
        topik: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            isBusy: false,
            activeTab: "ditugaskan",
            isDetailModalVisible: false,
            isSubmitModalVisible: false,
            nama: "",
            kelas: "",
            file: null,
            items: []
        }
    },
    methods: {

        setTab(tab) {
            this.activeTab = tab;
        },
        showTaskDetails() {
            this.isDetailModalVisible = true;
        },
        showSubmitTask() {
            this.isSubmitModalVisible = true;
        },
        submitTask() {
            // Handle form submission here
            this.isSubmitModalVisible = false;
            alert("Tugas berhasil dikirim!");
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
