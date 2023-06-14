import axios from "axios";

export default {
  async signUp(context, payload) {
    context.commit("setIsSignUpInvalid", false);
    const firebaseAuthUrl = import.meta.env.VITE_FIREBASE_AUTH_URL;
    const apiWebKey = import.meta.env.VITE_FIREBASE_API_WEB_KEY;
    try {
      await axios.post(`${firebaseAuthUrl}signUp?key=${apiWebKey}`, payload);
    } catch (error) {
      context.commit("setIsSignUpInvalid", true);
    }
  },
};
