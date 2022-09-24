import { lazy } from 'solid-js';
import { RouteDefinition } from 'solid-app-router';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home'))
  },
  {
    path: '/fes/winter2022',
    component: lazy(() => import('./pages/fes/winter2022'))
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/404')),
  },
];