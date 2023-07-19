import { createRouter, createWebHistory } from "vue-router";
import SearchPage from "@/pages/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "SearchPage",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
