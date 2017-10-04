import Vue from 'vue';
import Vuex from 'vuex';

import { counter } from './counter';
import { rest } from './rest';

import { INITIAL as state } from './constants';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    counter,
    rest
  }
});
