import Vuex from 'vuex';
import Vue from 'vue';

import State from './state';
import Getters from './getters';
import Mutations from './mutations';
import Actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: State,
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
});

export default store;
