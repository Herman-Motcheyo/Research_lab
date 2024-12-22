import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/modules/Home/HomeComponent.vue';
import ProjectComponent from '@/modules/projects/ProjectComponent.vue';
import PublicationComponent from '@/modules/publications/PublicationComponent.vue';
import NewsComponent from '@/modules/News/NewsComponent.vue';
import TeamComponent from '@/modules/team/TeamComponent.vue'
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
    component: PublicationComponent
  },{
    path: '/news',
    name:'news',
    component: NewsComponent
  },
  {
    path:'/team',
    name:'team',
    component: TeamComponent

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
