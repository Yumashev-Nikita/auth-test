import { createStore } from 'vuex';

import EMPS from './modules/emps';

export default createStore({
  modules: {
    emps: EMPS,
  },
});
