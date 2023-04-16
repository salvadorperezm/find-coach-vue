import axios from "axios";

import { convertObjectToArray } from "../../utils";

export default {
  async fetchCoaches(context) {
    context.dispatch("activateIsFetchingCoaches");
    const fireBaseUrl = import.meta.env.VITE_FIREBASE_URL;
    try {
      const response = await axios.get(`${fireBaseUrl}/coaches.json`);
      const fetchedCoaches = convertObjectToArray(response.data);
      context.commit("setCoaches", fetchedCoaches);
      context.dispatch("deactivateIsFetchingCoaches");
    } catch (error) {
      console.warn(error);
      context.dispatch("deactivateIsFetchingCoaches");
    }
  },
  activateIsFetchingCoaches(context) {
    context.commit("toggleIsFetchingCoaches", true);
  },
  deactivateIsFetchingCoaches(context) {
    context.commit("toggleIsFetchingCoaches", false);
  },
  filterSelectedOptions(context, payload) {
    context.commit("filterSelectedOptions", payload);
  },
};
