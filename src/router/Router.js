import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/modules/Home/HomeComponent.vue';
import ProjectComponent from '@/modules/projects/ProjectComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/about',
    name: 'project',
    component: ProjectComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
