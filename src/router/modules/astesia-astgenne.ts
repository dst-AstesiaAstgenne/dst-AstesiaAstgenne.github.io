
export default [
  {
    path: '/astesia-astgenne',
    name: 'AstesiaAstgenne',
    component: () => import('@/pages/astesia-astgenne/index.vue'),
    meta: {
      title: '星极&星源 - 主页',
      icon: '/images/astesia-astgenne/ast_swallowgrass.webp'
    }
  },
  {
    path: '/astesia-astgenne/astesia',
    name: 'Astesia',
    component: () => import('@/pages/astesia-astgenne/astesia.vue'),
    meta: {
      title: '星极 -角色详情',
      icon: '/images/astesia-astgenne/ast_swallowgrass.webp'
    }
  },
  {
    path: '/astesia-astgenne/astgenne',
    name: 'Astgenne',
    component: () => import('@/pages/astesia-astgenne/astgenne.vue'),
    meta: {
      title: '星源 -角色详情',
      icon: '/images/astesia-astgenne/ast_swallowgrass.webp'
    }
  },
  {
    path: '/astesia-astgenne/items/:id',
    name: 'AstesiaAstgenneItems',
    component: () => import('@/pages/astesia-astgenne/items.vue'),
    meta: {
      title: '星极&星源 - 物品详情',
      icon: '/images/astesia-astgenne/ast_swallowgrass.webp'
    }
  }
];
