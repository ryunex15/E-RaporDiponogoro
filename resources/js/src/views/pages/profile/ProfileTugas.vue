<template>
    <b-card no-body class="main-card">
        <b-overlay :show="isBusy" rounded opacity="0.6" size="lg" spinner-variant="primary">
            <ul class="nav nav-pills nav-fill mb-3 nav-pills-custom">
                <li class="nav-item">
                    <a class="nav-link text-sm text-md text-lg" :class="{ active: activeTab === 'ditugaskan' }" href="#"
                        @click.prevent="setTab('ditugaskan')">
                        Ditugaskan
                    </a>
                </li>
            </ul>

            <!-- Header Section -->
            <div v-if="pembelajaran" class="header-banner text-white p-4 mb-4 text-md-start">
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
                    Guru: {{ pembelajaran.pengajar.nama_lengkap || "Tidak tersedia" }}
                </p>
            </div>

            <!-- Content Section: Ini akan disembunyikan ketika tombol View diklik -->
            <div v-show="!isTaskView">
                <div class="container">
                    <b-row>
                        <b-col md="12">
                            <!-- Tabel untuk tugas -->
                            <b-table striped hover :items="items" :fields="fields" small>
                                <template #cell(aksi)="row">
                                    <b-button variant="primary" @click="viewTask(row.item)">
                                        View
                                    </b-button>
                                </template>
                            </b-table>
                        </b-col>
                    </b-row>
                </div>
            </div>

            <!-- Task View Section -->
            <div v-show="isTaskView">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h2>{{ selectedTask.judul }}</h2>
                                    <p>
                                        {{
                                            pembelajaran.pengajar.nama_lengkap ||
                                            "Tidak tersedia"
                                        }}
                                        •
                                        <span>{{
                                            formatDate(selectedTask.created_at)
                                        }}</span>
                                    </p>
                                    {{ this.jawabanTugas == null ? 'Belom Mengumpulkan Tugas' : 'Sudah Mengumpulkan Tugas' }} <br>
                                    {{ nilaiTugas == null ? 'Belom Dinilai' : 'Sudah Dinilai' }}
                                    <p>{{ nilaiTugas == null ? '0' : nilaiTugas }} / 100 poin</p>
                                    <hr />
                                    <p v-html="convertToLink(selectedTask.deskripsi)">
                                        {{
                                        convertToLink(
                                        selectedTask.deskripsi
                                        )
                                        }}
                                    </p>
                                    <hr />
                                    <p>Lampiran File:</p>

                                    <!-- Menampilkan gambar -->
                                    <div v-if="
                                        getFileType(selectedTask.file) ===
                                        'image'
                                    ">
                                        <img :src="getImageUrl(selectedTask.file)
                                            " alt="gambar" class="img-fluid" />
                                    </div>

                                    <!-- Menampilkan preview PDF -->
                                    <div v-else-if="
                                        getFileType(selectedTask.file) ===
                                        'pdf'
                                    ">
                                        <!-- <iframe
                                            :src="
                                                getImageUrl(selectedTask.file)
                                            "
                                            width="100%"
                                            height="600px"
                                            frameborder="0"
                                        ></iframe> -->
                                        <strong class="text-xl fw-bold">
                                            Preview saat ini tidak tersedia
                                            untuk PDF.
                                        </strong>
                                    </div>

                                    <!-- Menampilkan preview DOCX -->
                                    <div v-else-if="
                                        getFileType(selectedTask.file) ===
                                        'docx'
                                    ">
                                        <strong class="text-xl fw-bold">
                                            Preview saat ini tidak tersedia
                                            untuk DOCX.
                                        </strong>
                                    </div>

                                    <!-- Jika tipe file tidak dikenali
                                    <div v-else>
                                        <p>
                                            Dokumen:
                                            <a
                                                :href="getImageUrl(selectedTask.file)"
                                                target="_blank"
                                                @click.prevent="handleDownload(selectedTask.file)"
                                            >
                                                {{ getFileName(selectedTask.file) }}
                                            </a>
                                        </p>
                                    </div> -->

                                    <!-- Download Button -->
                                    <div v-if="selectedTask.file">
                                        <b-button variant="success" class="mt-2" @click="
                                            handleDownload(
                                                selectedTask.file
                                            )
                                            ">
                                            Download
                                        </b-button>
                                        <b-button variant="success" class="ml-2 mt-2" @click="showModal = true" v-show="!jawabanTugas">
                                            Kirim Tugas
                                        </b-button>
                                    </div>

                                    <hr />
                                    <b-button variant="secondary mt-2" @click="backToList">
                                        Kembali
                                    </b-button>
                                </div>

                                <!-- Modal untuk kirim tuags -->
                                <b-modal v-model="showModal" title="Kirim Tugas">
                                    <form @submit.prevent="submitJawabanTugas" enctype="multipart/form-data">
                                        <!-- Tabel Input Topik -->
                                        <b-form-group label="" label-for="tugas_id">
                                            <b-form-input id="tugas_id" v-model="selectedTask.tugas_id" required
                                                class="w-100" disabled></b-form-input>
                                        </b-form-group>

                                        <!-- Input Upload File -->
                                        <b-form-group label="Upload File" label-for="upload-file">
                                            <b-form-file id="upload-file" v-model="kirimTugas.file" required
                                                class="w-100"></b-form-file>
                                        </b-form-group>

                                        <!-- Input Komentar -->
                                        <b-form-group label="Komentar" label-for="komentar">
                                            <b-form-textarea id="komentar" v-model="kirimTugas.komentar" rows="3"
                                                required class="w-100"></b-form-textarea>
                                        </b-form-group>

                                        <div class="d-flex justify-content-end">
                                            <b-button type="submit" variant="success">
                                                Kirim Tugas
                                            </b-button>
                                        </div>
                                    </form>
                                </b-modal>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-overlay>
    </b-card>
