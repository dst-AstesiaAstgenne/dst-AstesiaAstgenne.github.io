const ArkShuIndex = () => import('@/pages/othercharacter/arkshu/index.vue');
const ArkShu = () => import('@/pages/othercharacter/arkshu/arkshu.vue');
const ArkShuItems = () => import('@/pages/othercharacter/arkshu/items.vue');

export default [
  {
    path: '/othercharacter/arkshuindex',
    name: 'ArkShuIndex',
    component: ArkShuIndex
  },
  {
    path: '/othercharacter/arkshuindex/arkshu',
    name: 'ArkShu',
    component: ArkShu
  },
  {
    path: '/othercharacter/arkshuindex/items/:id',
    name: 'ArkShuItems',
    component: ArkShuItems
  }
];
