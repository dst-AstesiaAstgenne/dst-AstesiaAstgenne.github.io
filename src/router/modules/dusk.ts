const DuskIndex = () => import('@/pages/othercharacter/dusk/index.vue');
const Dusk = () => import('@/pages/othercharacter/dusk/dusk.vue');
const DuskItems = () => import('@/pages/othercharacter/dusk/items.vue');

export default [
  {
    path: '/othercharacter/duskindex',
    name: 'DuskIndex',
    component: DuskIndex
  },
  {
    path: '/othercharacter/duskindex/dusk',
    name: 'Dusk',
    component: Dusk
  },
  {
    path: '/othercharacter/duskindex/items/:id',
    name: 'DuskItems',
    component: DuskItems
  },
];
