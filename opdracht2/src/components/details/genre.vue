<template>

    <ion-content class="ion-padding">
        <ion-list>
            <ion-item v-for="(field, index) in fields" :key="index">
                <ion-label position="stacked">{{ field.label }}</ion-label>
                <ion-input v-model="selectedGenre[field.model]"></ion-input>
            </ion-item>
        </ion-list>
        <ion-button @click="saveGenre">Save</ion-button>
        <ion-button @click="closeModal">Close</ion-button>
    </ion-content>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import { IonButton, IonInput, IonContent, IonLabel, IonItem, IonList } from "@ionic/vue";
import axios from "axios";

// Define props
const props = defineProps<{
    genre: Genre;
}>();

// Define emits
const emit = defineEmits<{
    (e: 'close'): void;
}>();

// Initialize selectedGenre
const selectedGenre = ref<Genre>({
    id: 0,
    name: '',
});

// Define fields for the form
const fields: { label: string, model: keyof Genre }[] = [
    { label: 'Name', model: 'name' },
];

// Save genre function
const saveGenre = async () => {
    await axios.post("https://wm.ziasserver.com/api/edit/genre", {
        id: selectedGenre.value.id,
        name: selectedGenre.value.name
    },
        { headers: { 'Content-Type': 'application/json' } }
    );
    // TODO reload genres
    emit('close'); // Emit close event to parent component
};

// Close modal function
const closeModal = () => {
    emit('close'); // Emit close event to parent component
};

// Watch for props update to reflect in selectedGenre
watch(() => props.genre, (newGenre) => {
    selectedGenre.value = { ...newGenre };
}, { immediate: true });

// Define Genre interface
interface Genre {
    id: number;
    name: string;
}
</script>
