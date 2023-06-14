import { createStore } from "vuex";

import authModule from "./auth";
import coachesModule from "./coaches";
import requestsModule from "./requests";

export const store = createStore({
  modules: {
    authModule,
    coachesModule,
    requestsModule,
  },
});
