import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import State from './state';
import Getters from './getters';
import Mutations from './mutations';

const store = new Vuex.Store({
    state: State,
    mutations: Mutations,
    getters: Getters
})

export default store;