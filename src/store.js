import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const domain = 'https://pf5t4massb.execute-api.sa-east-1.amazonaws.com/dev';

export default new Vuex.Store(

  {
    plugins: [
      new VuexPersistence({ storage: global.localStorage, key: 'state' }).plugin,
    ],
    state: {
      firstname: 'teste',
      lastname: 'teste',
    },
    mutations: {
      LOGIN(state, token) {
        state.auth = token;
      },
      LOGOUT(state) {
        state.auth = null;
      },
    },
    actions: {
      async login({ commit }, form) {
        const headers = {
          Authorization: 'Basic dWFhY2xpZW50OnVhYXNlY3JldA==',
        };

        const { data } = await axios.post(
          `${domain}/oauth/token`,
          { ...form, grant_type: 'password' },
          { headers },
        );
        commit('LOGIN', data);
      },
    },
  },
);
