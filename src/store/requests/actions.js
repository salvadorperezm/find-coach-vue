import axios from "axios";

export default {
  async submitRequest(payload) {
    // const fireBaseUrl = import.meta.env.VITE_FIREBASE_URL;
    try {
      // await axios.post(`${fireBaseUrl}/requests.json`, payload);
      console.log(payload);
    } catch (error) {
      console.warn(error);
    }
  },
};
