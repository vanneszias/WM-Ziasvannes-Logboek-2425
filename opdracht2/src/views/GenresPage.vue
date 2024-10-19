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

      <ion-list>
        <ion-item>
          <ion-icon :icon="notifications" slot="start"></ion-icon>
          <ion-label>Genre 1</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="notifications" slot="start"></ion-icon>
          <ion-label>Genre 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="notifications" slot="start"></ion-icon>
          <ion-label>Genre 3</ion-label>
        </ion-item>
      </ion-list>
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
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { notifications } from "ionicons/icons";
</script>
