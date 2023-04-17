import coachesActions from "./actions";
import coachesGetters from "./getters";
import coachesMutations from "./mutations";

export default {
  state() {
    return {
      coaches: [],
      coachesFilterSelectedOptions: ["frontend", "backend", "career"],
      isFetchingCoaches: false,
    };
  },
  actions: coachesActions,
  getters: coachesGetters,
  mutations: coachesMutations,
};
