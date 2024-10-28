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
          <ion-icon aria-hidden="true" :icon="genreIcon" />
          <ion-label>Genres</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="about" href="/tabs/about">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
          <ion-label>About</ion-label>
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
import { book, peopleCircleOutline, personCircleOutline } from "ionicons/icons";
import genreIcon from "@/components/icons/genres.svg";
</script>
