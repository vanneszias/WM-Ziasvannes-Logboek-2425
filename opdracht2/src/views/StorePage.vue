<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Store</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Store</ion-title>
        </ion-toolbar>
      </ion-header>
      <FormAddProduct />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import FormAddProduct from "@/components/FormAddProduct.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
</script>
