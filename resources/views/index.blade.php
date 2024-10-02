<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="index.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <title>eRapor Diponegoro</title>
  </head>
  <style>
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
  <body>



    <!-- Content 1 -->
    <div
      class="d-flex container flex-row align-items-center justify-content-between m-4 py-5"
    >
      <div class="text-section flex flex-col space-y-6">
        <h1 class="fs-1 fw-bold leading-tight">
          SIMAKS<span class="text-success"> SMK Diponegoro</span>
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed text-balance">
          Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
          berprestasi di segala bidang yang dapat bersaing di dunia
          internasional.
        </p>

        <a class="btn btn-success ms-auto py-2 fs-5 mb-4" href="/login">Masuk</a>

        <div class="d-flex align-items-center justify-content-start space-x-2">
          <p class="text-gray-600 me-2">We are on Social Media :</p>
          <a href="#" class="text-black text-xl"
            ><i class="fab fa-facebook-f mx-1"></i
          ></a>
          <a href="#" class="text-black text-xl"
            ><i class="fab fa-twitter mx-1"></i
          ></a>
          <a href="#" class="text-black text-xl"
            ><i class="fab fa-instagram mx-1"></i
          ></a>
          <a href="#" class="text-black text-xl"
            ><i class="fab fa-youtube mx-1"></i
          ></a>
        </div>
      </div>

      <!-- image -->
      <div class="d-flex justify-content-center d-none d-sm-block">
        <img
          src="{{asset('images/workshop-tik.jpg')}}"
          alt="School Corridor"
          class="rounded-2xl shadow-lg"
          style="width: 300px; height:400px;"
        />
      </div>
    </div>

    <br /><br /><br /><br /><br><br>
    <!-- content 2 -->
    <div class="text-center my-4" id="fasilitas">
      <h1 class="fw-bold">
        Kenapa harus SIMAKS<span class="text-success">
          SMK Diponegoro ?
        </span>
      </h1>
      <h6 class="text-secondary m-4">
        Alasan kenapa harus memilih untuk bergabung dengan SIMAKS SMK
        Diponegoro.
      </h6>
    </div>

    <div class="container py-5">
      <div class="row text-center">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card p-4">
            <div class="icon mb-3">
              <i class="fas fa-desktop"></i>
            </div>
            <h5>Fasilitas Lengkap</h5>
            <p class="text-muted">Penunjang belajar dengan kualitas terbaik</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card p-4">
            <div class="icon mb-3">
              <i class="fas fa-building"></i>
            </div>
            <h5>Lingkungan Nyaman</h5>
            <p class="text-muted">Berada di lingkungan yang nyaman dan asri</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card p-4">
            <div class="icon mb-3">
              <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <h5>Pengajar Kompeten</h5>
            <p class="text-muted">Guru terbaik dengan pengalaman</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card p-4">
            <div class="icon mb-3">
              <i class="fas fa-handshake"></i>
            </div>
            <h5>Kerja Sama Luas</h5>
            <p class="text-muted">Dapat kesempatan kerja yang lebih terjamin</p>
          </div>
        </div>
      </div>
    </div>

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
          <img
            src="{{ asset('images/diponegoro.jpg') }}"
            class="d-flex mx-auto "
            alt="Kepala Sekolah"
          />
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
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 justify-content-center"
      >
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-network-wired fa-2x mb-3"></i>
              <h5 class="card-title">Teknik Komputer Dan Jaringan</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-hotel fa-2x mb-3"></i>
              <h5 class="card-title">Perhotelan</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-laptop-code fa-2x mb-3"></i>
              <h5 class="card-title">Rekayasa perangkat lunak</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-drafting-compass fa-2x mb-3"></i>
              <h5 class="card-title">Arsitektur</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-microchip fa-2x mb-3"></i>
              <h5 class="card-title">Teknik Elektronika Industri</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-video fa-2x mb-3"></i>
              <h5 class="card-title">Teknik Audio Video</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-bolt fa-2x mb-3"></i>
              <h5 class="card-title">Teknik Instalasi Tenaga Listrik</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-car fa-2x mb-3"></i>
              <h5 class="card-title">Kendaraan Ringan Otomotif</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-building fa-2x mb-3"></i>
              <h5 class="card-title">Pemodelan dan Informasi Bangunan</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center bg-success text-white h-100">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <i class="fas fa-wrench fa-2x mb-3"></i>
              <h5 class="card-title">Teknik Pengelasan</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br /><br /><br />
    <!-- content 5 -->
    <div class="teal" id="ekstrakulikuler">
      <div class="text-center my-4">
        <h1 class="fw-bold mt-2">
          Ekstrakulikuler di
          <span class="text-success"> SMK Diponegoro ? </span>
        </h1>
        <h6 class="text-secondary m-4">
          Pilihan Ekstrakulikuler di SMK Diponegoro
        </h6>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center"
          >
            <div class="card p-3 shadow" style="width: 18rem">
              <div class="card-body text-center">
                <div class="mb-3">
                  <i class="fas fa-award fa-3x"></i>
                  <!-- Ganti dengan ikon yang sesuai -->
                </div>
                <h5 class="card-title fw-bold">Praja Muda Karana</h5>
                <p class="card-text">Pertama kali dibentuk team tahun 2002</p>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center"
          >
            <div class="card p-3 shadow" style="width: 18rem">
              <div class="card-body text-center">
                <div class="mb-3">
                  <i class="fas fa-first-aid fa-3x text-danger"></i>
                  <!-- Ganti dengan ikon yang sesuai -->
                </div>
                <h5 class="card-title fw-bold">Palang Merah Remaja</h5>
                <p class="card-text">Pertama kali dibentuk team tahun 2003</p>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center"
          >
            <div class="card p-3 shadow" style="width: 18rem">
              <div class="card-body text-center">
                <div class="mb-3">
                  <i class="fas fa-mountain fa-3x text-success"></i>
                  <!-- Ganti dengan ikon yang sesuai -->
                </div>
                <h5 class="card-title fw-bold">Pecinta Alam</h5>
                <p class="card-text">Pertama kali dibentuk team tahun 2008</p>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center"
          >
            <div class="card p-3 shadow" style="width: 18rem">
              <div class="card-body text-center">
                <div class="mb-3">
                  <i class="fas fa-video fa-3x text-info"></i>
                  <!-- Ganti dengan ikon yang sesuai -->
                </div>
                <h5 class="card-title fw-bold">Sinematografi</h5>
                <p class="card-text">Pertama kali dibentuk team tahun 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
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
          <p>All right reserved @2024</p>
        </div>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
