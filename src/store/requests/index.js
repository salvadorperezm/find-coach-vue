import requestsActions from "./actions";

export default {
  state() {
    return {
      requests: [],
    };
  },
  actions: requestsActions,
};
