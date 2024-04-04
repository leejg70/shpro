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
      path: '/login',
      component: () => import('@/views/members/login/LoginView.vue')
    },
    {
      name: 'IdFindView',
      path: '/idfind',
      component: () => import('@/views/members/login/IdFindView.vue')
    },
    {
      name: 'IdFwcChange',
      path: '/idchange',
      component: () => import('@/views/members/login/IdFwcChange.vue')
    },
    {
      name: 'IdFindCompletion',
      path: '/completion',
      component: () => import('@/views/members/login/IdFindCompletion.vue')
    }
  ]
};

export default MainRoutes;