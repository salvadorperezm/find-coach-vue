import { createRouter, createWebHistory } from "vue-router";

import CoachesPage from "./pages/coaches/CoachesPage.vue";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import ContactForm from "./components/coaches/ContactForm.vue";
import RequestsPage from "./pages/requests/RequestsPage.vue";

const routes = [
  { path: "/find-coach-vue/", redirect: "/find-coach-vue/coaches/" },
  { path: "/find-coach-vue/coaches/", component: CoachesPage },
  {
    path: "/find-coach-vue/coaches/:id",
    component: CoachDetails,
    children: [
      {
        path: "contact",
        component: ContactForm,
      },
    ],
  },
  { path: "/find-coach-vue/requests/", component: RequestsPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
