<template>
    <div>
        <!-- Content 1 -->
        <div class="d-flex container flex-row align-items-center justify-content-between m-4 py-5">
            <div class="text-section flex flex-col space-y-6">
                <h1 class="fs-1 fw-bold leading-tight">
                    SIMAKS<span class="text-success"> SMK Diponegoro</span>
                </h1>
                <p class="text-gray-500 leading-relaxed text-balance fs-1">
                    Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
                    berprestasi di segala bidang yang dapat bersaing di dunia
                    internasional.
                </p>

                <router-link class="btn btn-success ms-auto py-2 fs-5 mb-4" to="/login">Masuk</router-link>

                <div class="d-flex align-items-center justify-content-start space-x-2">
                    <p class="text-gray-600 me-2">We are on Social Media :</p>
                    <a href="#" class="text-black text-xl"><i class="fa fa-facebook-f mx-1"></i></a>
                    <a href="#" class="text-black text-xl"><i class="fab fa-twitter mx-1"></i></a>
                    <a href="#" class="text-black text-xl"><i class="fab fa-instagram mx-1"></i></a>
                    <a href="#" class="text-black text-xl"><i class="fab fa-youtube mx-1"></i></a>
                </div>
            </div>

            <!-- image -->
            <div class="d-flex justify-content-center d-none d-sm-block">
                <img src="images/workshop-tik.jpg" alt="School Corridor" class="rounded-2xl shadow-lg"
                    style="width: 300px; height: 400px;" />
            </div>
        </div>

        <div class="text-center my-4" id="fasilitas">
            <h1 class="fw-bold">
                Kenapa harus SIMAKS<span class="text-success"> SMK Diponegoro ?</span>
            </h1>
            <h6 class="text-secondary m-4 fs-2">Alasan kenapa harus memilih untuk bergabung dengan SIMAKS SMK
                Diponegoro.
            </h6>
        </div>

        <div class="container py-5">
            <div class="row text-center">
                <div class="col-lg-3 col-md-6 mb-4 " v-for="(item, index) in facilities" :key="index">
                    <div class="card p-4">
                        <div class="icon mb-3">
                            <font-awesome-icon :icon="['fa', item.icon]" /> <!-- Menampilkan ikon pengguna -->
                        </div>
                        <h5>{{ item.title }}</h5>
                        <p class="text-muted">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <br /><br /><br />
            <!-- content 3 -->
            <div class="container my-5">
                <div class="text-center my-4">
                    <h1 class="fw-bold">
                        Profil<span class="text-success"> SMK Diponegoro </span>
                    </h1>
                </div>
                <div class="row align-items-center profile-section">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src="images/diponegoro.jpg" class="d-flex mx-auto" alt="Kepala Sekolah" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="mb-3 fw-bold">
                            Sambutan Kepala Sekolah SMK Negeri Diponegoro
                        </h2>
                        <p class="fs-1">
                            Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
                            berprestasi di segala bidang yang dapat bersaing di dunia
                            internasional. Sekolah adalah tempat anak-anak mendapatkan dukungan
                            untuk melengkapi pembelajarannya di sekolah.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>

        <div>
            <br /><br /><br />
            <!-- content 4 -->
            <div class="text-center my-4" id="program">
                <h1 class="fw-bold">
                    Program Keahlian di <span class="text-success"> SMK Diponegoro ? </span>
                </h1>
                <h3 class="text-secondary m-4">
                    Pilihan program keahlian di SMK Diponegoro
                </h3>
            </div>

            <div class="container my-4">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 justify-content-center">
                    <div v-for="(program, index) in programs" :key="index" class="col mb-2 ">
                        <div class="card text-center text-white h-100 shadow bg-success">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <font-awesome-icon :icon="'fa-solid fa-' + program.icon" size="2xl" class="mb-2" />
                                <h5 class="card-title text-white fs-1">{{ program.title }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
        <!-- More content here -->

        <div class="teal" id="ekstrakulikuler">
            <div class="text-center my-4">
                <h1 class="fw-bold mt-4">
                    Ekstrakulikuler di
                    <span class="text-success "> SMK Diponegoro ? </span>
                </h1>
                <h3 class="text-secondary m-4 fs-2">
                    Pilihan Ekstrakulikuler di SMK Diponegoro
                </h3>
            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center"
                        v-for="activity in activities" :key="activity.title">
                        <div class="card p-3 shadow" style="width: 18rem">
                            <div class="card-body text-center">
                                <div class="mb-3">
                                    <font-awesome-icon :icon="'fa-solid fa-' + activity.icon" size="2xl" />
                                </div>
                                <h4 class="card-title fw-bold">{{ activity.title }}</h4>
                                <p class="card-text">{{ activity.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Section -->
            <footer class="bg-light text-dark py-4">
                <div class="container d-flex justify-content-between align-items-center">
                    <!-- Left Section -->
                    <div>
                        <h5 class="fw-bold">SIMAKS SMK Diponegoro</h5>
                        <p class="mb-0">Sekolah adalah tempat mencetak penerus bangsa</p>
                        <p class="mb-0">yang berkualitas dan berprestasi di segala bidang</p>
                        <p class="mb-0">yang dapat bersaing di dunia internasional</p>
                    </div>

                    <!-- Right Section -->
                    <div class="text-end">
                        <div class="mb-2">
                            <a href="#" class="text-dark me-2">
                                <i class="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" class="text-dark me-2">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" class="text-dark me-2">
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" class="text-dark">
                                <i class="fab fa-youtube fa-lg"></i>
                            </a>
                        </div>
                        <p>
                            SIMAKS Diponegoro adalah aplikasi eLearning yang <br />
                            memudahkan untuk guru dan pelajar untuk pembelajaran.
                        </p>
                        <p>All rights reserved @2024</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVueIcons } from 'bootstrap-vue';
Vue.use(BootstrapVueIcons);

export default {
    data() {
        return {
            facilities: [
                { icon: "school", title: "Fasilitas Lengkap", description: "Penunjang belajar dengan kualitas terbaik" },
                { icon: "people-line", title: "Lingkungan Nyaman", description: "Berada di lingkungan yang nyaman dan asri" },
                { icon: "person-chalkboard", title: "Pengajar Kompeten", description: "Guru terbaik dengan pengalaman yang mumpuni" },
                { icon: "handshake", title: "Kerja Sama Luas", description: "Dapat kesempatan kerja yang lebih terjamin" },
            ],
            programs: [
                { icon: "computer", title: "Teknik Komputer Dan Jaringan" },
                { icon: "hotel", title: "Perhotelan" },
                { icon: "laptop-code", title: "Rekayasa perangkat lunak" },
                { icon: "ruler", title: "Arsitektur" },
                { icon: "microchip", title: "Teknik Elektronika Industri" },
                { icon: "camera", title: "Teknik Audio Video" },
                { icon: "bolt-lightning", title: "Teknik Instalasi Tenaga Listrik" },
                { icon: "truck", title: "Kendaraan Ringan Otomotif" },
                { icon: "building-columns", title: "Pemodelan dan Informasi Bangunan" },
                { icon: "wrench", title: "Teknik Pengelasan" },
            ],
            activities: [
                {
                    title: 'Praja Muda Karana',
                    description: 'Pertama kali dibentuk team tahun 2002',
                    icon: 'award',
                },
                {
                    title: 'Palang Merah Remaja',
                    description: 'Pertama kali dibentuk team tahun 2003',
                    icon: 'first-aid',
                },
                {
                    title: 'Pecinta Alam',
                    description: 'Pertama kali dibentuk team tahun 2008',
                    icon: 'mountain',
                },
                {
                    title: 'Sinematografi',
                    description: 'Pertama kali dibentuk team tahun 2016',
                    icon: 'video',
                },
            ],
        };
    },
};
</script>

<style scoped>
.sticky-navbar {
    position: sticky;
    top: 0;
    z-index: 1020;
}

.offcanvas-backdrop {
    opacity: 0.5 !important;
}

.offcanvas-start {
    width: 250px !important;
}

.text-section {
    flex-basis: 75%;
    max-width: 75%;
}

.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-10px);
}

.icon {
    font-size: 40px;
    color: #6c757d;
}

.profile-section img {
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.profile-section p {
    text-align: justify;
    text-justify: inter-word;
}

.teal {
    background-color: #d7f2e9;
}
</style>