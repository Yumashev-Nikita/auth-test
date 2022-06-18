import dept from '@/api/department';

export default {
  namespaced: true,
  state: {
    employee: undefined,
  },
  getters: {
    getEmployee: (state) => state.employee,
  },
  mutations: {
    PULL_EMPLOYEE: async (state, id) => { state.employee = await dept.getEmployeeById(id); },
  },
  actions: {
  },
  modules: {
  },
};
