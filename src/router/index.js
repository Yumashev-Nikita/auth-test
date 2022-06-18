import { createRouter, createWebHashHistory } from 'vue-router';
import ProfileWindow from '../components/ProfileWindow.vue';
import EmployeesWindow from '../components/EmployeesWindow.vue';
import EmployeeWindow from '../components/EmployeeWindow.vue';
import AuthWindow from '../components/AuthWindow.vue';

const routes = [
  { path: '/profile', component: ProfileWindow },
  { path: '/employees', component: EmployeesWindow },
  { path: '/auth', component: AuthWindow },
  {
    path: '/employee/:id',
    name: 'employee',
    component: EmployeeWindow,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
