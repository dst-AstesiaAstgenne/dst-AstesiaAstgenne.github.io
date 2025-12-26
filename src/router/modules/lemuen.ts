
export default [
  {
    path: '/othercharacter/lemuenindex',
    name: 'LemuenIndex',
    component: () => import('@/pages/othercharacter/lemuen/index.vue'),
        meta: {
          title: '蕾缪安 - 主页',
          icon: '/images/lemuen/lemuen_horns.webp'
        }
  },
  {
    path: '/othercharacter/lemuenindex/lemuen',
    name: 'Lemuen',
    component: () => import('@/pages/othercharacter/lemuen/lemuen.vue'),
    meta: {
      title: '蕾缪安 - 角色详情',
      icon: '/images/lemuen/lemuen_horns.webp'
    }
  },
  {
    path: '/othercharacter/lemuenindex/items/:id',
    name: 'LemuenItems',
    component: () => import('@/pages/othercharacter/lemuen/items.vue'),
    meta: {
      title: '蕾缪安 - 物品详情',
      icon: '/images/lemuen/lemuen_horns.webp'
    }
  }
];
