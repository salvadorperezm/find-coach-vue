export default {
  coaches(state) {
    return state.coaches;
  },
  isFetchingCoaches(state) {
    return state.isFetchingCoaches;
  },
  coachesFilterSelectedOptions(state) {
    return state.coachesFilterSelectedOptions;
  },
  filteredCoaches(_, getters) {
    const coaches = getters.coaches;
    const filterSelectedOptions = getters.coachesFilterSelectedOptions;

    const filteredCoaches = coaches.filter((coach) => {
      if (filterSelectedOptions.length === 0) {
        return true;
      } else {
        return filterSelectedOptions.some((option) =>
          coach.technologies.includes(option)
        );
      }
    });

    return filteredCoaches;
  },
};
