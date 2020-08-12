import Vue from "vue";
import Vuex from "vuex";
import auth from "./module/auth";

Vue.use(Vuex);

export default {
  modules: {
    auth: auth
  }
};
