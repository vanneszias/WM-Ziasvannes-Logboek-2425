<template>
    <ion-list>
        <ion-item v-for="book in books" :key="book.id">
            <ion-icon :icon="bookOutline" slot="start"></ion-icon>
            <ion-label>{{ book.title }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { bookOutline } from "ionicons/icons";

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

const books = ref<Book[]>([]);

const fetchBooks = async () => {
    try {
        const response = await axios.get(
            "https://wm.ziasserver.com/api/list/books"
        );
        books.value = response.data as Book[];
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

onMounted(() => {
    fetchBooks();
});
</script>
