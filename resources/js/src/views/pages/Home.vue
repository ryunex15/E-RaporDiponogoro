<template>
    <div>
        <!-- Content 1 -->
        <div class="d-flex container flex-row align-items-center justify-content-between m-4 py-5">
            <div class="text-section flex flex-col space-y-6">
                <h1 class="fs-1 fw-bold leading-tight">
                    SIMAKS<span class="text-success"> SMK Diponegoro</span>
                </h1>
                <p class="text-gray-500 text-lg leading-relaxed text-balance">
                    Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
                    berprestasi di segala bidang yang dapat bersaing di dunia
                    internasional.
                </p>

                <router-link class="btn btn-success ms-auto py-2 fs-5 mb-4" to="/login">Masuk</router-link>

                <div class="d-flex align-items-center justify-content-start space-x-2">
                    <p class="text-gray-600 me-2">We are on Social Media :</p>
                    <a href="#" class="text-black text-xl"><i class="fab fa-facebook-f mx-1"></i></a>
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
            <h6 class="text-secondary m-4">Alasan kenapa harus memilih untuk bergabung dengan SIMAKS SMK Diponegoro.
            </h6>
        </div>

        <div class="container py-5">
            <div class="row text-center">
                <div class="col-lg-3 col-md-6 mb-4" v-for="(item, index) in facilities" :key="index">
                    <div class="card p-4">
                        <div class="icon mb-3">
                            <i :class="item.icon"></i>
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
                        <img :src="imageSrc" class="d-flex mx-auto" alt="Kepala Sekolah" />
                    </div>
                    <div class="col-lg-6">
                        <h2 class="mb-3 fw-bold">
                            Sambutan Kepala Sekolah SMK Negeri Diponegoro
                        </h2>
                        <p>
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
                <h6 class="text-secondary m-4">
                    Pilihan program keahlian di SMK Diponegoro
                </h6>
            </div>

            <div class="container my-4">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 justify-content-center">
                    <div v-for="(program, index) in programs" :key="index" class="col mb-2 ">
                        <div class="card text-center text-white h-100 shadow bg-success">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <i :class="program.icon + ' fa-2x mb-3'"></i>
                                <h5 class="card-title text-white">{{ program.title }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
        <!-- More content here -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            facilities: [
                {
                    icon: "fas fa-desktop",
                    title: "Fasilitas Lengkap",
                    description: "Penunjang belajar dengan kualitas terbaik",
                },
                {
                    icon: "fas fa-building",
                    title: "Lingkungan Nyaman",
                    description: "Berada di lingkungan yang nyaman dan asri",
                },
                {
                    icon: "fas fa-chalkboard-teacher",
                    title: "Pengajar Kompeten",
                    description: "Guru terbaik dengan pengalaman",
                },
                {
                    icon: "fas fa-handshake",
                    title: "Kerja Sama Luas",
                    description: "Dapat kesempatan kerja yang lebih terjamin",
                },
            ],
            programs: [
                { icon: "fas fa-network-wired", title: "Teknik Komputer Dan Jaringan" },
                { icon: "fas fa-hotel", title: "Perhotelan" },
                { icon: "fas fa-laptop-code", title: "Rekayasa perangkat lunak" },
                { icon: "fas fa-drafting-compass", title: "Arsitektur" },
                { icon: "fas fa-microchip", title: "Teknik Elektronika Industri" },
                { icon: "fas fa-video", title: "Teknik Audio Video" },
                { icon: "fas fa-bolt", title: "Teknik Instalasi Tenaga Listrik" },
                { icon: "fas fa-car", title: "Kendaraan Ringan Otomotif" },
                { icon: "fas fa-building", title: "Pemodelan dan Informasi Bangunan" },
                { icon: "fas fa-wrench", title: "Teknik Pengelasan" },
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