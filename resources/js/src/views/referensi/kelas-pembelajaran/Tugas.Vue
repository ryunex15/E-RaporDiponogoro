<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h2>
                            {{
                                items.tugas
                                    ? items.tugas.judul
                                    : "Judul tidak tersedia"
                            }}
                        </h2>
                        <p>
                            {{
                                items.pengajar
                                    ? items.pengajar.nama_lengkap
                                    : "nama guru tidak tersedia"
                            }}
                            •
                            {{
                                formatDate(
                                    items.tugas
                                        ? items.tugas.created_at
                                        : "tidak tersedia"
                                )
                            }}
                        </p>
                        <p>100 poin</p>
                        <hr />
                        <p>{{ items.tugas ? items.tugas.deskripsi : 'deskripsi tidak tersedia' }}</p>
                        <hr />
                        <p>Lampiran File:</p>
                        <!-- Menampilkan gambar -->
                        <div
                            v-if="
                                getFileType(items.tugas.lampiran_document) ===
                                'image'
                            "
                        >
                            <img
                                :src="
                                    getImageUrl(items.tugas.lampiran_document)
                                "
                                alt="gambar"
                                class="img-fluid"
                            />
                        </div>

                        <!-- Menampilkan preview PDF -->
                        <div
                            v-else-if="
                                getFileType(items.tugas.lampiran_document) ===
                                'pdf'
                            "
                        >
                            <strong class="text-xl fw-bold">
                                Preview saat ini tidak tersedia untuk PDF.
                            </strong>
                        </div>

                        <!-- Menampilkan preview DOCX -->
                        <div
                            v-else-if="
                                getFileType(items.tugas.lampiran_document) ===
                                'docx'
                            "
                        >
                            <strong class="text-xl fw-bold">
                                Preview saat ini tidak tersedia untuk DOCX.
                            </strong>
                        </div>
                        <!-- Download Button -->
                        <div v-if="items.tugas.lampiran_document">
                            <b-button
                                variant="success"
                                class="mt-1"
                                @click="handleDownload(items.tugas.lampiran_document)"
                            >
                                Download
                            </b-button>
                        </div>

                        <b-button variant="secondary mt-2" @click="backToList">
                            Kembali
                        </b-button>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-4 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5>Tugas</h5>
                            <b-badge variant="success">Selesai</b-badge>
                        </div>
                        <div class="d-flex flex-column mt-3">
                            <b-button variant="outline-primary" class="mb-2">
                                + Tambah atau buat
                            </b-button>

                            <b-button variant="primary"
                                >Tandai sebagai selesai</b-button
                            >
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
    name: "WebsiteCreation",
    data() {
        return {
            id_tugas: this.$route.query.id,
            items: {},
        };
    },

    created() {
        this.id_tugas = this.$route.query.id;
        this.loadPostsData(this.id_tugas);
    },

    methods: {
        loadPostsData(id_tugas) {
            this.$http
                .get("/detail", {
                    params: {
                        id_tugas: id_tugas,
                    },
                })
                .then((response) => {
                    let getData = response.data;
                    console.log("testing detail", getData.tugas);
                    this.items = getData;

                    // this.tugas = getData.tugas.map((item) => ({
                    //         judul: item.judul,
                    //         file: item.lampiran_document,
                    //         created_at: item.created_at,
                    //         updated_at: item.updated_at,
                    //         tanggal: item.deadline,
                    //         deskripsi: item.deskripsi || "Deskripsi tidak tersedia",
                    //     }));
                    console.log("Data tugas:", this.items);
                });
        },

        formatDate(date) {
            if (!date) return "-";

            const formattedDate = new Date(date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
            });

            return formattedDate;
        },
        getImageUrl(filePath) {
            return filePath ? `/storage/${filePath}` : "";
        },

        getFileName(filePath) {
            if (typeof filePath === "string" && filePath.trim() !== "") {
                return filePath.split("/").pop();
            }
            return "Nama file tidak tersedia";
        },

        getFileType(filePath) {
            if (typeof filePath !== "string") return "unknown";
            const extension = filePath.split(".").pop().toLowerCase();
            const imageExtensions = ["jpg", "jpeg", "png", "gif"];
            if (imageExtensions.includes(extension)) return "image";
            if (extension === "pdf") return "pdf";
            if (extension === "docx") return "docx";
            return "unknown";
        },

        handleDownload(filePath) {
            // Trigger file download manually
            const link = document.createElement("a");
            link.href = this.getImageUrl(filePath);
            link.download = this.getFileName(filePath);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

         backToList() {
           const pembelajaran_id = this.items.tugas.pembelajaran_id;
           this.$router.push({
                path: `/referensi/kelas-pembelajaran/kelas`,
                query: {
                    pembelajaran_id: pembelajaran_id,
                },
            });
        },
    },
};
</script>

<style>
/* Add any custom styles here */
</style>
