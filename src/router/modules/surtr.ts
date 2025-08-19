const SurtrIndex = () => import('@/pages/othercharacter/surtr/index.vue');
const Surtr = () => import('@/pages/othercharacter/surtr/surtr.vue');
const SurtrItems = () => import('@/pages/othercharacter/surtr/items.vue');

export default [
  {
    path: '/othercharacter/surtrindex',
    name: 'SurtrIndex',
    component: SurtrIndex
  },
  {
    path: '/othercharacter/surtrindex/surtr',
    name: 'Surtr',
    component: Surtr
  },
  {
    path: '/othercharacter/surtrindex/items/:id',
    name: 'SurtrItems',
    component: SurtrItems
  }
];
