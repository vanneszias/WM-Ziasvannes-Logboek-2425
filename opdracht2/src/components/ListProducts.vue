<template>
  <ion-searchbar
    :debounce="1000"
    @ionInput="handleInput($event)"
  ></ion-searchbar>
  <ion-accordion-group>
    <!-- List of products will be added here -->
  </ion-accordion-group>
</template>

<script lang="ts">
import { IonSearchbar, IonAccordionGroup } from "@ionic/vue";
import { defineComponent } from "vue";
import { ProductStorage } from "@/components/ProductStorage";

export default defineComponent({
  components: { IonSearchbar, IonAccordionGroup },
  data() {
    return {
      products: [] as Product[],
    };
  },
  // Load the products from the storage on mount
  async mounted() {
    this.products = await ProductStorage.getProducts();
    this.loadProducts();
  },
  methods: {
    // Handle the input event of the searchbar
    async handleInput(event: CustomEvent) {
      const query = (event.target as HTMLInputElement).value;
      this.products = await ProductStorage.searchProducts(query);
      this.loadProducts();
    },
    // Load the products into the list
    async loadProducts() {
      // Remove all existing items
      const ionAccordionGroup = document.querySelector("ion-accordion-group");
      if (ionAccordionGroup) {
        ionAccordionGroup.innerHTML = "";
      }
      // Loop over the products and create an ion-accordion for each product
      this.products.forEach((product: Product) => {
        const accordionItem = document.createElement("ion-accordion");

        const ionItem = document.createElement("ion-item");
        ionItem.slot = "header";
        ionItem.color = "light";

        const ionLabel = document.createElement("ion-label");
        ionLabel.textContent = product.name;

        const price = document.createElement("div");
        price.classList.add("ion-padding");
        price.slot = "content";
        price.textContent = `${product.price}EUR`;

        const category = document.createElement("div");
        category.classList.add("ion-padding");
        category.slot = "content";
        category.textContent = product.category;

        // Append the elements to the accordion
        ionItem.appendChild(ionLabel); // title = product name

        accordionItem.appendChild(ionItem); // header = product name
        accordionItem.appendChild(price); // content = product price
        accordionItem.appendChild(category); // content = product category

        ionAccordionGroup?.appendChild(accordionItem); // Add the accordion to the group
      });
    },
  },
});

interface Product {
  name: string;
  price: number;
  category: string;
}
</script>
