import dept from '@/api/department';

export default {
  namespaced: true,
  state: {
    id: 1,
    employee: {},
  },
  getters: {
    getName: (state) => state.employee.name,
    getImage: (state) => state.employee.image,
    getLogin: (state) => state.employee.login,
    getEmail: (state) => state.employee.email,
    getJobTitle: (state) => state.employee.worker.position,
    getDepartmentId: (state) => state.employee.worker.department,
    getStartDate: (state) => state.employee.worker.adopted_at,
    getAbout: (state) => state.employee.about,
  },
  mutations: {
    PULL_EMPLOYEE: async (state) => { state.employee = await dept.getEmployeeById(state.id); },
    SET_ID: (state, id) => { state.id = id; },
  },
  actions: {
    setId: async (context, id) => {
      context.commit('SET_ID', id);
      await context.commit('PULL_EMPLOYEE');
    },
  },
  modules: {
  },
};
