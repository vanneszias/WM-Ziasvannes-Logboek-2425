<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cart</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cart</ion-title>
        </ion-toolbar>
      </ion-header>
      <ListProducts />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import ListProducts from "@/components/ListProducts.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
</script>
