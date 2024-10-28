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

    <ion-fab slot="fixed" vertical="bottom" horizontal="start">
        <ion-fab-button @click="showAddBookModal = true">
            <ion-icon :icon="addOutline"></ion-icon>
        </ion-fab-button>
    </ion-fab>
    <ion-modal :is-open="showAddBookModal" @didDismiss="showAddBookModal = false">
        <BookDetails
            @close="showAddBookModal = false, togglePopup({ id: 0, title: '', code: '', authorId: 0, genreId: 0, popup: true })"
            :book="{ id: 0, title: '', code: '', authorId: 0, genreId: 0 }" />
    </ion-modal>
</template>

<script setup lang="ts">
// Import necessary modules and components
import axios from "axios";
import { ref, onMounted, popScopeId } from "vue";
import { bookOutline, pencilOutline, removeCircleOutline, addOutline } from "ionicons/icons";
import { IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonModal, IonFab, IonFabButton } from '@ionic/vue';
import BookDetails from "@/components/details/book.vue";
import Book from "@/components/details/book.vue";

interface Book {
    id: number;
    title: string;
    code: string;
    authorId: number;
    genreId: number;
    popup?: boolean;
}

const books = ref<Book[]>([]);
const showAddBookModal = ref(false);

// Delete book function
const deleteBook = async (book: Book) => {
    try {
        await axios.post("https://wm.ziasserver.com/api/delete/book", book.id,
            { headers: { 'Content-Type': 'application/json' } }
        );

        books.value = books.value.filter((b) => b.id !== book.id);
    } catch (error) {
        console.error("Error deleting book:", error);
    }
};
// Toggle popup function and fetch books when closing popup
const togglePopup = (book: Book) => {
    book.popup = !book.popup;
    if (!book.popup) {
        fetchBooks();
    }
};

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

// Fetch books on component mounted
onMounted(() => {
    fetchBooks();
});
</script>
