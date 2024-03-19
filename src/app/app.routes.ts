import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page_1',
    loadComponent: () =>
      import('./page-1/page-1.component').then((mod) => mod.Page1Component),
  },
  {
    path: 'page_2',
    loadComponent: () =>
      import('./page-2/page-2.component').then((mod) => mod.Page2Component),
  },
];
