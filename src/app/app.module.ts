// Importd modules for use at global level
import { NgModule }                                  from '@angular/core';
import { BrowserModule }                             from '@angular/platform-browser';
import { CommonModule }                              from '@angular/common';
import { HttpModule }                                from '@angular/http';
import { FormsModule }                               from "@angular/forms";
import { SharedModule }                              from '../modules/shared/shared.module';
import { ROUTING }                                   from './app.routing.module';

// Import AppComponent to bootstrap
import { AppComponent }                              from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    SharedModule,
    ROUTING
  ],
  providers: [
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
