import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: '../../src/modules/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: '../../src/modules/about/about.module#AboutModule'
  }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);