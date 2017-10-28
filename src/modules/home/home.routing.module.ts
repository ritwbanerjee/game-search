import { NgModule }        from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

// Import home component here
import { HomeComponent }               from '../../components/home/home.component';
import { GetGamesResolve }             from '../shared/resolves/getGamesInfo.resolve';

const routes: Routes = [{
  path: '',
  resolve: {
    games: GetGamesResolve
  },
  children: [{
    path: '',
    component: HomeComponent,
    data: {
      showNav: true
    }
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {
  constructor() {
  }
}
