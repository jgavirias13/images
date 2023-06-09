import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },

  finalizeLogin: ({ commit }, hash) => {
    const oauthParams = qs.parse(hash.replace('#', ''));
    commit('setToken', oauthParams.access_token);
    localStorage.setItem('imgur_token', oauthParams.access_token);
    router.push('/');
  },

  logout: ({ commit }) => {
    commit('setToken', null);
    localStorage.removeItem('imgur_token');
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}