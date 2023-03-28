import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null
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
  },

  logout: ({ commit }) => {
    commit('setToken', null);
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