import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/books",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/books",
      },
      {
        path: "books",
        component: () => import("@/views/BooksPage.vue"),
      },
      {
        path: "authors",
        component: () => import("@/views/AuthorsPage.vue"),
      },
      {
        path: "genres",
        component: () => import("@/views/GenresPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
