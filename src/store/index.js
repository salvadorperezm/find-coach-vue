import { createStore } from "vuex";

import coachesModule from "./coaches";
import requestsModule from "./requests";

export const store = createStore({
  modules: {
    coachesModule,
    requestsModule,
  },
});
