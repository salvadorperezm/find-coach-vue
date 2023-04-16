export default {
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  toggleIsFetchingCoaches(state, payload) {
    state.isFetchingCoaches = payload;
  },
  filterSelectedOptions(state, payload) {
    state.coachesFilterSelectedOptions = payload;
  },
};
