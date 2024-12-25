import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/modules/Home/HomeComponent.vue';
import ProjectComponent from '@/modules/projects/ProjectComponent.vue';
import PublicationComponent from '@/modules/publications/PublicationComponent.vue';
import NewsComponent from '@/modules/News/NewsComponent.vue';
import TeamComponent from '@/modules/team/TeamComponent.vue'
import Contact from '@/modules/contact/Contact.vue';
import GalleryComponent from '@/modules/gallery/GalleryComponent.vue';
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

  },{
    path:'/project',
    name:'project',
    component: ProjectComponent

  },{
    path:'/contact',
    name : 'contact',
    component: Contact
  },{
    path:'/gallery',
    name : 'Gallery',
    component: GalleryComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
