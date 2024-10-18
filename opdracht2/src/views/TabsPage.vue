<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="store" href="/tabs/store">
          <ion-icon aria-hidden="true" :icon="storefront" />
          <ion-label>Store</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="cart" href="/tabs/cart">
          <ion-icon aria-hidden="true" :icon="bagHandleOutline" />
          <ion-label>Cart</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
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
import { bagHandleOutline, square, storefront } from "ionicons/icons";
</script>
