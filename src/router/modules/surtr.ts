

export default [
  {
    path: '/othercharacter/surtrindex',
    name: 'SurtrIndex',
    component: () => import('@/pages/othercharacter/surtr/index.vue'),
    meta: {
      title: '史尔特尔 - 主页',
      icon: '/images/surtr/pureflame.webp'
    }
  },
  {
    path: '/othercharacter/surtrindex/surtr',
    name: 'Surtr',
    component: () => import('@/pages/othercharacter/surtr/surtr.vue'),
    meta: {
      title: '史尔特尔 - 角色详情',
      icon: '/images/surtr/pureflame.webp'
    }
  },
  {
    path: '/othercharacter/surtrindex/items/:id',
    name: 'SurtrItems',
    component: () => import('@/pages/othercharacter/surtr/items.vue'),
    meta: {
      title: '史尔特尔 - 物品详情',
      icon: '/images/surtr/pureflame.webp'
    }
  },
];
