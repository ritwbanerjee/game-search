import { NgModule }          from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule }      from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Import Components
import { HomeComponent }     from '../../components/home/home.component';
import { CardComponent }     from '../../components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    CardComponent
  ],
  exports: [
    HomeComponent,
    CardComponent
  ],
  providers: []
})

export class HomeModule {
  constructor() {
    console.log('Home Module Loaded');
  }
}