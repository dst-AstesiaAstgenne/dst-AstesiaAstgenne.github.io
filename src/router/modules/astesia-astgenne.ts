const AstesiaAstgenne = () => import('@/pages/astesia-astgenne/index.vue');
const Astesia = () => import('@/pages/astesia-astgenne/astesia.vue');
const Astgenne = () => import('@/pages/astesia-astgenne/astgenne.vue');
const AstesiaAstgenneItems = () => import('@/pages/astesia-astgenne/items.vue');

export default [
  {
    path: '/astesia-astgenne',
    name: 'AstesiaAstgenne',
    component: AstesiaAstgenne
  },
  {
    path: '/astesia-astgenne/astesia',
    name: 'Astesia',
    component: Astesia
  },
  {
    path: '/astesia-astgenne/astgenne',
    name: 'Astgenne',
    component: Astgenne
  },
  {
    path: '/astesia-astgenne/items/:id',
    name: 'AstesiaAstgenneItems',
    component: AstesiaAstgenneItems
  }
];
