<template class="template">
    <div class="container-fluid">
        <div class="row " v-if="!showDetail && !showPrint">
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
                        <p v-html="convertToLink(items.tugas ? items.tugas.deskripsi : 'tidak tersedia')"></p>
                        <hr />
                        <p>Lampiran File:</p>
                        <div v-if="getFileType(items.tugas.lampiran_document) === 'image'">
                            <img :src="getImageUrl(items.tugas.lampiran_document)" alt="gambar" class="img-fluid" />
                        </div>

                        <div v-else-if="getFileType(items.tugas.lampiran_document) === 'pdf'">
                            <strong class="text-xl fw-bold">Preview saat ini tidak tersedia untuk PDF.</strong>
                        </div>

                        <div v-else-if="getFileType(items.tugas.lampiran_document) === 'docx'">
                            <strong class="text-xl fw-bold">Preview saat ini tidak tersedia untuk DOCX.</strong>
                        </div>
                        <div v-if="items.tugas.lampiran_document">
                            <b-button variant="success" class="mt-1"
                                @click="handleDownload(items.tugas.lampiran_document)">
                                Download
                            </b-button>
                        </div>

                        <b-button variant="secondary mt-2" @click="backToList">
                            Kembali
                        </b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="!showDetail && !showPrint">
            <div class="col-lg-8 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h2 class="ml-4">Pengumpulan Tugas</h2>
                            <b-button variant="success" class="mr-2" @click="handlePrint(students, items.tugas)">Print</b-button>
                        </div>
                        <b-list-group>
                            <b-list-group-item v-for="(student, index) in students" :key="index"
                                class="border-0 py-3 d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <!-- Display the index + 1 as the number -->
                                    <div class="mr-3 font-weight-bold">{{ index + 1 }}.</div>
                                    <b-avatar :src="student.avatar" size="3rem" class="mr-3 rounded-circle"></b-avatar>
                                    <div>
                                        <div class="font-weight-bold">{{ student.peserta_didik.nama }}</div>
                                        <div class="text-muted small">{{ student.kelas }}</div>
                                        <div class="font-weight-bold">Nilai : {{ student.nilai }}</div>
                                    </div>
                                </div>
                                <b-button variant="primary"
                                    @click="handleClick(student.peserta_didik.peserta_didik_id, student)">Lihat</b-button>
                            </b-list-group-item>

                            <hr class="my-4" />
                        </b-list-group>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Detail Section -->
        <div v-if="showDetail && !showPrint" class="row">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h2 class="mb-2">Jawaban Siswa</h2>
                        <h4>Nama: </h4>
                        <p class="text-md">{{ detailJawaban.peserta_didik.nama }}</p>
                        <h4>Komentar:</h4>
                        <p class="fs-4 fw"> {{ detailJawaban.komentar }} </p>
                        <div class="mb-4">
                            <img :src="getImageUrl(detailJawaban.lampiran)" alt="Gambar Tugas" class="img-fluid"
                                style="width: 40%; height: 40%;">
                        </div>
                        <div>
                            <button class="btn btn-info mb-4" @click="handleDownload(detailJawaban.lampiran)">Download
                                File</button>
                        </div>
                        <form @submit.prevent="submitNilai">
                            <div class="form-group">
                                <h3>Nilai</h3>
                                <input type="number" class="form-control col-6" id="nilai" v-model="computedNilai"
                                    required />
                                <input type="text" class="form-control col-6" id="nilai"
                                    v-model="detailJawaban.peserta_didik_id" hidden>
                                <input type="text" class="form-control col-6" id="nilai" v-model="id_tugas" hidden>
                            </div>
                            <button type="submit" class="btn btn-success">Simpan Nilai</button>
                        </form>

                        <button class="btn btn-secondary mt-2" @click="backTodetail()">kembali</button>
                    </div>
                </div>
            </div>
        </div>


        <div v-if="showPrint" class="row" id="printableArea">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h2 class="mb-2">Tugas {{ items.tugas.judul }}</h2>
                        <b-table hover :items="nilaiSiswa" :fields="fields" small class="table">
                            <template #cell(aksi)="row">
                                <b-button variant="primary" @click="viewTask(row.item)">
                                    View
                                </b-button>
                            </template>
                        </b-table>
                        <b-button variant="secondary" class="mt-4 print-hidden" @click="detailTugas()">Kembali</b-button>
                        <b-button variant="primary" class="mt-4 print-hidden" @click="printDiv('printableArea')">Print Nilai</b-button>
                    </div>
                </div>
            </div>
        </div>


    </div>
    </div>
