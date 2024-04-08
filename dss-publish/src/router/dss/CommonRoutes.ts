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
    },
    {
      name: 'PopupSample',
      path: '/popupsample',
      component: () => import('@/views/members/login/PopupSample.vue')
    },
    {
      name: 'MemberType',
      path: '/membertype',
      component: () => import('@/views/members/member/MemberType.vue')
    },
    {
      name: 'MemberAgree',
      path: '/memberagree',
      component: () => import('@/views/members/member/MemberAgree.vue')
    },
    {
      name: 'BusinessSearch',
      path: '/businesssearch',
      component: () => import('@/views/members/member/BusinessSearch.vue')
    }    
  ]
};

export default MainRoutes;