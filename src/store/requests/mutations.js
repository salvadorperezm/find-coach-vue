export default {
  setRequests(state, payload) {
    state.requests = payload;
  },
  toggleIsFetchingRequests(state, payload) {
    state.isFetchingRequests = payload;
  },
};
