<template>
    <ion-list>
        <ion-item-sliding v-for="genre in genres" :key="genre.id">
            <ion-item>
                <ion-icon :icon="genreIcon" slot="start"></ion-icon>
                <ion-label>{{ genre.name }}</ion-label>
            </ion-item>
            <ion-item-options side="start">
                <ion-item-option @click="deleteGenre(genre)" color="danger">
                    <ion-icon :icon="removeCircleOutline"></ion-icon>
                </ion-item-option>
            </ion-item-options>
            <ion-item-options side="end">
                <ion-item-option @click="togglePopup(genre)">
                    <ion-icon :icon="pencilOutline"></ion-icon>
                </ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
</template>

<script setup lang="ts"> 
import axios from "axios";
import { ref, onMounted } from "vue";
import { pencilOutline, removeCircleOutline } from "ionicons/icons";
import genreIcon from "@/components/icons/genre.svg";
import { IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption } from '@ionic/vue';

const deleteGenre = async (genre: Genre) => {
    try {
        await axios.post("https://wm.ziasserver.com/api/delete/genre", { body: genre.id });
        genres.value = genres.value.filter((g) => g.id !== genre.id);
    } catch (error) {
        console.error("Error deleting genre:", error);
    }
};

const togglePopup = (genre: Genre) => {
    genre.popup = !genre.popup;
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

interface Author {
    id: number;
    firstName: string;
    lastName: number;
    birthYear: number;
    popup?: boolean;
}
interface Genre {
    id: number;
    name: string;
    popup?: boolean;
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
