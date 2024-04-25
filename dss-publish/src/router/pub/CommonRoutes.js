const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/main/default',
  component: () => import('@/layouts/main/MainLayout.vue'),
  children: [
    // 메인
    {
      name: 'MAIN_01',
      path: '/MAIN_01',
      component: () => import('@/views/pub/Main/MAIN_01.vue')
    },
    {
      name: 'MAIN_02',
      path: '/MAIN_02',
      component: () => import('@/views/pub/Main/MAIN_02.vue')
    },
    {
      name: 'MAIN_00_01',
      path: '/MAIN_00_01',
      component: () => import('@/views/pub/Main/MAIN_00_01.vue')
    },
    {
      name: 'MAIN_00_01_null',
      path: '/MAIN_00_01_null',
      component: () => import('@/views/pub/Main/MAIN_00_01_null.vue')
    },
    {
      name: 'MAIN_00_02_p',
      path: '/MAIN_00_02_p',
      component: () => import('@/views/pub/Main/MAIN_00_02_p.vue')
    },
    {
      name: 'MAIN_00_03_p',
      path: '/MAIN_00_03_p',
      component: () => import('@/views/pub/Main/MAIN_00_03_p.vue')
    },
    {
      name: 'MAIN_00_04_p',
      path: '/MAIN_00_04_p',
      component: () => import('@/views/pub/Main/MAIN_00_04_p.vue')
    }
  ]
};

export default MainRoutes;