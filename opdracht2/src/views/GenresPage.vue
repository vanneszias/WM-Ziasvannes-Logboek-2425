<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Genres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Genres</ion-title>
        </ion-toolbar>
      </ion-header>
      <genres />
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
} from "@ionic/vue";
import genres from "@/components/list/genres.vue";
</script>
