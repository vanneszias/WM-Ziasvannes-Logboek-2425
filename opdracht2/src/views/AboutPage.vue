<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>About me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">About me</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-img :src="profilePicture" class="ion-margin"
                style="border-radius: 50%; width: 150px; height: 150px; overflow: hidden;" alt="Profile picture" />
            <h1 class="ion-padding">
                Zias van Nes
            </h1>
            <p class="ion-margin">
                Deze app is gemaakt voor het vak Web & Mobile. Het is een app waarin je boeken kunt toevoegen, bewerken
                en verwijderen. Ook kun je auteurs en genres toevoegen, bewerken en verwijderen. Dit project maakt
                gebruik van Ionic en Vue.</p>
            <p class="ion-margin">
                De app maakt gebruik van een REST API die is gemaakt voor een eerdere opdracht. De API maakt gebruik van
                NEXT.js en Prisma om een database te benaderen. De API is te vinden op <a
                    href="https://wm.ziasserver.com/" target="_blank">wm.ziasserver.com</a>
            </p>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg
} from "@ionic/vue";

import profilePicture from "@/components/icons/profilePic.jpg";
</script>
