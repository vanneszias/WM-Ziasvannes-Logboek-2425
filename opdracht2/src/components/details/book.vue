<template>
    <ion-content class="ion-padding">
        <ion-list>
            <ion-item v-for="(field, index) in fields" :key="index">
                <ion-label position="stacked">{{ field.label }}</ion-label>
                <ion-input v-model="selectedBook[field.model]"></ion-input>
            </ion-item>
        </ion-list>
        <ion-button @click="saveBook">Save</ion-button>
        <ion-button @click="closeModal">Close</ion-button>
    </ion-content>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import { IonButton, IonInput, IonContent, IonLabel, IonItem, IonList } from "@ionic/vue";

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
const saveBook = () => {
    console.log("Saving book", selectedBook.value);
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
    title: string;
    code: string;
    authorId: number;
    genreId: number;
}
</script>
