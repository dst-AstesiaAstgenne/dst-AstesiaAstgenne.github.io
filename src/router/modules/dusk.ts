

export default [
  {
    path: '/othercharacter/duskindex',
    name: 'DuskIndex',
    component: () => import('@/pages/othercharacter/dusk/index.vue'),
    meta: {
      title: '夕 - 主页',
      icon: '/images/dusk/dusk_sword.webp'
    }
  },
  {
    path: '/othercharacter/duskindex/dusk',
    name: 'Dusk',
    component: () => import('@/pages/othercharacter/dusk/dusk.vue'),
    meta: {
      title: '夕 - 角色详情',
      icon: '/images/dusk/dusk_sword.webp'
    }
  },
  {
    path: '/othercharacter/duskindex/items/:id',
    name: 'DuskItems',
    component: () => import('@/pages/othercharacter/dusk/items.vue'),
    meta: {
      title: '夕 - 物品详情',
      icon: '/images/dusk/dusk_sword.webp'
    }
  },
];
