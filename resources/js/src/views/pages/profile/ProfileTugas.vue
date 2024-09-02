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
                <!-- Navigation -->
                <ul class="nav nav-pills nav-fill mb-3 nav-pills-custom">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ active: activeTab === 'ditugaskan' }"
                            href="#"
                            @click.prevent="setTab('ditugaskan')"
                        >
                            Ditugaskan
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ active: activeTab === 'belumDiserahkan' }"
                            href="#"
                            @click.prevent="setTab('belumDiserahkan')"
                        >
                            Belum Diserahkan
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ active: activeTab === 'selesai' }"
                            href="#"
                            @click.prevent="setTab('selesai')"
                        >
                            Selesai
                        </a>
                    </li>
                </ul>

                <!-- Header Banner -->
                <div class="header-banner text-white p-4 mb-4">
                    <h1 class="mb-1">Kelas X RPL 2</h1>
                    <p class="mb-0">Pemrograman web</p>
                    <p class="mb-0">Dudung Dzulkifli</p>
                </div>

                <!-- Content Based on Active Tab -->
                <div class="container">
                    <b-row>
                        <b-col md="12">
                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'ditugaskan'"
                            >
                                <b-card-body>
                                    <p class="mb-0">Konten Ditugaskan...</p>
                                </b-card-body>
                            </b-card>

                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'belumDiserahkan'"
                            >
                                <b-card-body>
                                    <p class="mb-0">
                                        Konten Belum Diserahkan...
                                    </p>
                                </b-card-body>
                            </b-card>

                            <b-card
                                class="mb-4 post-card shadow-sm rounded border-0"
                                v-if="activeTab === 'selesai'"
                            >
                                <b-card-body>
                                    <p class="mb-0">Konten Selesai...</p>
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
import { BCard, BCardBody, BOverlay, BRow, BCol } from "bootstrap-vue";

export default {
    components: {
        BCard,
        BCardBody,
        BOverlay,
        BRow,
        BCol,
    },
    data() {
        return {
            isBusy: false,
            activeTab: "ditugaskan", // Default tab
        };
    },
    methods: {
        setTab(tab) {
            this.activeTab = tab;
            // Logic to handle tab switching, fetching data, or any other actions.
            console.log(`Active tab set to: ${tab}`);
        },
    },
};
</script>

<style scoped>
.main-card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: none;
}

.header-banner {
    background-color: #90daff;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.nav-pills-custom .nav-link {
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    color: #007bff;
}

.nav-pills-custom .nav-link.active {
    background-color: #007bff;
    color: white;
}

.post-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
}
</style>
