<template>
    <div>
        <b-row>
            <b-col md="4" class="mb-2">
                <v-select
                    v-model="meta.per_page"
                    :options="[10, 25, 50, 100]"
                    :searchable="false"
                    :clearable="false"
                    @input="loadPerPage"
                />
            </b-col>
            <b-col md="4" offset-md="4">
                <b-form-input @input="search" placeholder="Cari data..." />
            </b-col>
        </b-row>
        <b-overlay
            :show="loading"
            rounded
            opacity="0.6"
            size="lg"
            spinner-variant="warning"
        >
            <b-table
                responsive
                bordered
                striped
                :items="items"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                show-empty
                :busy="isBusy"
                :tbody-tr-class="rowClass"
            >
                <template #table-busy>
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>Loading...</strong>
                    </div>
                </template>

                <!-- New Actions Button Column -->
                <template v-slot:cell(actions)="row">
                    <b-button
                        v-if="actions.showView"
                        variant="primary"
                        size="sm"
                        @click="handleAction(row.item)"
                        >View</b-button
                    >
                    <!-- <b-button v-if="actions.showDelete" variant="danger" size="sm" @click="handleDelete(items.id, actions.deleteRoute)">
                        Delete
                    </b-button> -->
                    <!-- <b-button v-if="actions.showDelete" variant="danger" size="sm" @click="handleDelete(items[0].topik_tugas_id, 'id', actions.deleteRoute)">
                        Delete
                    </b-button> -->
                    <b-button
                        v-if="actions.showDelete"
                        variant="danger"
                        size="sm"
                        @click="
                            handleDelete(
                                row.item.topik_tugas_id,
                                'id',
                                actions.deleteRoute
                            )
                        "
                    >
                        Delete {{ row.index + 1 }}
                    </b-button>
                    <b-button
                        v-if="actions.showDeleteTugas"
                        variant="danger"
                        size="sm"
                        @click="
                            handleDeleteTugas(
                                row.item.tugas_id,
                                '/tugas/',
                                actions.deleteRoute
                            )
                        "
                    >
                        Delete Tugas {{ row.index + 1 }}
                    </b-button>
                </template>

                <!-- Existing Columns -->
                <template v-slot:cell(jurusan)="row">
                    {{ row.item.paket_ukk.jurusan.nama_jurusan }}
                </template>
                <template v-slot:cell(kode)="row">
                    {{ row.item.paket_ukk.nomor_paket }}
                </template>
                <template v-slot:cell(nama)="row">
                    {{ row.item.paket_ukk.nama_paket_id }}
                </template>
                <template v-slot:cell(detil_ukk)="row">
                    <b-button
                        variant="success"
                        size="sm"
                        @click="detilUkk(row.item.rencana_ukk_id)"
                        >Detil</b-button
                    >
                </template>
                <template v-slot:cell(nama_ekskul)="row">
                    {{ row.item.nama }}
                </template>
                <template v-slot:cell(kelas)="row">
                    {{ row.item.rombongan_belajar.nama }}
                </template>
                <template v-slot:cell(dudi)="row">
                    {{ row.item.akt_pd.dudi.nama }}
                </template>
                <template v-slot:cell(pks)="row">
                    {{ row.item.akt_pd.judul_akt_pd }}
                </template>
                <template v-slot:cell(detil)="row">
                    <b-button
                        variant="success"
                        size="sm"
                        @click="getDetilNilai(row.item)"
                        >Detil</b-button
                    >
                </template>
                <template v-slot:cell(detil_pkl)="row">
                    <b-button
                        variant="success"
                        size="sm"
                        @click="detilPkl(row.item.pkl_id)"
                        >Detil</b-button
                    >
                </template>
                <template v-slot:cell(detil_p5)="row">
                    <b-button
                        variant="success"
                        size="sm"
                        @click="getDetil(row.item.projek.pembelajaran_id)"
                        >Detil</b-button
                    >
                </template>
                <template v-slot:cell(rombel_p5)="row">
                    {{ row.item.nama }}
                </template>
                <template v-slot:cell(koordinator)="row">
                    {{ row.item.projek.guru.nama_lengkap }}
                </template>
                <template v-slot:cell(tema_count)="row">
                    {{ row.item.projek.tema_count }}
                </template>
                <template v-slot:cell(rencana_projek_count)="row">
                    {{ row.item.projek.rencana_projek_count.length }}
                </template>
                <template v-slot:cell(aspek_projek_count)="row">
                    {{ jumlahAspek(row.item.projek.rencana_projek_count) }}
                </template>
                <template v-slot:cell(pembina)="row">
                    {{ row.item.wali_kelas.nama_lengkap }}
                </template>
                <template v-slot:cell(detil_rombongan_belajar_id)="row">
                    <b-button
                        variant="success"
                        size="sm"
                        @click="
                            getDetil(
                                row.item.rombongan_belajar_id,
                                row.item.kelas_ekskul.ekstrakurikuler_id
                            )
                        "
                        >Detil</b-button
                    >
                </template>
            </b-table>
        </b-overlay>
        <b-row class="mt-2">
            <b-col md="6">
                <p>
                    Menampilkan {{ meta.from ? meta.from : 0 }} sampai
                    {{ meta.to }} dari {{ meta.total }} entri
                </p>
            </b-col>
            <b-col md="6">
                <b-pagination
                    v-model="meta.current_page"
                    :total-rows="meta.total"
                    :per-page="meta.per_page"
                    align="right"
                    @change="changePage"
                    aria-controls="dw-datatable"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import _ from "lodash";
