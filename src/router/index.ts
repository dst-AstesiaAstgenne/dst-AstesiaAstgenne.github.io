import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Main from '@/pages/main/index.vue';
import Notice from '@/pages/notice/index.vue';


import AstesiaAstgenneRoutes from './modules/astesia-astgenne';
import SurtrRoutes from './modules/surtr';
import DuskRoutes from './modules/dusk';
import ArkShuRoutes from './modules/arkshu';
import ArchettoRoutes from './modules/archetto';
import LemuenRoutes from './modules/lemuen';



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
  ...LemuenRoutes,
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

// 全局导航守卫
router.beforeEach((to, _from, next) => {
  // 设置标题
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = '饥荒联机版Mod介绍';
  }

  // 设置图标
  const icon = to.meta?.icon as string | undefined;
  const link: HTMLLinkElement =
    document.querySelector("link[rel~='icon']") ||
    document.createElement("link");

  link.rel = "icon";
  link.href = icon || "/images/astesia-astgenne/ast_swallowgrass.webp";
  if (!document.head.contains(link)) {
    document.head.appendChild(link);
  }

  next();
});

export default router;