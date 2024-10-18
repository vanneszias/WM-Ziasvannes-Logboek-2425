import { Storage } from "@ionic/storage";

const store = new Storage();
store.create();

export interface Product {
  name: string;
  price: number;
  category: string;
}

export const ProductStorage = {
  async getProducts() {
    return store.get("products");
  },
  async setProducts(products: Product[]) {
    return store.set("products", products);
  },
  async addProduct(product: Product) {
    const products = await this.getProducts();
    if (!products) {
      return this.setProducts([product]);
    }
    products.push(product);
    return this.setProducts(products);
  },
  async searchProducts(searchTerm: string) {
    const products = await this.getProducts();
    if (!products) {
      return [];
    }
    return products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
};
