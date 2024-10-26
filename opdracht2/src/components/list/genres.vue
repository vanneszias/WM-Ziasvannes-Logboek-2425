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
            <ion-modal class="ion-margin-top" :is-open="genre.popup" @didDismiss="genre.popup = false">
                <GenreDetails @close="togglePopup(genre)" :genre="genre" />
            </ion-modal>
        </ion-item-sliding>
    </ion-list>
    <ion-fab slot="fixed" vertical="bottom" horizontal="start">
        <ion-fab-button @click="showAddGenreModal = true">
            <ion-icon :icon="addOutline"></ion-icon>
        </ion-fab-button>
    </ion-fab>
    <ion-modal :is-open="showAddGenreModal" @didDismiss="showAddGenreModal = false">
        <GenreDetails @close="showAddGenreModal = false, togglePopup({ id: 0, name: '', popup: true })"
            :genre="{ id: 0, name: '' }" />
    </ion-modal>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { pencilOutline, removeCircleOutline, addOutline } from "ionicons/icons";
import genreIcon from "@/components/icons/genre.svg";
import { IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonModal, IonFab, IonFabButton } from '@ionic/vue';
import GenreDetails from "@/components/details/genre.vue";

const deleteGenre = async (genre: Genre) => {
    try {
        await axios.post("https://wm.ziasserver.com/api/delete/genre", {
            id: genre.id
        },
            { headers: { 'Content-Type': 'application/json' } }
        );

        genres.value = genres.value.filter((g) => g.id !== genre.id);
    } catch (error) {
        console.error("Error deleting genre:", error);
    }
};

const togglePopup = (genre: Genre) => {
    genre.popup = !genre.popup;
    if (!genre.popup) {
        fetchGenres();
    }
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
const showAddGenreModal = ref(false);

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
