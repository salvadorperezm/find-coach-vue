import { createRouter, createWebHistory } from "vue-router";

const Home = { template: "<h2>Coaches</h2>" };
const Requests = { template: "<h2>Requests</h2>" };

const routes = [
  { path: "/find-coach-vue/", component: Home },
  { path: "/find-coach-vue/requests/", component: Requests },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
