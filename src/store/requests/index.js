import requestsActions from "./actions";
import requestsGetters from "./getters";
import requestsMutations from "./mutations";

export default {
  state() {
    return {
      requests: [],
      isFetchingRequests: false,
    };
  },
  actions: requestsActions,
  getters: requestsGetters,
  mutations: requestsMutations,
};
