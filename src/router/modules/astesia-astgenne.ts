
export default [
  {
    path: '/astesia-astgenne',
    name: 'AstesiaAstgenne',
    component: () => import('@/pages/astesia-astgenne/index.vue')
  },
  {
    path: '/astesia-astgenne/astesia',
    name: 'Astesia',
    component: () => import('@/pages/astesia-astgenne/astesia.vue')
  },
  {
    path: '/astesia-astgenne/astgenne',
    name: 'Astgenne',
    component: () => import('@/pages/astesia-astgenne/astgenne.vue')
  },
  {
    path: '/astesia-astgenne/items/:id',
    name: 'AstesiaAstgenneItems',
    component: () => import('@/pages/astesia-astgenne/items.vue')
  }
];
