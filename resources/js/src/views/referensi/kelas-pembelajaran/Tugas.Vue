<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-body">
                    <h2>Pembuatan Website</h2>
                    <p>AGUS TRIWIDIANTO • 29 Mei (Diedit 2 Jun)</p>
                    <p>100 poin</p>
                    <hr>
                    <p>Lampiran File:</p>
                    <p>Quizizz | Free Online Quizzes https://quizizz.com</p>
                    <hr>
                    <b-form-textarea id="input-with-placeholder" placeholder="Tambahkan komentar kelas" rows="3" max-rows="6"></b-form-textarea>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5>Tugas</h5>
                        <b-badge variant="success">Selesai</b-badge>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <b-button variant="primary">Tambah atau buat</b-button>
                        <b-button variant="primary">Tandai sebagai selesai</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import {
    BootstrapVue,
    BootstrapVueIcons
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
    name: 'WebsiteCreation',
    data() {
        return {
            // Data properties
        }
    }
}
</script>

<style>
/* Add any custom styles here */
</style>