import {
    BRow,
    BCol,
    BFormInput,
    BTable,
    BSpinner,
    BPagination,
    BButton,
    BOverlay,
} from "bootstrap-vue";
import vSelect from "vue-select";

export default {
    components: {
        BRow,
        BCol,
        BFormInput,
        BTable,
        BSpinner,
        BPagination,
        BButton,
        BOverlay,
        vSelect,
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
        fields: {
            type: Array,
            required: true,
        },
        meta: {
            required: true,
        },
        isBusy: {
            type: Boolean,
            default: () => true,
        },
        actions: {
            type: Object,
            default: () => ({
                showDelete: false,
                deleteRoute: "",
            }),
        }, // Provide default values for actions prop
        deleteIdKey: {
            type: String,
            default: "id", // Default ID key
        },
        deleteIdKeyTugas: {
            type: String,
            default: "id", // Default ID key
        },
    },
    data() {
        return {
            loading: false,
            sortBy: null,
            sortDesc: false,
        };
    },
    methods: {
        handleAction(item) {
            this.$emit("action-clicked", item);
            console.log("Action clicked:", item);
            this.$router.push({
                path: `/referensi/kelas-pembelajaran/kelas/tugas`,
                query: {
                    someParam: item.someValue,
                    id: item.tugas_id,
                },
            });

            console.log(`Navigating to: /details/${item.tugas_id}`);
        },

        loadPerPage(val) {
            this.$emit("per_page", this.meta.per_page);
        },
        changePage(val) {
            this.$emit("pagination", val);
        },
        handleDelete(item, route) {
            // console.log('coba', item, route);
            this.$emit("delete-item", item, this.deleteIdKey, route);
        },
        handleDeleteTugas(item, route) {
            console.log(
                "coba",
                item,
                this.deleteIdKeyTugas,
                route,
                this.deleteIdKeyTugas
            );
            this.$emit("delete-item-tugas", item, this.deleteIdKeyTugas, route);
        },
        // Fungsi search menggunakan lodash debounce
        search: _.debounce(function (e) {
            this.$emit("search", e);
        }, 500),
        // Menentukan class baris berdasarkan kondisi
        rowClass(item, type) {
            if (!item || type !== "row") return;
            if (item.induk_pembelajaran_id) return "table-warning";
        },
        // Menghitung jumlah aspek
        jumlahAspek(array) {
            let total = 0; // Ubah variabel dari "Jumlah" ke "total"
            array.forEach(function (value) {
                total += value.aspek_budaya_kerja_count; // Tambahkan nilai setiap aspek
            });
            return total;
        },
    },
};
</script>
