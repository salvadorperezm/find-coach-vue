import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "./components/pages/coaches/CoachesPage.vue";
import CoachContact from "./components/pages/coaches/CoachContact.vue";
import Requests from "./components/pages/Requests.vue";

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
  { path: "/find-coach-vue/requests/", component: Requests },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
