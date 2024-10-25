<template>
    <ion-list>
        <ion-item-sliding v-for="author in authors" :key="author.id">
            <ion-item>
                <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
                <ion-label>{{ author.firstName }} {{ author.lastName }}</ion-label>
            </ion-item>
            <ion-item-options side="start">
                <ion-item-option @click="deleteAuthor(author)" color="danger">
                    <ion-icon :icon="removeCircleOutline"></ion-icon>
                </ion-item-option>
            </ion-item-options>
            <ion-item-options side="end">
                <ion-item-option @click="togglePopup(author)">
                    <ion-icon :icon="pencilOutline"></ion-icon>
                </ion-item-option>
            </ion-item-options>
            <ion-modal class="ion-margin-top" :is-open="author.popup" @didDismiss="author.popup = false">
                <AuthorDetails @close="togglePopup(author)" :author="author" />
            </ion-modal>
        </ion-item-sliding>
    </ion-list>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { personCircleOutline, pencilOutline, removeCircleOutline } from "ionicons/icons";
import { IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonModal } from '@ionic/vue';
import AuthorDetails from "@/components/details/author.vue";

const deleteAuthor = async (author: Author) => {
    try {
        await axios.post("https://wm.ziasserver.com/api/delete/author", { body: author.id });
        authors.value = authors.value.filter((a) => a.id !== author.id);
    } catch (error) {
        console.error("Error deleting author:", error);
    }
};

const togglePopup = (author: Author) => {
    author.popup = !author.popup;
    // Emit an event or handle any additional logic here if needed
};

interface Author {
    id: number;
    firstName: string;
    lastName: string;
    birthYear: number;
    popup?: boolean;
}

const authors = ref<Author[]>([]);

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

onMounted(() => {
    fetchAuthors();
});
</script>
