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
      <ion-list>
        <ion-item>
          <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
          <ion-label>Author 1</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
          <ion-label>Author 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="personCircleOutline" slot="start"></ion-icon>
          <ion-label>Author 1</ion-label>
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
import { personCircleOutline } from "ionicons/icons";
</script>
