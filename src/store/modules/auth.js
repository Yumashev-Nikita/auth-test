import auth from '@/api/auth';
import user from '@/api/user';
import EMPLOYEES from '@/store/modules/employees';
import EMPLOYEE from '@/store/modules/employee';

export default {
  namespaced: true,
  state: {
    profile: undefined,
  },
  getters: {
    getAuthStatus: () => localStorage.getItem('authToken') !== null,
  },
  mutations: {
    PULL_PROFILE: async (state) => { state.profile = await user.getProfile(); },
  },
  actions: {
    login: async (context, payload) => {
      if (await auth.getToken(payload)) {
        user.getProfile();
        console.log('token');
      } else {
        console.log('wrong data');
      }
    },
    logout: () => { localStorage.removeItem('authToken'); },
  },
  modules: {
    employees: EMPLOYEES,
    employee: EMPLOYEE,
  },
};

// 6pYIYy5wCN
