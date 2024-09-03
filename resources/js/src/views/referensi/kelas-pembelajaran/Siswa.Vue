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
        <b-list-group-item v-for="teacher in teachers" :key="teacher.id" class="border-0 py-3 d-flex align-items-center">
            <b-avatar :src="teacher.avatar" size="3rem" class="mr-3 rounded-circle"></b-avatar>
            <div>
                <div class="font-weight-bold">{{ teacher.name }}</div>
                <div class="text-muted small">{{ teacher.email }}</div>
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
        <b-list-group-item v-for="student in students" :key="student.id" class="border-0 py-3 d-flex align-items-center">
            <b-avatar :src="student.avatar" size="3rem" class="mr-3 rounded-circle"></b-avatar>
            <div>
                <div class="font-weight-bold">{{ student.name }}</div>
                <div class="text-muted small">{{ student.email }}</div>
            </div>
        </b-list-group-item>
        <hr class="my-4" />
    </b-list-group>
</b-container>
</template>

<script>
export default {
    data() {
        return {
            teachers: [{
                id: 1,
                name: 'Andika Supriyadi Nur Maulana',
                email: 'andika@example.com',
                avatar: 'https://plus.unsplash.com/premium_photo-1713800447758-19ceb4931073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
            }, ],
            students: [{
                    id: 1,
                    name: 'Dudi Dwi Raharjo',
                    email: 'dudi@example.com',
                    avatar: 'https://plus.unsplash.com/premium_photo-1713800447758-19ceb4931073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                },
                {
                    id: 2,
                    name: 'ahmad_032',
                    email: 'ahmad@example.com',
                    avatar: 'https://plus.unsplash.com/premium_photo-1713800447758-19ceb4931073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                },
                {
                    id: 3,
                    name: 'Fitri Adelia',
                    email: 'fitri@example.com',
                    avatar: 'https://plus.unsplash.com/premium_photo-1713800447758-19ceb4931073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                },
                {
                    id: 4,
                    name: 'Eliyah Aja',
                    email: 'eliyah@example.com',
                    avatar: 'https://plus.unsplash.com/premium_photo-1713800447758-19ceb4931073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                },
                {
                    id: 5,
                    name: 'Navy Alikha',
                    email: 'navy@example.com',
                    avatar: 'https://plus.unsplash.com/premium_photo-1713800447758-19ceb4931073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                },
            ]
        }
    }
}
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
