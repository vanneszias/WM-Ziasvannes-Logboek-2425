<template>
    <ion-list>
        <ion-item-sliding v-for="book in books" :key="book.id">
            <ion-item>
                <ion-icon :icon="bookOutline" slot="start"></ion-icon>
                <ion-label>{{ book.title }}</ion-label>
            </ion-item>
            <ion-item-options side="start">
                <ion-item-option @click="deleteBook(book)" color="danger">
                    <ion-icon :icon="removeCircleOutline"></ion-icon>
                </ion-item-option>
            </ion-item-options>
            <ion-item-options side="end">
                <ion-item-option @click="togglePopup(book)">
                    <ion-icon :icon="pencilOutline"></ion-icon>
                </ion-item-option>
            </ion-item-options>
            <ion-modal class="ion-margin-top" :is-open="book.popup" @didDismiss="book.popup = false">
                <BookDetails @close="togglePopup(book)" :book="book" />
            </ion-modal>
        </ion-item-sliding>
    </ion-list>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { bookOutline, pencilOutline, removeCircleOutline } from "ionicons/icons";
import { IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonModal } from '@ionic/vue';
import BookDetails from "@/components/details/book.vue";

const deleteBook = async (book: Book) => {
    try {
        await axios.post("https://wm.ziasserver.com/api/delete/book", { body: book.id });
        books.value = books.value.filter((b) => b.id !== book.id);
    } catch (error) {
        console.error("Error deleting book:", error);
    }
};

const togglePopup = (book: Book) => {
    book.popup = !book.popup;
    // Emit an event or handle any additional logic here if needed
};

interface Book {
    id: number;
    title: string;
    code: string;
    authorId: number;
    genreId: number;
    popup?: boolean;
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
