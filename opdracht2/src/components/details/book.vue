<template>
    <ion-content class="ion-padding">
        <ion-item v-for=" (field, index) in fields" :key="index">
            <ion-label position="stacked">{{ field.label }}</ion-label>
            <ion-input v-model="selectedBook[field.model]"></ion-input>
        </ion-item>
        <ion-button @click="saveBook">Save</ion-button>
        <ion-button @click="closeModal">Close</ion-button>
    </ion-content>
</template>

<style></style>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import { IonButton, IonInput, IonContent, IonLabel, IonItem } from "@ionic/vue";
import axios from "axios";

// Define props
const props = defineProps<{
    book: Book;
}>();

// Define emits
const emit = defineEmits<{
    (e: 'close'): void;
}>();

// Initialize selectedBook
const selectedBook = ref<Book>({
    id: 0,
    title: '',
    code: '',
    authorId: 0,
    genreId: 0
});

// Define fields for the form
const fields: { label: string, model: keyof Book }[] = [
    { label: 'Title', model: 'title' },
    { label: 'Code', model: 'code' },
    { label: 'Author ID', model: 'authorId' },
    { label: 'Genre ID', model: 'genreId' }
];

// Save book function
const saveBook = async () => {
    await axios.post("https://wm.ziasserver.com/api/edit/book", {
        id: selectedBook.value.id,
        title: selectedBook.value.title,
        code: selectedBook.value.code,
        authorId: selectedBook.value.authorId,
        genreId: selectedBook.value.genreId
    },
        { headers: { 'Content-Type': 'application/json' } }
    );
    // TODO reload books
    emit('close'); // Emit close event to parent component
};

// Close modal function
const closeModal = () => {
    emit('close'); // Emit close event to parent component
};

// Watch for props update to reflect in selectedBook
watch(() => props.book, (newBook) => {
    selectedBook.value = { ...newBook };
}, { immediate: true });

// Define Book interface
interface Book {
    id: number;
    title: string;
    code: string;
    authorId: number;
    genreId: number;
}
</script>
