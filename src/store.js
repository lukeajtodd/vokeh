import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import Auth from './store/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
  },
  state: {
    isLoading: false,
  },
  mutations: {
    loading(state, payload) {
      state.isLoading = payload;
    },
  },
});
