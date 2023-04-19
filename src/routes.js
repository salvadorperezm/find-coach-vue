import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "./pages/coaches/CoachesPage.vue";
import CoachContact from "./pages/coaches/CoachContact.vue";
import RequestsPage from "./pages/requests/RequestsPage.vue";

const routes = [
  { path: "/find-coach-vue/", redirect: "/find-coach-vue/coaches/" },
  { path: "/find-coach-vue/coaches/", component: CoachesPage },
  {
    path: "/find-coach-vue/coaches/:id",
    children: [
      {
        path: "contact",
        component: CoachContact,
      },
    ],
  },
  { path: "/find-coach-vue/requests/", component: RequestsPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
