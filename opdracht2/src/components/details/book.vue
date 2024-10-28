<template>
    <ion-content class="ion-padding">
        <ion-item v-for=" (field, index) in fields" :key="index">
            <ion-label position="stacked">{{ field.label }}</ion-label>
            <!--Title and ISBN textbox-->
            <ion-input v-if="field.model !== 'authorId' && field.model !== 'genreId'"
                v-model="selectedBook[field.model]"></ion-input>
            <!--Author and genre picker-->
            <ion-picker v-if="field.model === 'authorId' || field.model === 'genreId'"
                :columns="field.model === 'authorId' ? authors : genres" @ionChange="pickerChange">
                <ion-picker-column v-if="field.model === 'authorId'" :value="selectedBook.authorId" id="author">
                    <ion-picker-column-option v-for="author in authors" :value="author.id">
                        {{ author.firstName }} {{ author.lastName }}
                    </ion-picker-column-option>
                </ion-picker-column>
                <ion-picker-column v-if="field.model === 'genreId'" :value="selectedBook.genreId" id="genre">
                    <ion-picker-column-option v-for="genre in genres" :value="genre.id">
                        {{ genre.name }}
                    </ion-picker-column-option>
                </ion-picker-column>
            </ion-picker>
        </ion-item>
        <ion-button @click="saveBook">Save</ion-button>
        <ion-button @click="closeModal">Close</ion-button>
    </ion-content>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits, onMounted } from "vue";
import { IonButton, IonInput, IonContent, IonLabel, IonItem, IonPicker, IonPickerColumn, IonPickerColumnOption } from "@ionic/vue";
import axios from "axios";

// Define interfaces
interface Book {
    id: number;
    title: string;
    code: string;
    authorId: number;
    genreId: number;
}
interface Author {
    id: number;
    firstName: string;
    lastName: string;
    birthYear: number;
    popup?: boolean;
}
interface Genre {
    id: number;
    name: string;
    popup?: boolean;
}

const authors = ref<Author[]>([]);
const genres = ref<Genre[]>([]);

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

// Fetch authors and genres on component mount
onMounted(() => {
    fetchAuthors();
    fetchGenres();
});

const pickerChange = (e: CustomEvent) => {
    // Get selected value and column and update selectedBook
    const value = e.detail.value;
    const column = (e.target as HTMLElement).id;

    if (column === 'author') {
        selectedBook.value.authorId = value;
    } else if (column === 'genre') {
        selectedBook.value.genreId = value;
    }
};

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
    { label: 'ISBN', model: 'code' },
    { label: 'Author ID', model: 'authorId' },
    { label: 'Genre ID', model: 'genreId' }
];

// Save book function
const saveBook = async () => {
    if (selectedBook.value.id === 0) {
        // Add new book
        await axios.post("https://wm.ziasserver.com/api/create/book", {
            title: selectedBook.value.title,
            code: selectedBook.value.code,
            author: selectedBook.value.authorId,
            genre: selectedBook.value.genreId
        },
            { headers: { 'Content-Type': 'application/json' } }
        );
    } else {
        // Edit existing book
        await axios.post("https://wm.ziasserver.com/api/edit/book", {
            id: selectedBook.value.id,
            title: selectedBook.value.title,
            code: selectedBook.value.code,
            authorId: selectedBook.value.authorId,
            genreId: selectedBook.value.genreId
        },
            { headers: { 'Content-Type': 'application/json' } }
        );
    }
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
</script>
