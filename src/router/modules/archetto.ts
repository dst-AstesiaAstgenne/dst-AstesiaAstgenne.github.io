
export default [
  {
    path: '/othercharacter/archettoindex',
    name: 'ArchettoIndex',
    component: () => import('@/pages/othercharacter/archetto/index.vue')
  },
  {
    path: '/othercharacter/archettoindex/archetto',
    name: 'Archetto',
    component: () => import('@/pages/othercharacter/archetto/archetto.vue')
  },
  {
    path: '/othercharacter/archettoindex/items/:id',
    name: 'ArchettoItems',
    component: () => import('@/pages/othercharacter/archetto/items.vue')
  }
];