</template>

<script>
import {
    BCard,
    BOverlay,
    BTable,
    BRow,
    BCol,
    BButton,
    BFormTextarea,
    BModal,
    BFormGroup,
    BFormInput,
    BFormFile,
} from "bootstrap-vue";

export default {
    components: {
        BCard,
        BOverlay,
        BTable,
        BRow,
        BCol,
        BButton,
        BFormTextarea,
        BModal,
        BFormGroup,
        BFormInput,
        BFormFile,
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
            showModal: false,
            isTaskView: false,
            selectedTask: {},
            items: [],
            nilaiTugas: null,
            tugasId: null,
            tugas: null,
            jawabanTugas: [], // Data jawaban tugas
            kirimTugas: {
                tugas_id: null,
                peserta_didik_id: null,
                file: null,
                komentar: "",
            },
            fields: [
                { key: "id", label: "ID" },
                { key: "judul", label: "JUDUL" },
                { key: "topik", label: "TOPIK" },
                { key: "tanggal", label: "TANGGAL" },
                { key: "nilai", label: "NILAI" },
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
                tugas_id: tugas.tugas_id,
                deskripsi: tugas.deskripsi || "Deskripsi tidak tersedia",
                file: tugas.lampiran_document || "Deskripsi tidak tersedia",
                created_at: tugas.created_at,
                nilai: tugas.jawaban_siswa.length > 0 ? tugas.jawaban_siswa[0].nilai : 0,
            }));

            this.kirimTugas =  newTugas.map((tugas, index) => ({
                tugas_id: tugas.tugas_id,

            }));
           
        },
    },

    methods: {
        setTab(tab) {
            this.activeTab = tab;
        },

        async getJawabanTugas() {
            try {
                const response = await this.$http.get(`/get-jawaban-tugas/${this.selectedTask.tugas_id}`);
                
                this.jawabanTugas = response.data.data;
                this.nilaiTugas = response.data.data.nilai;
                this.tugas = response.data.data.lampiran;
                this.tugasId = response.data.data.tugas_id;
                console.log('ini lampiran',this.tugas);
                console.log('Jawaban Tugas:', this.jawabanTugas); // Cek isi data di sini
                // console.log('Jawaban Tugas:', this.selectedTask.tugas_id); // Cek isi data di sini
                
            } catch (error) {
                this.error = error.response ? error.response.data.message : 'Error tidak diketahui';
                console.log(this.error);
            }
        },

        viewTask(task) {
            this.selectedTask = task;
            this.isTaskView = true;
            this.getJawabanTugas(); // Pastikan ini dipanggil setelah mengisi selectedTask
        },
        backToList() {
            this.isTaskView = false;
        },
        handleKirim(pembelajaran_id) {
            console.log(pembelajaran_id);
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
            const link = document.createElement("a");
            link.href = this.getImageUrl(filePath);
            link.download = this.getFileName(filePath);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

        convertToLink(text) {
            if (!text || typeof text !== "string") {
                return text;
            }

            const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
            return text.replace(urlRegex, (url) => {
                let href = url.startsWith("www.") ? `http://${url}` : url;
                return `<a href="${href}" target="_blank">${url}</a>`;
            });
        },

        // kirim tugas
        async submitJawabanTugas() {
            this.isBusy = true;
            try {
                const formData = new FormData();
                formData.append('tugas_id', this.selectedTask.tugas_id);
                formData.append('file', this.kirimTugas.file);
                formData.append('komentar', this.kirimTugas.komentar);

                const response = await this.$http.post('/kirim_jawaban', formData);

                // Show success toast with message from backend
                if(response.data.message == 'Jawaban sudah pernah ditambahkan.'){
                    this.$bvToast.toast(response.data.message, {
                        title: 'Error',
                        variant: 'danger',
                        solid: true,
                    });
                }else{
                    this.$bvToast.toast(response.data.message, {
                        title: 'Sukses',
                        variant: 'success',
                        solid: true,
                    });
                }

                // Reset the form
                this.resetForm();

                // Hide the modal
                this.showModal = false;

                this.isBusy = false;
            } catch (error) {
                this.isBusy = false;

                // Check if there's a specific error message from the server
                const errorMessage = error.response && error.response.data.message 
                    ? error.response.data.message 
                    : 'Gagal mengirimkan tugas atau tugas sudah pernah dikumpulkan';

                // Show error toast with message from backend or default error
                this.$bvToast.toast(errorMessage, {
                    title: 'Error',
                    variant: 'danger',
                    solid: true,
                });
            }
        },

    // kosongkan form
    resetForm() {
        this.kirimTugas.file = null;
        this.kirimTugas.komentar = "";
    }
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
