<template>
    <ion-list>
        <ion-item v-for="genre in genres" :key="genre.id">
            <ion-icon :icon="notifications" slot="start"></ion-icon>
            <ion-label>{{ genre.name }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { notifications } from "ionicons/icons";

interface Book {
    id: number;
    title: string;
    code: string;
    authorId: number;
    genreId: number;
    popup?: boolean;
}

interface Author {
    id: number;
    firstName: string;
    lastName: number;
    birthYear: number;
}
interface Genre {
    id: number;
    name: string;
}

const genres = ref<Genre[]>([]);

const fetchGenres = async () => {
    try {
        const response = await axios.get(
            "https://wm.ziasserver.com/api/list/genres"
        );
        genres.value = response.data as Genre[];
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
};

onMounted(() => {
    fetchGenres();
});
</script>
