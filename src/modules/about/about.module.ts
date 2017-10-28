import { NgModule }          from '@angular/core';
import { AboutRoutingModule } from './about.routing.module';
import { SharedModule }       from '../shared/shared.module';

// Import Components
import { AboutComponent }     from '../../components/about/about.component';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ],
  providers: []
})

export class AboutModule {
  constructor() {
    console.log('About Module Loaded');
  }
}