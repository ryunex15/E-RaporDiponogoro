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
                    <li class="nav-item">
                        <a
                            class="nav-link text-sm text-md text-lg"
                            :class="{ active: activeTab === 'belumDiserahkan' }"
                            href="#"
                            @click.prevent="setTab('belumDiserahkan')"
                        >
                            Belum Diserahkan
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link text-sm text-md text-lg"
                            :class="{ active: activeTab === 'selesai' }"
                            href="#"
                            @click.prevent="setTab('selesai')"
                        >
                            Selesai
                        </a>
                    </li>
                </ul>

                <div class="header-banner text-white p-4 mb-4 text-md-start">
                    <h1 class="display-6 display-md-4 mb-1">Kelas X RPL 2</h1>
                    <p class="lead mb-0">Pemrograman web</p>
                    <p class="mb-0">Dudung Dzulkifli</p>
                </div>

                <div class="container">
                    <b-row>
                        <b-col md="12">
                            <!-- Ditugaskan -->
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'ditugaskan'"
                            >
                                <b-card-body>
                                    <p class="responsive-text">
                                        <b>Dummy Tugas 1</b> - Deskripsi tugas 1
                                    </p>
                                    <b-button
                                        variant="primary"
                                        class="ml-auto"
                                        @click="showTaskDetails"
                                        >Detail Tugas</b-button
                                    >
                                </b-card-body>
                            </b-card>
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'ditugaskan'"
                            >
                                <b-card-body>
                                    <p class="responsive-text">
                                        <b>Dummy Tugas 2</b> - Deskripsi tugas 2
                                    </p>
                                    <b-button
                                        variant="primary"
                                        class="ml-auto"
                                        @click="showTaskDetails"
                                        >Detail Tugas</b-button
                                    >
                                </b-card-body>
                            </b-card>

                            <!-- Belum Diserahkan -->
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'belumDiserahkan'"
                            >
                                <b-card-body>
                                    <p class="responsive-text">
                                        <b>Dummy Tugas 1</b> - Deskripsi tugas 1
                                    </p>
                                    <b-button
                                        variant="warning"
                                        class="ml-auto"
                                        @click="showTaskDetails"
                                        >Detail Tugas</b-button
                                    >
                                </b-card-body>
                            </b-card>
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'belumDiserahkan'"
                            >
                                <b-card-body>
                                    <p class="responsive-text">
                                        <b>Dummy Tugas 2</b> - Deskripsi tugas 2
                                    </p>
                                    <b-button
                                        variant="warning"
                                        class="ml-auto"
                                        @click="showTaskDetails"
                                        >Detail Tugas</b-button
                                    >
                                </b-card-body>
                            </b-card>

                            <!-- Selesai -->
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'selesai'"
                            >
                                <b-card-body>
                                    <p class="responsive-text">
                                        <b>Dummy Tugas 1</b> - Deskripsi tugas 1
                                    </p>
                                    <b-button
                                        variant="success"
                                        class="ml-auto"
                                        @click="showTaskDetails"
                                        >Detail Tugas</b-button
                                    >
                                </b-card-body>
                            </b-card>
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'selesai'"
                            >
                                <b-card-body>
                                    <p class="responsive-text">
                                        <b>Dummy Tugas 2</b> - Deskripsi tugas 2
                                    </p>
                                    <b-button
                                        variant="success"
                                        class="ml-auto"
                                        @click="showTaskDetails"
                                        >Detail Tugas</b-button
                                    >
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
import { BCard, BCardBody, BButton, BRow, BCol, BOverlay } from "bootstrap-vue";

export default {
    components: {
        BCard,
        BCardBody,
        BButton,
        BRow,
        BCol,
        BOverlay,
    },
    data() {
        return {
            isBusy: false,
            activeTab: "ditugaskan",
        };
    },
    methods: {
        setTab(tab) {
            this.activeTab = tab;
        },
        showTaskDetails() {
            alert("Detail Tugas Diklik");
            // Tambahkan logika lain di sini
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
    background-color: #343a40;
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
