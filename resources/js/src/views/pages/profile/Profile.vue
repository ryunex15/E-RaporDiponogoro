<template>
<div v-if="Object.keys(profileData).length" id="user-profile">
    <profile-header :header-data="profileData.header" @tab="handleTab" :tab-index="activeTab" />
    <!-- profile info  -->
    <section id="profile-info">
        <b-row>
            <b-col lg="3" cols="12" order="2" order-lg="1">
                <profile-about :about-data="profileData.pd" />
            </b-col>
            <b-col lg="9" cols="12" order="1" order-lg="2">
                <profile-pembelajaran :pd="profileData.pd" :kelas="profileData.pd.kelas" v-if="activeTab === 0" @nilai="handleNilai" @tugas="handleTugas" />
                <profile-biodata :bio-data="profileData.pd" v-if="activeTab === 1" :form="form" :pekerjaan="pekerjaan" />
                <profile-nilai :semester="semester" :pd="profileData.pd" v-if="activeTab === 2" :pembelajaran_id="pembelajaran_id" @kembali="handleKembali" />
                <profile-teman :semester="semester" :pd="profileData.pd" v-if="activeTab === 3" />
                <!-- <profile-tugas :semester="semester" :pd="profileData.pd" v-if="activeTab === 4" :tugas-data="tugasData" @tugas="handleTugas" /> -->
                <profile-tugas :semester="semester" :pd="profileData.pd" v-if="activeTab === 4" :pembelajaran_id="pembelajaran_id" :tugas="data.tugas" :pembelajaran="profileData.pembelajaran"  @tugas="handleTugas" />
            </b-col>
        </b-row>
    </section>
    <!--/ profile info  -->
</div>
</template>


<script>
import {
    BRow,
    BCol
} from 'bootstrap-vue'

import ProfileHeader from './ProfileHeader.vue'
import ProfileAbout from './ProfileAbout.vue'
import ProfilePembelajaran from './ProfilePembelajaran.vue'
import ProfileTugas from './ProfileTugas.vue'
import ProfileBiodata from './ProfileBiodata.vue'
import ProfileNilai from './ProfileNilai.vue'
import ProfileTeman from './ProfileTeman.vue'

/* eslint-disable global-require */
export default {
    components: {
        BRow,
        BCol,

        ProfileHeader,
        ProfileAbout,
        ProfilePembelajaran,
        ProfileBiodata,
        ProfileNilai,
        ProfileTeman,
        ProfileTugas,
    },
    data() {
        return {
            profileData: {},
            activeTab: 0,
            form: {
                peserta_didik_id: '',
                status: '',
                anak_ke: '',
                diterima_kelas: '',
                email: '',
                nama_wali: '',
                alamat_wali: '',
                telp_wali: '',
                kerja_wali: '',
            },
            pekerjaan: [],
            pembelajaran_id: '',
            semester: [],
            data: [],
            pembelajaran: {},
        }
    },
    created() {

        this.loadPostsData()

    },
    methods: {
        handleEvent() {
            this.loadPostsData(pembelajaran_id)
        },
        loadPostsData(pembelajaran_id) {
            this.$http.get('/users/profil-pd', {
                params: {
                    semester_id: this.user.semester.semester_id,
                    pembelajaran_id: pembelajaran_id
                }
            }).then(res => {
                let data = res.data.pembelajaran;
                console.log(data);
                this.profileData = res.data
                this.pembelajaran = this.profileData.pembelajaran
                this.pekerjaan = this.profileData.pekerjaan
                this.semester = this.profileData.semester
                // this.topikTugas = this.profileData.topikTugas
                this.form.peserta_didik_id = this.profileData.pd.peserta_didik_id
                this.form.status = this.profileData.pd.status
                this.form.anak_ke = this.profileData.pd.anak_ke
                this.form.diterima_kelas = this.profileData.pd.diterima_kelas
                this.form.email = this.profileData.pd.email
                this.form.nama_wali = this.profileData.pd.nama_wali
                this.form.alamat_wali = this.profileData.pd.alamat_wali
                this.form.telp_wali = this.profileData.pd.telp_wali
                this.form.kerja_wali = this.profileData.pd.kerja_wali

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
                        this.data = response.data

                        this.tugas = getData.tugas.map((item, index) => ({
                            id : index + 1,
                            tugas_id: item.tugas_id,
                            judul: item.judul, // judul tugas
                            tanggal: item.deadline, // deadline
                            topik: item['topik_tugas'].judul_topik, // topik tugas
                        }));
                        console.log("tugas mapping:", this.tugas);

                        // this.meta = {
                        //     total: getData.total,
                        //     current_page: getData.current_page,
                        //     per_page: getData.per_page,
                        //     from: getData.from,
                        //     to: getData.to,
                        //     role_id: this.role_id,
                        //     roles: response.data.roles,
                        // };

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
                        total: this.data.tugas.length,
                        current_page: this.current_page,
                        per_page: this.per_page,
                        from: 1,
                        to: this.data.tugas.length,
                    };
                }, 1000);
        },
        handleTab(idx) {
            this.activeTab = idx
        },
        handleNilai(pembelajaran_id) {
            this.pembelajaran_id = pembelajaran_id
            this.activeTab = 2
        },
        handleTugas(pembelajaran_id) {
            this.pembelajaran_id = pembelajaran_id
            this.loadPostsData(pembelajaran_id)
            console.log(pembelajaran_id)
            this.activeTab = 4
        },
        handleKembali() {
            this.pembelajaran_id = ''
            this.activeTab = 0
        },
    },
}
/* eslint-disable global-require */
</script>


<style lang="scss">
@import '~@resources/scss/vue/pages/page-profile.scss';
@import '~@resources/scss/vue/libs/vue-sweetalert.scss';
</style>
