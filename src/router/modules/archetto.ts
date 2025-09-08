
export default [
  {
    path: '/othercharacter/archettoindex',
    name: 'ArchettoIndex',
    component: () => import('@/pages/othercharacter/archetto/index.vue'),
        meta: {
          title: '空弦 - 主页',
          icon: '/images/archetto/archetto_crystal.webp'
        }
  },
  {
    path: '/othercharacter/archettoindex/archetto',
    name: 'Archetto',
    component: () => import('@/pages/othercharacter/archetto/archetto.vue'),
    meta: {
      title: '空弦 - 角色详情',
      icon: '/images/archetto/archetto_crystal.webp'
    }
  },
  {
    path: '/othercharacter/archettoindex/items/:id',
    name: 'ArchettoItems',
    component: () => import('@/pages/othercharacter/archetto/items.vue'),
    meta: {
      title: '空弦 - 物品详情',
      icon: '/images/archetto/archetto_crystal.webp'
    }
  }
];
