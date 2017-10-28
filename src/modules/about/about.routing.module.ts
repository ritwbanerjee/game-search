import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

// Import home component here
import { AboutComponent }               from '../../components/about/about.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: AboutComponent,
    data: {
      showNav: false
    }
  }, {
    path: 'hello',
    component: AboutComponent,
    data: {
      sayHello: true
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

export class AboutRoutingModule {
  constructor() {
    console.log('About router loaded');
  }
}
