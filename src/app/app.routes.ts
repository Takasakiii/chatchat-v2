import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat').then((m) => m.Chat),
  },
];
