

export default [
  {
    path: '/othercharacter/duskindex',
    name: 'DuskIndex',
    component: () => import('@/pages/othercharacter/dusk/index.vue')
  },
  {
    path: '/othercharacter/duskindex/dusk',
    name: 'Dusk',
    component: () => import('@/pages/othercharacter/dusk/dusk.vue')
  },
  {
    path: '/othercharacter/duskindex/items/:id',
    name: 'DuskItems',
    component: () => import('@/pages/othercharacter/dusk/items.vue')
  },
];
