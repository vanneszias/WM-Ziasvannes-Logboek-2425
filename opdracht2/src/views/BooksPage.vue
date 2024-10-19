<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Books</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Books</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-icon :icon="book" slot="start"></ion-icon>
          <ion-label> Book 1 </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="book" slot="start"></ion-icon>
          <ion-label>Book 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="book" slot="start"></ion-icon>
          <ion-label>Book 3</ion-label>
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
import { book } from "ionicons/icons";
</script>
