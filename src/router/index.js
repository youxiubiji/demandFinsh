import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/location",
    name: "Location",
    component: () => import("@/views/location/index.vue"),
  },
  {
    path: "/browser",
    name: "Browser",
    component: () => import("@/views/browser/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
