import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Main from '@/pages/main/index.vue';
import Notice from '@/pages/notice/index.vue';


import AstesiaAstgenneRoutes from './modules/astesia-astgenne';
import SurtrRoutes from './modules/surtr';
import DuskRoutes from './modules/dusk';
import ArkShuRoutes from './modules/arkshu';
import ArchettoRoutes from './modules/archetto'



const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },

  ...AstesiaAstgenneRoutes,
  ...SurtrRoutes,
  ...DuskRoutes,
  ...ArkShuRoutes,
  ...ArchettoRoutes,
];

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),  // 自动适配 base，上传使用
  history: createWebHistory(import.meta.env.BASE_URL),  // 自动适配 base，本地测试

  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,  // Vue Router 4 的写法，自动滚动到对应 id
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});


export default router;