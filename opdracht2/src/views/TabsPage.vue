<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="books" href="/tabs/books">
          <ion-icon aria-hidden="true" :icon="book" />
          <ion-label>Books</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="authors" href="/tabs/authors">
          <ion-icon aria-hidden="true" :icon="peopleCircleOutline" />
          <ion-label>Authors</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="genres" href="/tabs/genres">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Genres</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { book, peopleCircleOutline, square } from "ionicons/icons";
</script>
