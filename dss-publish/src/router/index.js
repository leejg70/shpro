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
  ]
});