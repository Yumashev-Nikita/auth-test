import { createRouter, createWebHashHistory } from 'vue-router';
import ProfileWindow from '../components/ProfileWindow.vue';
import EmpsWindow from '../components/EmpsWindow.vue';
import AuthWindow from '../components/AuthWindow.vue';

const routes = [
  { path: '/profile', component: ProfileWindow },
  { path: '/employees', component: EmpsWindow },
  { path: '/auth', component: AuthWindow },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
