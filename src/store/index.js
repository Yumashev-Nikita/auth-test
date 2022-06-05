import { createStore } from 'vuex';

import NAVBAR from './modules/navbar';

export default createStore({
  modules: {
    navbar: NAVBAR,
  },
});
