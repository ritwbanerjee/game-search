import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import all the shared components here
import { HeaderComponent }     from '../../components/header/header.component';
import { FooterComponent }     from '../../components/footer/footer.component';

// Import Resolves and Services
import { HttpService }         from './services/http.service';
import { GetGamesResolve }     from './resolves/getGamesInfo.resolve';
import { GetGamesServices }    from './services/getGames.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    HttpService,
    GetGamesResolve,
    GetGamesServices
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule {

}