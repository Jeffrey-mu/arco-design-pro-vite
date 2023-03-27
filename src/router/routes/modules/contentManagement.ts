import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/contentManagement',
  name: 'contentManagement',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.content',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'data', // The midline path complies with SEO specifications
      name: 'data',
      component: () => import('@/views/contentManagement/data/index.vue'),
      meta: {
        locale: 'menu.list.data',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
