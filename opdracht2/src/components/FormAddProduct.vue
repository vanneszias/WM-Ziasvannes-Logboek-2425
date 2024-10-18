<template>
  <ion-list>
    <ion-item>
      <ion-input
        type="text"
        placeholder="Product name"
        id="product__name"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-input
        type="number"
        placeholder="Product price"
        id="product__price"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-select label="Category" id="product__category">
        <ion-select-option value="fruit">Fruit</ion-select-option>
        <ion-select-option value="groenten">Groenten</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
  <ion-button @click="addProduct">Add product</ion-button>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList } from "@ionic/vue";
import { defineComponent } from "vue";
import { ProductStorage } from "@/components/ProductStorage";

export default defineComponent({
  components: { IonInput, IonItem, IonList },
  methods: {
    async addProduct() {
      // Get the values from the form
      const name = (
        document.querySelector("#product__name") as HTMLInputElement
      )?.value;
      const price = parseFloat(
        (document.querySelector("#product__price") as HTMLInputElement)?.value
      );
      const category = (
        document.querySelector("#product__category") as HTMLSelectElement
      )?.value;

      // save the product to the store
      const product = { name, price, category };
      ProductStorage.addProduct(product);
    },
  },
});
</script>
