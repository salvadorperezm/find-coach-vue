import { createStore } from "vuex";

import coachesModule from "./coaches";

export const store = createStore({
  modules: {
    coachesModule,
  },
});
