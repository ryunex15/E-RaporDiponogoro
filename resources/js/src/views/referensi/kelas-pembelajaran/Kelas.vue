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
                    <h1 class="mb-1">{{items4.rombongan_belajar.nama}}</h1>
                    <p class="mb-0">{{items4.nama_mata_pelajaran}}</p>
                    <p class="mb-0">{{items4.pengajar.nama_lengkap}}</p>
                </div>

                <div class="container-fluid">
                    <b-row>
                        <b-col md="12">
                            <b-card class="mb-0 post-card shadow-sm rounded border-0 w-100" v-if="activeTab === 'ditugaskan'">
                                <!-- Button to trigger the modal -->
                                <b-button variant="success" @click="showModalTopik = true" class="rounded-pill w-100 mt-2">Tambah Topik</b-button>
                                <b-card-body class="d-flex align-items-center">
                                    <b-img src="https://lh3.googleusercontent.com/a/ACg8ocLPS5kaZwaq3HcNkgRsgIOdS-Z_0x5irL74fZzP1raa6VTKkKWM=s40-c" rounded="circle" width="50" height="50" class="mr-3" alt="Avatar" />
                                    <b-form-input placeholder="Umumkan sesuatu kepada kelas Anda" class="rounded-pill flex-grow-1 w-100" aria-label="Announcement input" />
                                </b-card-body>
                            </b-card>

                            <b-card class="mb-0 post-card shadow-sm rounded border-0 w-100" v-if="activeTab === 'belumDiserahkan'">
                                <!-- Button to trigger the modal -->
                                <b-button variant="success" @click="showModal = true" class="rounded-pill w-100">Tambah Pembelajaran</b-button>
                                <b-card-body class="d-flex align-items-center">
                                    <b-img src="https://lh3.googleusercontent.com/a/ACg8ocLPS5kaZwaq3HcNkgRsgIOdS-Z_0x5irL74fZzP1raa6VTKkKWM=s40-c" rounded="circle" width="50" height="50" class="mr-3" alt="Avatar" />
                                    <b-form-input placeholder="Umumkan sesuatu kepada kelas Anda" class="rounded-pill flex-grow-1 w-100" aria-label="Announcement input" />
                                </b-card-body>
                            </b-card>

                            <b-card class="mb-4 datatable-card w-100" v-if="activeTab === 'ditugaskan'">
                                <b-card-body>
                                    <h1 class="text-xl mb-4">Topik Tugas</h1>
                                    <datatable :isAsesor="isAsesor" :isBusy="isBusy" :items="items2" :fields="fields" :meta="meta" :actions="dynamicActions" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" @delete-item="handleDelete" :delete-id-key="'topik_tugas_id'" />
                                </b-card-body>
                            </b-card>
                            <b-card class="mb-4 datatable-card w-100" v-if="activeTab === 'belumDiserahkan'">
                                <b-card-body>
                                    <datatable :isAsesor="isAsesor" :isBusy="isBusy" :items="items" :fields="fields2" :meta="meta" :actions="dynamicActionsTugas" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" @delete-item-tugas="handleDeleteTugas" :delete-id-key="'tugas_id'" />
                                </b-card-body>
                            </b-card>

                            <!-- <add-ptk
                                    @reload="handleReload"
                                    :title="Tambah Materi Baru"
                                    :link_excel="/excel/format_excel_materi.xlsx"
                                    :jenis_gtk="pengajar"
                                    v-if="activeTab === 'ditugaskan'"
                                /> -->

                            <!-- Modal for adding new learning -->
                            <b-modal v-model="showModal" title="Tambah Pembelajaran" v-if="activeTab === 'belumDiserahkan'">
                                <form @submit.prevent="submitTugas">
                                    <!-- Tabel Input Topik -->
                                    <b-form-group label="Topik Pembelajaran" label-for="topik-pembelajaran">
                                        <select
                                            id="topik-pembelajaran"
                                            v-model="newPembelajaran.topik"
                                            required
                                            class="form-control w-100"
                                        >
                                            <option
                                                v-for="topik in items2"
                                                :key="topik.topik_tugas_id"
                                                :value="topik.topik_tugas_id"
                                            >
                                                {{ topik.judul }}
                                            </option>
                                        </select>
                                    </b-form-group>

                                    <!-- Input Judul Tugas -->
                                    <b-form-group label="Judul Pembelajaran" label-for="judul-pembelajaran">
                                        <b-form-input
                                            id="judul-pembelajaran"
                                            v-model="newPembelajaran.judul"
                                            required
                                            class="w-100"
                                        ></b-form-input>
                                    </b-form-group>

                                    <!-- Input Deskripsi -->
                                    <b-form-group label="Deskripsi Pembelajaran" label-for="deskripsi-pembelajaran">
                                        <b-form-textarea
                                            id="deskripsi-pembelajaran"
                                            v-model="newPembelajaran.deskripsi"
                                            rows="3"
                                            required
                                            class="w-100"
                                        ></b-form-textarea>
                                    </b-form-group>

                                    <!-- Input Batas Penyerahan -->
                                    <b-form-group label="Batas Penyerahan Tugas" label-for="batas-penyerahan">
                                        <div class="mb-1">
                                            <b-form-datepicker
                                                id="batas-penyerahan"
                                                v-model="newPembelajaran.deadline"
                                                :locale="'id'"
                                                :state="!newPembelajaran.deadline ? null : true"
                                                placeholder="Pilih Tanggal"
                                                required
                                                class="w-100"
                                            ></b-form-datepicker>
                                        </div>
                                        <div>
                                            <b-form-timepicker
                                                id="batas-penyerahan-time"
                                                v-model="newPembelajaran.deadlineTime"
                                                :locale="'id'"
                                                :state="!newPembelajaran.deadlineTime ? null : true"
                                                placeholder="Pilih Jam"
                                                required
                                                class="w-100"
                                            ></b-form-timepicker>
                                        </div>
                                    </b-form-group>

                                    <!-- Input Upload File -->
                                    <b-form-group label="Upload File" label-for="upload-file">
                                        <b-form-file
                                            id="upload-file"
                                            v-model="newPembelajaran.file"
                                            required
                                            class="w-100"
                                        ></b-form-file>
                                    </b-form-group>

                                    <!-- ambil id pembelajaran -->
                                    <b-form-group label="" label-for="judul-pembelajaran">
                                        <b-form-input
                                            id="judul-pembelajaran"
                                            v-model="newPembelajaran.pembelajaran_id"
                                            required
                                            class="w-100"
                                            hidden
                                            disabled
                                        ></b-form-input>
                                    </b-form-group>

                                    <div class="d-flex justify-content-end">
                                        <b-button type="submit" variant="success">
                                            Tambahkan Tugas
                                        </b-button>
                                    </div>
                                </form>
                            </b-modal>


                            <!-- Modal for adding new Topik -->
                            <b-modal v-model="showModalTopik" title="Tambah Topik" v-if="activeTab === 'ditugaskan'">
                                <form @submit.prevent="submitTopik">
                                    <!-- Tabel Input Topik -->
                                    <b-form-group label="Topik tugas" label-for="topik">
                                        <b-form-input id="topik" v-model="newTopik.judul_topik" required class="w-100"></b-form-input>
                                        <b-form-input id="topik" v-model="newTopik.pembelajaran_id" class="w-100 mt-2" required type="text" ></b-form-input>
                                    </b-form-group>

                                    <div class="d-flex justify-content-end">
                                        <b-button type="submit" variant="success">
                                            Tambahkan Tugas
                                        </b-button>
                                    </div>
                                </form>
                            </b-modal>

                            <!-- Selesai -->
                            <b-card class="mb-4 shadow-sm rounded border-0" v-if="activeTab === 'selesai'">
                                <b-card-body>
                                    <Siswa />
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

    import Siswa from "../kelas-pembelajaran/Siswa.vue";
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
            Siswa,
        },

        data() {
            return {
                pembelajaranId: null,
                isBusy: false,
                activeTab: "ditugaskan",
                isAsesor: false,
                isBusy: false,
                fields: this.getFields(),
                fields2: this.getFields2(),
                items:[],
                items2: [],
                items3: [],
                items4: {},
                meta: {},
                current_page: 1,
                per_page: 10,
                search: "",
                sortBy: "date",
                sortByDesc: true,
                showModal: false,
                showModalTopik: false,
                newPembelajaran: {
                    pembelajaran_id: this.$route.query.pembelajaran_id,
                    topik: "",
                    judul: "",
                    deskripsi: "",
                    file: null,
                    deadline: null,
                    deadlineTime: null,
                },
                topikOptions: [],
                newTopik: {
                    judul_topik: "",
                    pembelajaran_id: this.$route.query.pembelajaran_id,
                },
                dynamicActions: {
                    showDelete: true,
                    deleteRoute: '/topik/', // Base route for delete
                },
                dynamicActionsTugas: {
                    showDeleteTugas: true,
                    deleteRoute: '/tugas/', // Base route for delete
                },
            };
        },
        created() {
            this.pembelajaranId = this.$route.query.pembelajaran_id;
            console.log('coba', this.pembelajaranId); // Lakukan sesuatu dengan pembelajaranId
            this.loadPostsData(this.pembelajaranId);
            this.loadPostsDataPembelajaran(this.pembelajaranId);
            eventBus.$on("modal-materi", this.handleEvent);
        },
        mounted() {
            this.fetchTopikOptions(); // Memanggil metode untuk mengambil data topik
        },
        methods: {
            submitTugas() {
                // Validasi data
                if (!this.newPembelajaran.topik || !this.newPembelajaran.judul ||
                    !this.newPembelajaran.deskripsi ||!this.newPembelajaran.deadline || !this.newPembelajaran.file) {
                    alert('Semua field harus diisi!');
                    return;
                }

                // Membuat FormData untuk file upload
                const formData = new FormData();
                formData.append('topik', this.newPembelajaran.topik);
                formData.append('judul', this.newPembelajaran.judul); // Change to 'judul'
                formData.append('deskripsi', this.newPembelajaran.deskripsi);
                formData.append('deadline', `${this.newPembelajaran.deadline}`); // Combine date and time
                formData.append('file', this.newPembelajaran.file);
                formData.append('pembelajaran_id', this.newPembelajaran.pembelajaran_id);

                // Mengirim data ke server
                // Dapatkan token CSRF dari meta tag
                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                console.log(this.newPembelajaran.deadline);
                this.$http.post('/tugas', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'X-CSRF-TOKEN': token // Sertakan CSRF token
                    }
                }).then(response => {
                    console.log('Pembelajaran ditambahkan:', response);
                    this.showModal = false; // Menutup modal setelah submit
                    this.resetForm(); // Reset form
                    console.log(this.pembelajaranId);
                    this.loadPostsData(this.pembelajaranId);
                }).catch(error => {
                    console.error('Error submitting form:', error);
                });

            },


            // fetchTopikOptions() {
            //     // Misalnya menggunakan Axios untuk mengambil data dari API
            //     axios.get('/api/topik-tugas')
            //         .then(response => {
            //             this.topikOptions = response.data;
            //         })
            //         .catch(error => {
            //             console.error('Error fetching topik options:', error);
            //         });
            // },
            setTab(tab) {
                this.activeTab = tab;
            },
            showTaskDetails() {
                alert("Detail Tugas Diklik");
                // Tambahkan logika lain di sini
            },
            getFields() {
                return [{
                        key: "judul",
                        label: "Judul Topik",
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
            getFields2() {
                return [{
                        key: "id",
                        label: "No",
                        sortable: true,
                    },
                    {
                        key: "judul",
                        label: "Judul",
                        sortable: true,
                    },
                    {
                        key: "topik",
                        label: "Topik",
                        sortable: true,
                    },
                    {
                        key: "tanggal",
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
                        type: "Tugas anjai",
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

                ];
            },
            handleEvent() {
                eventBus.$emit("open-modal-ptk");
            },
            handleReload() {
                this.loadPostsData();
                this.loadPostsDataPembelajaran();
            },
            loadPostsData(pembelajaran_id) {
                this.$http
                    .get("/topik", {
                        params: {
                            pembelajaran_id: pembelajaran_id,
                        },
                    })
                    .then((response) => {
                        let getData = response.data;
                        console.log('coba2', getData)

                        this.items2 = getData.topik.map((item) => ({
                            judul: item.judul_topik, // Make sure to map the correct field
                            topik_tugas_id: item.topik_tugas_id, // Make sure to map the correct field
                        }));
                        console.log("Data items2:", this.items2);

                        this.meta = {
                            total: getData.total,
                            current_page: getData.current_page,
                            per_page: getData.per_page,
                            from: getData.from,
                            to: getData.to,
                            role_id: this.role_id,
                            roles: response.data.roles,
                        };

                        this.isBusy = false;
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                        this.isBusy = false;
                    });

                    // fetch tugas
                this.$http
                    .get("/tugas", {
                        params: {
                            pembelajaran_id: pembelajaran_id,
                        },
                    })
                    .then((response) => {
                        let getData = response.data;
                        console.log(getData)

                        this.items = getData.tugas.map((item, index) => ({
                            id : index + 1,
                            tugas_id : item.tugas_id,
                            judul: item.judul, // judul tugas
                            tanggal: item.deadline, // deadline
                            file: item.lampiran_document || "tidak tersedia", // deadline
                            deskripsi: item.deskripsi || "tidak tersedia", // deadline
                            created_at: item.created_at || "tidak tersedia", // deadline
                            updated_at: item.updated_at || "tidak tersedia", // deadline
                            topik: item['topik_tugas'].judul_topik, // topik tugas
                        }));
                        console.log("Data items444:", this.items);

                        this.meta = {
                            total: getData.total,
                            current_page: getData.current_page,
                            per_page: getData.per_page,
                            from: getData.from,
                            to: getData.to,
                            role_id: this.role_id,
                            roles: response.data.roles,
                        };

                        this.isBusy = false;
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                        this.isBusy = false;
                    });


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
            loadPostsDataPembelajaran(pembelajaran_id) {
                this.$http
                    .get("/pembelajaran/" + pembelajaran_id, {
                    })
                    .then((response) => {
                        let getData = response.data;
                        console.log('coba22', getData);
                        this.items4 = getData.data;
                        // this.items2 = getData.topik.map((item) => ({
                        //     judul: item.judul_topik, // Make sure to map the correct field
                        //     topik_tugas_id: item.topik_tugas_id, // Make sure to map the correct field
                        // }));
                        console.log("Data items nih:", this.items4);

                        this.meta = {
                            total: getData.total,
                            current_page: getData.current_page,
                            per_page: getData.per_page,
                            from: getData.from,
                            to: getData.to,
                            role_id: this.role_id,
                            roles: response.data.roles,
                        };

                        this.isBusy = false;
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                        this.isBusy = false;
                    });

                    // fetch tugas
                this.$http
                    .get("/tugas", {
                        params: {
                            pembelajaran_id: pembelajaran_id,
                        },
                    })
                    .then((response) => {
                        let getData = response.data;
                        console.log(getData)

                        this.items = getData.tugas.map((item, index) => ({
                            id : index + 1,
                            tugas_id : item.tugas_id,
                            judul: item.judul, // judul tugas
                            tanggal: item.deadline, // deadline
                            topik: item['topik_tugas'].judul_topik, // topik tugas
                        }));
                        console.log("Data items444:", this.items);

                        this.meta = {
                            total: getData.total,
                            current_page: getData.current_page,
                            per_page: getData.per_page,
                            from: getData.from,
                            to: getData.to,
                            role_id: this.role_id,
                            roles: response.data.roles,
                        };

                        this.isBusy = false;
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                        this.isBusy = false;
                    });


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
            submitTugas2() {
                const payload = {
                    topik: this.newPembelajaran.topik,
                    judul: this.newPembelajaran.judul,
                    deskripsi: this.newPembelajaran.deskripsi,
                    // deadlineDate: this.newPembelajaran.deadlineDate,
                    // deadlineTime: this.newPembelajaran.deadlineTime,
                    deadline: this.newPembelajaran.deadline,
                    file: this.newPembelajaran.file,
                };
                console.log("Payload Pembelajaran:", payload);
                this.showModal = false;
                this.resetForm();
            },
            async handleDelete(id, key, route) {
                try {
                    this.isBusy = true; // Display loader if necessary

                    // Make a DELETE request to the specified route with the ID
                    const response = await this.$http.delete(`/topik/${id}`);
                    console.log(route);
                    console.log(id);

                    console.log(`Item with key: ${key} and ID: ${id} successfully deleted:`, response);

                    // Optionally, you might want to refresh the list of items after deletion
                    this.loadPostsData(this.$route.query.pembelajaran_id); // Reload data if needed

                } catch (error) {
                    console.error(`Error deleting item with key: ${key} and ID: ${id}:`, error);

                    // Handle error
                    alert('An error occurred while deleting the item. Please try again.');
                } finally {
                    this.isBusy = false; // Hide loader
                }
            },
            async handleDeleteTugas(id, key, route) {
                try {
                    this.isBusy = true; // Tampilkan loader jika diperlukan

                    // Buat request DELETE ke route tugas yang sesuai dengan ID
                    const response = await this.$http.delete(route + id);
                    console.log(`Route: ${route}`);
                    console.log(`ID: ${id}`);

                    console.log(`Item with key: ${key} and ID: ${id} successfully deleted:`, response);

                    // Opsi tambahan: Refresh daftar item setelah penghapusan
                    this.loadPostsData(this.$route.query.pembelajaran_id); // Reload data jika diperlukan

                } catch (error) {
                    console.error(`Error deleting item with key: ${key} and ID: ${id}:`, error);

                    // Tangani error
                    alert('Terjadi kesalahan saat menghapus item. Silakan coba lagi.');
                } finally {
                    this.isBusy = false; // Sembunyikan loader
                }
            },
            async submitTopik() {
                const payload = {
                    judul_topik: this.newTopik.judul_topik,
                    pembelajaran_id: this.newTopik.pembelajaran_id,
                };

                console.log("Data yang dikirim:", payload);
                try {
                    this.isBusy = true; // Tampilkan loader jika diperlukan
                    const response = await this.$http.post(
                        "/simpan-topik",
                        payload
                    ); // Ganti '/simpan-topik' dengan endpoint API yang sesuai
                    console.log("Data berhasil dikirim:", response);
                    console.log(payload.pembelajaran_id);
                    this.showModalTopik = false; // Tutup modal setelah berhasil
                    this.resetForm(); // Reset form
                    this.loadPostsData(payload.pembelajaran_id); // Reload data jika diperlukan
                } catch (error) {
                    console.error("Terjadi kesalahan saat mengirim data:", error);
                    // Tangani error dengan menampilkan pesan atau melakukan tindakan lain
                } finally {
                    this.isBusy = false; // Sembunyikan loader
                }
            },
            resetForm() {
                this.newPembelajaran = {
                    topik: "",
                    judul: "",
                    deskripsi: "",
                    file: null,
                    deadline: null,
                    deadlineTime: null,
                    pembelajaran_id: this.$route.query.pembelajaran_id,
                };
                this.newTopik = {
                    judul_topik: "",
                    pembelajaran_id: this.$route.query.pembelajaran_id,
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
