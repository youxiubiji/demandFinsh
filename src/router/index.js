import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/location",
    name: "Location",
    component: () => import("@/views/location/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
