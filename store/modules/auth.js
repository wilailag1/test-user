import * as authService from "../../service/authService";

const auth = {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    set(state, { key, payload }) {
      state[key] = payload;
      console.log(`${key} :`, payload);
    }
  },
  actions: {
    async singOut({ commit }) {
      try {
        let res = await authService.signOut();
        debugger;
        commit("set", { key: user, payload: null });
      } catch (error) {
        alert(error);
      }
    }
  },
  getters: {
    getType(state) {
      if (state.user) {
        return state.user.type;
      } else {
        return null;
      }
    }
  }
};
export default auth;
