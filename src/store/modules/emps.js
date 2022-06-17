import dept from '@/api/department';

export default {
  namespaced: true,
  state: {
    dept: 0,
    pos: 0,
    page: 6,
  },
  getters: {
    getEmps: async (state) => {
      const emps = await dept.getEmps(state.page);
      console.log(emps);
      return emps;
    },
    getPageAmount: async () => dept.getPageAmount(),
    getPage: (state) => state.page,
  },
  mutations: {
    LIST_PAGE_FORWARD: (state) => {
      console.log('list+');
      state.page += 1;
    },
    LIST_PAGE_BACKWARD: (state) => {
      console.log('list-');
      state.page -= 1;
    },
    SET_PAGE: (state, page) => {
      console.log(`set page to:${page}`);
      state.page = page;
    },
  },
  actions: {
  },
  modules: {
  },
};
