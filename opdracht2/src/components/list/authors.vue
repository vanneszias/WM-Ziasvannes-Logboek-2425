<template>
    <ion-list>
        <ion-item v-for="author in authors" :key="author.id">
            <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
            <ion-label>{{ author.firstName.at(0) + ". " + author.lastName }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { personCircleOutline } from "ionicons/icons";

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

const authors = ref<Author[]>([]);

const fetchAuthors = async () => {
    try {
        const response = await axios.get(
            "https://wm.ziasserver.com/api/list/authors"
        );
        authors.value = response.data as Author[];
    } catch (error) {
        console.error("Error fetching authors:", error);
    }
};

onMounted(() => {
    fetchAuthors();
});
</script>
