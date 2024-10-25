<template>
    <ion-content class="ion-padding">
        <ion-list>
            <ion-item v-for="(field, index) in fields" :key="index">
                <ion-label position="stacked">{{ field.label }}</ion-label>
                <ion-input v-model="selectedAuthor[field.model]"></ion-input>
            </ion-item>
        </ion-list>
        <ion-button @click="saveAuthor">Save</ion-button>
        <ion-button @click="closeModal">Close</ion-button>
    </ion-content>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import { IonButton, IonInput, IonContent, IonLabel, IonItem, IonList } from "@ionic/vue";
import axios from "axios";

// Define props
const props = defineProps<{
    author: Author;
}>();

// Define emits
const emit = defineEmits<{
    (e: 'close'): void;
}>();

// Initialize selectedAuthor
const selectedAuthor = ref<Author>({
    id: 0,
    firstName: '',
    lastName: '',
    birthYear: 0
});

// Define fields for the form
const fields: { label: string, model: keyof Author }[] = [
    { label: 'First Name', model: 'firstName' },
    { label: 'Last Name', model: 'lastName' },
    { label: 'Birth Year', model: 'birthYear' }
];

// Save author function
const saveAuthor = async () => {
    await axios.post("https://wm.ziasserver.com/api/edit/author", {
        id: selectedAuthor.value.id,
        firstName: selectedAuthor.value.firstName,
        lastName: selectedAuthor.value.lastName,
        birthYear: selectedAuthor.value.birthYear
    },
        { headers: { 'Content-Type': 'application/json' } }
    );
    // TODO reload authors
    emit('close'); // Emit close event to parent component
};

// Close modal function
const closeModal = () => {
    emit('close'); // Emit close event to parent component
};

// Watch for props update to reflect in selectedAuthor
watch(() => props.author, (newAuthor) => {
    selectedAuthor.value = { ...newAuthor };
}, { immediate: true });

// Define Author interface
interface Author {
    id: number;
    firstName: string;
    lastName: string;
    birthYear: number;
}
</script>