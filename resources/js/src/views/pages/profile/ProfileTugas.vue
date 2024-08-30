<template>
    <b-card no-body class="main-card">
        <b-overlay :show="isBusy" rounded opacity="0.6" size="lg" spinner-variant="primary">
            <b-card-body class="p-0">
                <div class="header-banner text-white p-4 mb-4">
                    <h1 class="mb-1">Kelas X RPL 2</h1>
                    <p class="mb-0">Pemrograman web</p>
                    <p class="mb-0">Dudung Dzulkifli</p>
                </div>

                <div class="container">
                    <b-row>
                        <b-col md="3">
                            <b-card class="sidebar-card mb-4 shadow-lg rounded-lg" :class="{'bg-light text-dark': !isDarkMode, 'bg-dark text-light': isDarkMode}">
                                <b-card-body>
                                    <h5 class="card-title font-weight-bold mb-2">
                                        Mendatang
                                    </h5>
                                    <p class="card-text">
                                        Hore, tidak ada tugas yang perlu segera diselesaikan!
                                    </p>
                                    <b-link href="#" class="font-weight-bold">
                                        Lihat semua
                                    </b-link>
                                </b-card-body>
                            </b-card>
                        </b-col>

                        <b-col md="9">
                            <b-col md="12">
                                <b-card class="mb-0 post-card shadow-sm rounded border-0">
                                    <b-card-body class="d-flex align-items-center">
                                        <b-img src="https://lh3.googleusercontent.com/a/ACg8ocLPS5kaZwaq3HcNkgRsgIOdS-Z_0x5irL74fZzP1raa6VTKkKWM=s40-c" rounded="circle" width="50" height="50" class="mr-3" alt="Avatar" />
                                        <b-form-input placeholder="Umumkan sesuatu kepada kelas Anda" class="rounded-pill flex-grow-1" aria-label="Announcement input" />
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <b-card class="mb-4 datatable-card">
                                <b-card-body>
                                    <datatable :isAsesor="isAsesor" :isBusy="isBusy" :items="items" :fields="fields" :meta="meta" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" />
                                </b-card-body>
                            </b-card>

                            <!-- <add-ptk @reload="handleReload" :title="Tambah Materi Baru" :link_excel="/excel/format_excel_materi.xlsx" :jenis_gtk="pengajar" /> -->
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
        BLink
    } from 'bootstrap-vue'
    import Datatable from '../../progress/Datatable.vue'
    import AddPtk from '../../referensi/modal/AddPtk.vue';
    import eventBus from '@core/utils/eventBus'

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
            Datatable,
            AddPtk,
        },
        data() {
            return {
                isAsesor: false,
                isBusy: false,
                fields: this.getFields(),
                items: this.getInitialItems(),
                meta: {},
                current_page: 1,
                per_page: 10,
                search: '',
                sortBy: 'date',
                sortByDesc: true,
            }
        },
        created() {
            this.loadPostsData()
            eventBus.$on('modal-materi', this.handleEvent)
        },
        methods: {
            getFields() {
                return [{
                        key: 'icon',
                        label: '',
                        thClass: 'd-none',
                        tdClass: 'icon-cell'
                    },
                    {
                        key: 'title',
                        label: 'Judul',
                        sortable: true
                    },
                    {
                        key: 'date',
                        label: 'Tanggal',
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: 'Aksi',
                        sortable: false,
                        thClass: 'text-center',
                        tdClass: 'text-center'
                    },
                ];
            },
            getInitialItems() {
                return [{
                        icon: '📄',
                        title: 'dudung zulkipli memposting materi baru: Section 3',
                        date: '13 Apr 2023',
                        actions: 'edit'
                    },
                    {
                        icon: '📄',
                        title: 'dudung zulkipli memposting materi baru: Section 2',
                        date: '13 Apr 2023',
                        actions: 'edit'

                    },
                    {
                        icon: '📄',
                        title: 'dudung zulkipli memposting materi baru: Section 1',
                        date: '13 Apr 2023',
                        actions: 'edit'
                    },
                ];
            },
            handleEvent() {
                eventBus.$emit('open-modal-ptk')
            },
            handleReload() {
                this.loadPostsData()
            },
            loadPostsData() {
                this.isBusy = true
                setTimeout(() => {
                    this.isBusy = false
                    this.meta = {
                        total: this.items.length,
                        current_page: this.current_page,
                        per_page: this.per_page,
                        from: 1,
                        to: this.items.length,
                    }
                }, 1000)
            },
            handlePerPage(val) {
                this.per_page = val
                this.loadPostsData()
            },
            handlePagination(val) {
                this.current_page = val
                this.loadPostsData()
            },
            handleSearch(val) {
                this.search = val
                this.loadPostsData()
            },
            handleSort(val) {
                if (val.sortBy) {
                    this.sortBy = val.sortBy
                    this.sortByDesc = val.sortDesc
                    this.loadPostsData()
                }
            },
        },
    }
    </script>

    <style scoped>
    .main-card {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: none;
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

    .icon-cell {
        width: 40px;
        text-align: center;
    }
    </style>
