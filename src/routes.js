import { createRouter, createWebHistory } from "vue-router";

import Coaches from "./components/pages/Coaches.vue";
import Requests from "./components/pages/Requests.vue";

const routes = [
  { path: "/find-coach-vue/", redirect: "/find-coach-vue/coaches/" },
  { path: "/find-coach-vue/coaches/", component: Coaches },
  { path: "/find-coach-vue/requests/", component: Requests },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
