import dept from '@/api/department';

export default {
  namespaced: true,
  state: {
    dept: 0,
    pos: 0,
    page: 1,
    pages: 0,
    employees: {},
  },
  getters: {
    getEmployees: (state) => state.employees.data,
    getPageAmount: (state) => state.employees.last_page,
    getPage: (state) => state.employees.current_page,
  },
  mutations: {
    LIST_PAGE_FORWARD: (state) => { state.page += 1; },
    LIST_PAGE_BACKWARD: (state) => { state.page -= 1; },
    PULL_EMPLOYEES: async (state) => { state.employees = await dept.getEmployees(state.page); },
    PULL_PAGES: async (state) => { state.pages = await dept.getPageAmount(); },
    SET_PAGE: (state, page) => {
      console.log(state.page, '->', page);
      state.page = page;
    },
  },
  actions: {
    preFetchEmployees: {
      root: true,
      async handler(namespacedContext) {
        await namespacedContext.commit('PULL_EMPLOYEES');
      },
    },
    preFetchPages: {
      root: true,
      async handler(namespacedContext) {
        await namespacedContext.commit('PULL_PAGES');
      },
    },
    setPage: {
      root: true,
      async handler(namespacedContext, page) {
        namespacedContext.commit('SET_PAGE', page);
        await namespacedContext.commit('PULL_EMPLOYEES');
      },
    },
  },
  modules: {
  },
};
