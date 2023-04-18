export default {
  coaches(state) {
    return state.coaches;
  },
  currentCoach(state, getters) {
    const coaches = getters.coaches;
    const currentCoachId = state.currentCoachId;

    const currentCoach = coaches.find((coach) => coach.id === currentCoachId);

    return currentCoach;
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
        return false;
      } else {
        return filterSelectedOptions.some((option) =>
          coach.technologies.includes(option)
        );
      }
    });

    return filteredCoaches;
  },
};
