import { createStore } from 'vuex';

import EMPLOYEES from './modules/employees';

export default createStore({
  modules: {
    employees: EMPLOYEES,
  },
});
