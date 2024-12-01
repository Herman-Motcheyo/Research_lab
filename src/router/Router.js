import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/modules/Home/HomeComponent.vue';
import ProjectComponent from '@/modules/projects/ProjectComponent.vue';
import PubliComponent from '@/modules/publications/PubliComponent.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: ProjectComponent,
  },
  {
    path: '/publications',
    name:'Publications',
    component: PubliComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
