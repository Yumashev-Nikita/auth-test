import { createStore } from 'vuex';

import EMPLOYEES from './modules/employees';
import EMPLOYEE from './modules/employee';
import AUTH from './modules/auth';

export default createStore({
  modules: {
    employees: EMPLOYEES,
    employee: EMPLOYEE,
    auth: AUTH,
  },
});
