export default {
  namespaced: true,
  state: {
    dept: 0,
    pos: 0,
    page: 6,
  },
  getters: {
  },
  mutations: {
    LIST_PAGE: (state) => {
      console.log('list');
      state.page += 1;
    },
  },
  actions: {
  },
  modules: {
  },
};
