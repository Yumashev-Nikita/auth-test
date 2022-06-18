import { createStore } from 'vuex';

import EMPLOYEES from './modules/employees';
import EMPLOYEE from './modules/employee';

export default createStore({
  modules: {
    employees: EMPLOYEES,
    employee: EMPLOYEE,
  },
});
