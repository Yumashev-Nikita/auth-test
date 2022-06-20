import auth from '@/api/auth';
import user from '@/api/user';
import EMPLOYEES from '@/store/modules/employees';
import EMPLOYEE from '@/store/modules/employee';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    profile: undefined,
  },
  getters: {
    getAuthStatus: () => localStorage.getItem('authToken') !== null,
  },
  mutations: {
    PULL_PROFILE: async (state) => { state.profile = await user.getUser(); },
  },
  actions: {
    login: async (context, payload) => {
      if (await auth.getToken(payload)) {
        await context.commit('PULL_PROFILE');
        router.push('/profile');
        console.log('token');
      } else {
        console.log('wrong data');
      }
    },
    logout: () => { localStorage.removeItem('authToken'); },
    updateUser: async (context, payload) => {
      if (await user.updateUser(payload)) {
        await context.commit('PULL_PROFILE');
      }
    },
  },
  modules: {
    employees: EMPLOYEES,
    employee: EMPLOYEE,
  },
};

// 6pYIYy5wCN
