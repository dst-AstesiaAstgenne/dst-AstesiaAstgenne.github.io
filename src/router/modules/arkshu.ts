
export default [
  {
    path: '/othercharacter/arkshuindex',
    name: 'ArkShuIndex',
    component: () => import('@/pages/othercharacter/arkshu/index.vue')
  },
  {
    path: '/othercharacter/arkshuindex/arkshu',
    name: 'ArkShu',
    component: () => import('@/pages/othercharacter/arkshu/arkshu.vue')
  },
  {
    path: '/othercharacter/arkshuindex/items/:id',
    name: 'ArkShuItems',
    component: () => import('@/pages/othercharacter/arkshu/items.vue')
  }
];