</template>


<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons, BListGroup, BTable } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
    name: "WebsiteCreation",
    data() {
        return {
            nilai: null,
            id_tugas: this.$route.query.id,
            items: {},
            nilaiSiswa: [],
            students: [], // Initialize as an empty array
            detailJawaban: [],
            showDetail: false, // New property to control visibility
            showPrint: false, // halaman print set false
            selectedStudentId: null, // To hold the ID of the selected student
            updateNilai: {
                nilai: null,
                peserta_didik_id: null,
                tugas_id: null,
            },
            fields: [
                { key: "nama", label: "NAMA" },
                { key: "nilai", label: "NILAI" },
            ],
        };
    },

    created() {
        this.id_tugas = this.$route.query.id;
        this.loadPostsData(this.id_tugas);
    },

    computed: {
        // Jika detailJawaban.nilai ada, gunakan itu; jika tidak, gunakan updateNilai.nilai
        computedNilai: {
            get() {
                return this.detailJawaban.nilai !== null
                    ? this.detailJawaban.nilai
                    : this.updateNilai.nilai;
            },
            set(value) {
                this.updateNilai.nilai = value; // Set nilai ke updateNilai.nilai
            }
        }
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
            this.$http
                .get("/tugas_siswa", {
                    params: {
                        id_tugas: id_tugas,
                    },
                })
                .then((response) => {
                    let getData = response.data;
                    console.log("testing hari ini", getData);
                    this.students = getData;

                    // this.tugas = getData.tugas.map((item) => ({
                    //         judul: item.judul,
                    //         file: item.lampiran_document,
                    //         created_at: item.created_at,
                    //         updated_at: item.updated_at,
                    //         tanggal: item.deadline,
                    //         deskripsi: item.deskripsi || "Deskripsi tidak tersedia",
                    //     }));
                    // console.log("Data tugas:", this.items);
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
        backTodetail(){
            this.showDetail = false;
        },

        detailTugas(){
            this.showPrint = false;
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

        convertToLink(text) {
            // Cek apakah text ada dan merupakan string
            if (!text || typeof text !== "string") {
                return text; // Jika text undefined atau bukan string, kembalikan seperti semula
            }

            const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
            return text.replace(urlRegex, (url) => {
                let href = url.startsWith("www.") ? `http://${url}` : url;
                return `<a href="${href}" target="_blank">${url}</a>`; // Mengembalikan string dengan tag <a>
            });
        },

        handleClick(id, student) {
            this.showDetail = true; // Show the detail section
            console.log('lihat tugas', id);
            console.log('ini siswa', student);
            this.detailJawaban = student;
        },

        async submitNilai() {
            // Logika untuk mengirim nilai tugas ke server
            console.log("Mengirim nilai tugas...", this.detailJawaban);
            // Tambahkan logika untuk mengirim data ke server


            try {
                // Buat instance FormData
                const formData = new FormData();

                // Tambahkan nilai ke dalam FormData
                formData.append('nilai', this.updateNilai.nilai);
                formData.append('peserta_didik_id', this.detailJawaban.peserta_didik_id);
                formData.append('tugas_id', this.id_tugas);
                formData.append('detail_jawaban_id', this.detailJawaban.id);

                // Kirim POST request ke endpoint server menggunakan FormData
                const response = await this.$http.post('/update-nilai', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Handle response (misal tampilkan pesan sukses)
                console.log('Response:', response);
                alert('Nilai berhasil disimpan!');

                // Reset form (jika diperlukan)
                this.nilai = null;
            } catch (error) {
                console.error('Error submitting nilai:', error);
                alert('Terjadi kesalahan saat menyimpan nilai');
            }
        },

        handlePrint(student, nama_tugas) {
            // window.print();
            this.showPrint = true;
            console.log(student)

            this.nilaiSiswa = this.students.map(student => ({
                nama: student.peserta_didik.nama,
                nilai: student.nilai,
            }));
        },
        

        printDiv(divId) {
            // Menyimpan isi div ke dalam variabel
            const printContents = document.getElementById(divId).innerHTML;
            const originalContents = document.body.innerHTML;

            // Mengganti isi body dengan isi div yang ingin dicetak
            document.body.innerHTML = printContents;

            // Memicu dialog cetak
            window.print();

            // Mengembalikan isi asli dari body
            document.body.innerHTML = originalContents;

            // Mengembalikan scroll posisi
            window.location.reload();
        },


    },
};
</script>

<style>
    @media print {
        .print-hidden {
            display: none !important;
        }
    }
</style>

