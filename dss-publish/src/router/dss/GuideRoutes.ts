const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/main/default',
  component: () => import('@/layouts/guide/GuideLayout.vue'),
  children: [
    {
      name: 'guide01',
      path: '/guide/01',
      component: () => import('@/views/guide/GuideInput.vue')
    },
    {
      name: 'guide02',
      path: '/guide/02',
      component: () => import('@/views/guide/GuideButton.vue')
    },
    {
      name: 'guide03',
      path: '/guide/03',
      component: () => import('@/views/guide/CheckBox.vue')
    },
    {
      name: 'worklist',
      path: '/',
      component: () => import('@/views/guide/WorkList.vue')
    }
  ]
};
export default MainRoutes;