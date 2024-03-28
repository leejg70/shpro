const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/main/default',
  component: () => import('@/layouts/main/MainLayout.vue'),
  children: [
    {
      name: 'guide01',
      path: '/guide/01',
      component: () => import('@/views/guide/GuideInput.vue')
    },
    {
      name: 'LoginView',
      path: '/members/login',
      component: () => import('@/views/members/login/LoginView.vue')
    },
    {
      name: 'MyselfView',
      path: '/members/myself',
      component: () => import('@/views/members/member/MyselfView.vue')
    }
  ]
};

export default MainRoutes;