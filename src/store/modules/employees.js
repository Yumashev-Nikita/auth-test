import dept from '@/api/department';

export default {
  namespaced: true,
  state: {
    page: 1,
    employees: {},
  },
  getters: {
    getEmployees: (state) => state.employees.data,
    getPageAmount: (state) => state.employees.last_page,
  },
  mutations: {
    LIST_PAGE_FORWARD: (state) => { state.page += 1; },
    LIST_PAGE_BACKWARD: (state) => { state.page -= 1; },
    PULL_EMPLOYEES: async (state) => { state.employees = await dept.getEmployees(state.page); },
    SET_PAGE: (state, page) => { state.page = page; },
  },
  actions: {
    setPage: async (context, page) => {
      context.commit('SET_PAGE', page);
      await context.commit('PULL_EMPLOYEES');
    },
  },
  modules: {
  },
};
