<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Authors</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Authors</ion-title>
        </ion-toolbar>
      </ion-header>
      <authors />
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
import authors from "@/components/list/authors.vue";
</script>
