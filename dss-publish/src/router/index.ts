import { createRouter, createWebHistory } from 'vue-router';
import CommonRoutes from './dss/CommonRoutes';
import DefaultRoutes from './dss/DefaultRoutes';
import GuideRoutes from './dss/GuideRoutes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    CommonRoutes,
    DefaultRoutes,
    GuideRoutes
  ]
});