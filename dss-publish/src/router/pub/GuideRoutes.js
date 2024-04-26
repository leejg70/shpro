const MainRoutes = {
  path: '/',
  meta: {
    requiresAuth: false
  },
  redirect: '/main/main/default',
  component: () => import('@/layouts/guide/GuideLayout.vue'),
  children: [
    {
      name: 'guide01',
      path: '/guide/01',
      component: () => import('@/views/pub/Guide/GuideInput.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'guide02',
      path: '/guide/02',
      component: () => import('@/views/pub/Guide/GuideButton.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'guide03',
      path: '/guide/03',
      component: () => import('@/views/pub/Guide/CheckBox.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'worklist',
      path: '/',
      component: () => import('@/views/pub/Guide/WorkList.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    }
  ]
};

export default MainRoutes;