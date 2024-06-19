const DefaultRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/main/default',
  component: () => import('@/layouts/main/DefaultLayout.vue'),
  children: [
    // GNB 메뉴
    {
      name: 'PRDD_01',
      path: '/PRDD_01',
      component: () => import('@/views/pub/DataService/PRDD_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDD_02_01',
      path: '/PRDD_02_01',
      component: () => import('@/views/pub/DataService/PRDD_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDD_02_01_null',
      path: '/PRDD_02_01_null',
      component: () => import('@/views/pub/DataService/PRDD_02_01_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDD_00_01',
      path: '/PRDD_00_01',
      component: () => import('@/views/pub/DataService/PRDD_00_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDD_03',
      path: '/PRDD_03',
      component: () => import('@/views/pub/DataService/PRDD_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_01',
      path: '/PRDS_01',
      component: () => import('@/views/pub/SolutionService/PRDS_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_02_01',
      path: '/PRDS_02_01',
      component: () => import('@/views/pub/SolutionService/PRDS_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_02_01_null',
      path: '/PRDS_02_01_null1',
      component: () => import('@/views/pub/SolutionService/PRDS_02_01_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_00_01',
      path: '/PRDS_00_01',
      component: () => import('@/views/pub/SolutionService/PRDS_00_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_00_02',
      path: '/PRDS_00_02',
      component: () => import('@/views/pub/SolutionService/PRDS_00_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_00_03',
      path: '/PRDS_00_03',
      component: () => import('@/views/pub/SolutionService/PRDS_00_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_00_04',
      path: '/PRDS_00_04',
      component: () => import('@/views/pub/SolutionService/PRDS_00_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDS_00_05',
      path: '/PRDS_00_05',
      component: () => import('@/views/pub/SolutionService/PRDS_00_05.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_00',
      path: '/PRDM_00',
      component: () => import('@/views/pub/ADService/PRDM_00.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01',
      path: '/PRDM_01',
      component: () => import('@/views/pub/ADService/PRDM_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01_01',
      path: '/PRDM_01_01',
      component: () => import('@/views/pub/ADService/PRDM_01_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01_02',
      path: '/PRDM_01_02',
      component: () => import('@/views/pub/ADService/PRDM_01_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01_03',
      path: '/PRDM_01_03',
      component: () => import('@/views/pub/ADService/PRDM_01_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01_04',
      path: '/PRDM_01_04',
      component: () => import('@/views/pub/ADService/PRDM_01_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01_05',
      path: '/PRDM_01_05',
      component: () => import('@/views/pub/ADService/PRDM_01_05.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_01_06',
      path: '/PRDM_01_06',
      component: () => import('@/views/pub/ADService/PRDM_01_06.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_02',
      path: '/PRDM_02',
      component: () => import('@/views/pub/ADService/PRDM_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDM_03',
      path: '/PRDM_03',
      component: () => import('@/views/pub/ADService/PRDM_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDA_01',
      path: '/PRDA_01',
      component: () => import('@/views/pub/APIService/PRDA_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDA_02_01',
      path: '/PRDA_02_01',
      component: () => import('@/views/pub/APIService/PRDA_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDA_02_01_null',
      path: '/PRDA_02_01_null',
      component: () => import('@/views/pub/APIService/PRDA_02_01_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDA_00_01',
      path: '/PRDA_00_01',
      component: () => import('@/views/pub/APIService/PRDA_00_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDA_00_02',
      path: '/PRDA_00_02',
      component: () => import('@/views/pub/APIService/PRDA_00_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'PRDA_00_03',
      path: '/PRDA_00_03',
      component: () => import('@/views/pub/APIService/PRDA_00_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_00',
      path: '/MY_00',
      component: () => import('@/views/pub/My/MY_00.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_01',
      path: '/MY_01',
      component: () => import('@/views/pub/My/MY_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_02',
      path: '/MY_02',
      component: () => import('@/views/pub/My/MY_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_00_01',
      path: '/MY_00_01',
      component: () => import('@/views/pub/My/MY_00_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_00_02',
      path: '/MY_00_02',
      component: () => import('@/views/pub/My/MY_00_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_02_r',
      path: '/MY_02_r',
      component: () => import('@/views/pub/My/MY_02_r.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_02_u',
      path: '/MY_02_u',
      component: () => import('@/views/pub/My/MY_02_u.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_03_r',
      path: '/MY_03_r',
      component: () => import('@/views/pub/My/MY_03_r.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_03_u',
      path: '/MY_03_u',
      component: () => import('@/views/pub/My/MY_03_u.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_04_r',
      path: '/MY_04_r',
      component: () => import('@/views/pub/My/MY_04_r.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_04_u',
      path: '/MY_04_u',
      component: () => import('@/views/pub/My/MY_04_u.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_05',
      path: '/MY_05',
      component: () => import('@/views/pub/My/MY_05.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_03',
      path: '/MY_03',
      component: () => import('@/views/pub/My/MY_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_03_01_p',
      path: '/MY_03_01_p',
      component: () => import('@/views/pub/My/MY_03_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_03_02_01_p',
      path: '/MY_03_02_01_p',
      component: () => import('@/views/pub/My/MY_03_02_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_03_02_02_p',
      path: '/MY_03_02_02_p',
      component: () => import('@/views/pub/My/MY_03_02_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },

    {
      name: 'MY_04',
      path: '/MY_04',
      component: () => import('@/views/pub/My/MY_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_07',
      path: '/MY_07',
      component: () => import('@/views/pub/My/MY_07.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_07_01',
      path: '/MY_07_01',
      component: () => import('@/views/pub/My/MY_07_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_08',
      path: '/MY_08',
      component: () => import('@/views/pub/My/MY_08.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_06',
      path: '/MY_06',
      component: () => import('@/views/pub/My/MY_06.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_00_02_null',
      path: '/MY_00_02_null',
      component: () => import('@/views/pub/My/MY_00_02_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_00_03_p',
      path: '/MY_00_03_p',
      component: () => import('@/views/pub/My/MY_00_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'MY_00_04_p',
      path: '/MY_00_04_p',
      component: () => import('@/views/pub/My/MY_00_04_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    // 그외 메뉴
    {
      name: 'BLUE_01',
      path: '/BLUE_01',
      component: () => import('@/views/pub/Databule/BLUE_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'BLUE_02_01',
      path: '/BLUE_02_01',
      component: () => import('@/views/pub/Databule/BLUE_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'BLUE_02_02',
      path: '/BLUE_02_02',
      component: () => import('@/views/pub/Databule/BLUE_02_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'BLUE_02_03',
      path: '/BLUE_02_03',
      component: () => import('@/views/pub/Databule/BLUE_02_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'BLUE_02_04',
      path: '/BLUE_02_04',
      component: () => import('@/views/pub/Databule/BLUE_02_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'BLUE_02_05',
      path: '/BLUE_02_05',
      component: () => import('@/views/pub/Databule/BLUE_02_05.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'NOTI_01',
      path: '/NOTI_01',
      component: () => import('@/views/pub/Customer/NOTI_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'NOTI_02_01',
      path: '/NOTI_02_01',
      component: () => import('@/views/pub/Customer/NOTI_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'NOTI_02_01_null',
      path: '/NOTI_02_01_null',
      component: () => import('@/views/pub/Customer/NOTI_02_01_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'NOTI_00_01',
      path: '/NOTI_00_01',
      component: () => import('@/views/pub/Customer/NOTI_00_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'FAQS_01',
      path: '/FAQS_01',
      component: () => import('@/views/pub/Customer/FAQS_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'QNAS_01',
      path: '/QNAS_01',
      component: () => import('@/views/pub/Customer/QNAS_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'QNAS_02_01',
      path: '/QNAS_02_01',
      component: () => import('@/views/pub/Customer/QNAS_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'QNAS_02_01_null',
      path: '/QNAS_02_01_null',
      component: () => import('@/views/pub/Customer/QNAS_02_01_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'QNAS_00_01_r',
      path: '/QNAS_00_01_r',
      component: () => import('@/views/pub/Customer/QNAS_00_01_r.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'QNAS_00_01_u',
      path: '/QNAS_00_01_u',
      component: () => import('@/views/pub/Customer/QNAS_00_01_u.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'QNAS_01_01_c',
      path: '/QNAS_01_01_c',
      component: () => import('@/views/pub/Customer/QNAS_01_01_c.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_01',
      path: '/COMU_01',
      component: () => import('@/views/pub/Community/COMU_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_01_01_r',
      path: '/COMU_01_01_r',
      component: () => import('@/views/pub/Community/COMU_01_01_r.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_02',
      path: '/COMU_02',
      component: () => import('@/views/pub/Community/COMU_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_02_01',
      path: '/COMU_02_01',
      component: () => import('@/views/pub/Community/COMU_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_02_01_null',
      path: '/COMU_02_01_null',
      component: () => import('@/views/pub/Community/COMU_02_01_null.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_02_02_r',
      path: '/COMU_02_02_r',
      component: () => import('@/views/pub/Community/COMU_02_02_r.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_02_02_u',
      path: '/COMU_02_02_u',
      component: () => import('@/views/pub/Community/COMU_02_02_u.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'COMU_02_02_c',
      path: '/COMU_02_02_c',
      component: () => import('@/views/pub/Community/COMU_02_02_c.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    // 로그인/로그아웃/회원가입
    {
      name: 'LGIN_01',
      path: '/LGIN_01',
      component: () => import('@/views/pub/Login/LGIN_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LGIN_02_p',
      path: '/LGIN_02_p',
      component: () => import('@/views/pub/Login/LGIN_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LGIN_03',
      path: '/LGIN_03',
      component: () => import('@/views/pub/Login/LGIN_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LGIN_04',
      path: '/LGIN_04',
      component: () => import('@/views/pub/Login/LGIN_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LOUT_01_p',
      path: '/LOUT_01_p',
      component: () => import('@/views/pub/Login/LOUT_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LOUT_02_p',
      path: '/LOUT_02_p',
      component: () => import('@/views/pub/Login/LOUT_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LOUT_03_p',
      path: '/LOUT_03_p',
      component: () => import('@/views/pub/Login/LOUT_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LOUT_04_p',
      path: '/LOUT_04_p',
      component: () => import('@/views/pub/Login/LOUT_04_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'LOUT_04',
      path: '/LOUT_04',
      component: () => import('@/views/pub/Login/LOUT_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'IDPW_01',
      path: '/IDPW_01',
      component: () => import('@/views/pub/FindID/IDPW_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'IDPW_02',
      path: '/IDPW_02',
      component: () => import('@/views/pub/FindID/IDPW_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'IDPW_02_fall',
      path: '/IDPW_02_fall',
      component: () => import('@/views/pub/FindID/IDPW_02_fall.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'IDPW_03',
      path: '/IDPW_03',
      component: () => import('@/views/pub/FindID/IDPW_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_01',
      path: '/JOIN_01',
      component: () => import('@/views/pub/Member/JOIN_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_01',
      path: '/JOIN_02_01',
      component: () => import('@/views/pub/Member/JOIN_02_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_02',
      path: '/JOIN_02_02',
      component: () => import('@/views/pub/Member/JOIN_02_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_02_01_p',
      path: '/JOIN_02_02_01_p',
      component: () => import('@/views/pub/Member/JOIN_02_02_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_02_02_p',
      path: '/JOIN_02_02_02_p',
      component: () => import('@/views/pub/Member/JOIN_02_02_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_02_03_p',
      path: '/JOIN_02_02_03_p',
      component: () => import('@/views/pub/Member/JOIN_02_02_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_03',
      path: '/JOIN_02_03',
      component: () => import('@/views/pub/Member/JOIN_02_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_02_04',
      path: '/JOIN_02_04',
      component: () => import('@/views/pub/Member/JOIN_02_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_03_01',
      path: '/JOIN_03_01',
      component: () => import('@/views/pub/Member/JOIN_03_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_03_02',
      path: '/JOIN_03_02',
      component: () => import('@/views/pub/Member/JOIN_03_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_03_03',
      path: '/JOIN_03_03',
      component: () => import('@/views/pub/Member/JOIN_03_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_03_04',
      path: '/JOIN_03_04',
      component: () => import('@/views/pub/Member/JOIN_03_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_01',
      path: '/JOIN_04_01',
      component: () => import('@/views/pub/Member/JOIN_04_01.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_02',
      path: '/JOIN_04_02',
      component: () => import('@/views/pub/Member/JOIN_04_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_03',
      path: '/JOIN_04_03',
      component: () => import('@/views/pub/Member/JOIN_04_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_03_01_p',
      path: '/JOIN_04_03_01_p',
      component: () => import('@/views/pub/Member/JOIN_04_03_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_03_02_p',
      path: '/JOIN_04_03_02_p',
      component: () => import('@/views/pub/Member/JOIN_04_03_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_03_03_p',
      path: '/JOIN_04_03_03_p',
      component: () => import('@/views/pub/Member/JOIN_04_03_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_03_04_p',
      path: '/JOIN_04_03_04_p',
      component: () => import('@/views/pub/Member/JOIN_04_03_04_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_04',
      path: '/JOIN_04_04',
      component: () => import('@/views/pub/Member/JOIN_04_04.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_04_05',
      path: '/JOIN_04_05',
      component: () => import('@/views/pub/Member/JOIN_04_05.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_01_01_p',
      path: '/JOIN_05_01_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_01_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_01_02_p',
      path: '/JOIN_05_01_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_01_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_02_01_01_p',
      path: '/JOIN_05_02_01_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_02_01_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_02_01_02_p',
      path: '/JOIN_05_02_01_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_02_01_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_02_01_03_p',
      path: '/JOIN_05_02_01_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_02_01_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_02_02_01_p',
      path: '/JOIN_05_02_02_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_02_02_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_02_02_02_p',
      path: '/JOIN_05_02_02_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_02_02_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_02_02_03_p',
      path: '/JOIN_05_02_02_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_02_02_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_03_01_01_p',
      path: '/JOIN_05_03_01_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_03_01_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_03_01_02_p',
      path: '/JOIN_05_03_01_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_03_01_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_03_01_03_p',
      path: '/JOIN_05_03_01_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_03_01_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_03_02_01_p',
      path: '/JOIN_05_03_02_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_03_02_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_03_02_02_p',
      path: '/JOIN_05_03_02_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_03_02_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_03_02_03_p',
      path: '/JOIN_05_03_02_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_03_02_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_04_01_01_p',
      path: '/JOIN_05_04_01_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_04_01_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_04_01_02_p',
      path: '/JOIN_05_04_01_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_04_01_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_04_01_03_p',
      path: '/JOIN_05_04_01_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_04_01_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_04_02_01_p',
      path: '/JOIN_05_04_02_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_04_02_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_04_02_02_p',
      path: '/JOIN_05_04_02_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_04_02_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_04_02_03_p',
      path: '/JOIN_05_04_02_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_04_02_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_05_01_01_p',
      path: '/JOIN_05_05_01_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_05_01_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_05_01_02_p',
      path: '/JOIN_05_05_01_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_05_01_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_05_01_03_p',
      path: '/JOIN_05_05_01_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_05_01_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_05_02_01_p',
      path: '/JOIN_05_05_02_01_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_05_02_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }

    },
    {
      name: 'JOIN_05_05_02_02_p',
      path: '/JOIN_05_05_02_02_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_05_02_02_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'JOIN_05_05_02_03_p',
      path: '/JOIN_05_05_02_03_p',
      component: () => import('@/views/pub/Agreement/JOIN_05_05_02_03_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    // 공통/기타
    {
      name: 'CFMM_01_p',
      path: '/CFMM_01_p',
      component: () => import('@/views/pub/Common/CFMM_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'CFMH_01_p',
      path: '/CFMH_01_p',
      component: () => import('@/views/pub/Common/CFMH_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'CFMP_01_p',
      path: '/CFMP_01_p',
      component: () => import('@/views/pub/Common/CFMP_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'FILE_01_p',
      path: '/FILE_01_p',
      component: () => import('@/views/pub/Common/FILE_01_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'SYSA_p',
      path: '/SYSA_p',
      component: () => import('@/views/pub/Common/SYSA_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'SYSC_p',
      path: '/SYSC_p',
      component: () => import('@/views/pub/Common/SYSC_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'ETC_02',
      path: '/ETC_02',
      component: () => import('@/views/pub/Common/ETC_02.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'ETC_03',
      path: '/ETC_03',
      component: () => import('@/views/pub/Common/ETC_03.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'ETC_04_p',
      path: '/ETC_04_p',
      component: () => import('@/views/pub/Common/ETC_04_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'ETC_toast_p',
      path: '/ETC_toast_p',
      component: () => import('@/views/pub/Common/ETC_toast_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    },
    {
      name: 'ETC_topbtn_p',
      path: '/ETC_topbtn_p',
      component: () => import('@/views/pub/Common/ETC_topbtn_p.vue'),
      meta: {
        appearMenu : true,
        requiresAuth: false
      }
    }
  ]
};

export default DefaultRoutes;