<template>
<b-container fluid class="px-4">
    <!-- Bagian Pengajar -->
    <b-row class="my-4 align-items-center">
        <b-col>
            <h2 class="mb-0 ml-3">Pengajar</h2>
        </b-col>
        <b-col class="text-right d-flex align-items-center justify-content-end">
            <b-button variant="light" size="sm" class="rounded-circle">
                <b-icon icon="plus" font-scale="1.5">+</b-icon>
            </b-button>
        </b-col>
    </b-row>

    <b-list-group class="mb-5">
        <b-list-group-item v-for="(teacher, index) in teachers" :key="index" class="border-0 py-2 d-flex align-items-center">
            <b-avatar :src="teacher.avatar" size="3rem" class="mr-3 rounded-circle"></b-avatar>
            <div>
                <div class="font-weight-bold">{{ teacher.name }}</div>
                <div class="text-muted small"></div>
            </div>
        </b-list-group-item>
        <hr class="my-4" />
    </b-list-group>

    <!-- Bagian Siswa -->
    <b-row class="my-4 align-items-center">
        <b-col>
            <h2 class="mb-0 ml-3">Siswa</h2>
        </b-col>
        <b-col class="text-right d-flex align-items-center justify-content-end">
            <span class="text-muted mr-3 ml-3">{{ students.length }} siswa</span>
            <b-button variant="light" size="sm" class="rounded-circle">
                <b-icon icon="plus" font-scale="1.5">+</b-icon>
            </b-button>
        </b-col>
    </b-row>

    <b-list-group>
        <b-list-group-item v-for="(student, index) in students" :key="index" class="border-0 py-3 d-flex align-items-center">
            <b-avatar :src="student.avatar" size="3rem" class="mr-3 rounded-circle"></b-avatar>
            <div>
                <div class="font-weight-bold">{{ student.name }}</div>
                <div class="text-muted small">{{ student.kelas }}</div>
            </div>
        </b-list-group-item>
        <hr class="my-4" />
    </b-list-group>
</b-container>
</template>

<script>
export default {
    props: {
        pd: {
            type: Array,
            default: () => [],
        },
        guru: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            pembelajaranId: null,
            teachers: [],
            students: [], // Initialize as an empty array
        };
    },
    created() {
        this.pembelajaranId = this.$route.query.pembelajaranId;
        this.loadPostsData(this.pembelajaranId);
    },
    methods: {
        async loadPostsData(pembelajaran_id) {
            try {
                this.isBusy = true;
                const response = await this.$http.get("/getSiswa", {
                    params: {
                        semester_id: this.user.semester.semester_id,
                        pembelajaran_id: pembelajaran_id,
                    },
                });

                // Map the student data
                this.students = response.data.peserta_didik.map((student) => ({
                    name: student.nama,
                    kelas: student.kelas,
                    avatar: student.avatar,
                }));

                // Map the teacher data
                const guruData = Array.isArray(response.data.guru) ?
                    response.data.guru :
                    [response.data.guru];

                this.teachers = guruData.map((teacher) => ({
                    name: teacher.nama_lengkap || "Nama tidak tersedia",
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.isBusy = false;
            }
        },
    },
};
</script>

<style scoped>
.list-group-item {
    border-bottom: 1px solid #dee2e6;
}

.list-group-item:hover {
    background-color: #f8f9fa;
}

.b-avatar {
    border-radius: 50%;
}

hr {
    border: 0;
    border-top: 1px solid #dee2e6;
    margin: 0;
}
</style>
