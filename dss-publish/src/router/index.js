import { createRouter, createWebHistory } from 'vue-router';
import CommonRoutes from './pub/CommonRoutes';
import DefaultRoutes from './pub/DefaultRoutes';
import GuideRoutes from './pub/GuideRoutes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    CommonRoutes,
    DefaultRoutes,
    GuideRoutes
  ],
  // 페이지 이동 시 스크롤 최상단 설정
  scrollBehavior () {
    return { top: 0 }
  },
});