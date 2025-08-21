

export default [
  {
    path: '/othercharacter/surtrindex',
    name: 'SurtrIndex',
    component: () => import('@/pages/othercharacter/surtr/index.vue')
  },
  {
    path: '/othercharacter/surtrindex/surtr',
    name: 'Surtr',
    component: () => import('@/pages/othercharacter/surtr/surtr.vue')
  },
  {
    path: '/othercharacter/surtrindex/items/:id',
    name: 'SurtrItems',
    component: () => import('@/pages/othercharacter/surtr/items.vue')
  }
];
