import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/store",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/store",
      },
      {
        path: "store",
        component: () => import("@/views/StorePage.vue"),
      },
      {
        path: "cart",
        component: () => import("@/views/CartPage.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
