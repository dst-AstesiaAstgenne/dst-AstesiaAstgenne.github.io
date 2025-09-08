
export default [
  {
    path: '/othercharacter/arkshuindex',
    name: 'ArkShuIndex',
    component: () => import('@/pages/othercharacter/arkshu/index.vue'),
    meta: {
      title: '黍 - 主页',
      icon: '/images/arkshu/arkshu_weapon.webp'
    }
  },
  {
    path: '/othercharacter/arkshuindex/arkshu',
    name: 'ArkShu',
    component: () => import('@/pages/othercharacter/arkshu/arkshu.vue'),
    meta: {
      title: '黍 - 角色详情',
      icon: '/images/arkshu/arkshu_weapon.webp'
    }
  },
  {
    path: '/othercharacter/arkshuindex/items/:id',
    name: 'ArkShuItems',
    component: () => import('@/pages/othercharacter/arkshu/items.vue'),
    meta: {
      title: '黍 - 物品详情',
      icon: '/images/arkshu/arkshu_weapon.webp'
    }
  }
];
