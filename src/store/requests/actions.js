import axios from "axios";

import { convertRequestsObjectToArray } from "../../utils";

export default {
  async fetchRequests(context) {
    context.dispatch("activateIsFetchingRequests");
    const fireBaseUrl = import.meta.env.VITE_FIREBASE_URL;
    try {
      const response = await axios.get(`${fireBaseUrl}/requests.json`);
      const fetchedRequests = convertRequestsObjectToArray(response.data);
      context.commit("setRequests", fetchedRequests);
      context.dispatch("deactivateIsFetchingRequests");
    } catch (error) {
      console.warn(error);
      context.dispatch("deactivateIsFetchingRequests");
    }
  },
  activateIsFetchingRequests(context) {
    context.commit("toggleIsFetchingRequests", true);
  },
  deactivateIsFetchingRequests(context) {
    context.commit("toggleIsFetchingRequests", false);
  },
};
