import Vuex from 'vuex';

import State from './state';
import Getters from './getters';
import Mutations from './mutations';
import Actions from './actions';

const store = new Vuex.createStore({
  state: State,
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
});

export default store;
