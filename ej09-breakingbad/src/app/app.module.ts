import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { QuotesComponent } from './quotes/quotes.component';
import { Page404Component } from './page404/page404.component';
import { CharListComponent } from './char-list/char-list.component';
import { FiltroNamePipe } from './filtro-name.pipe';
import { ListadoFavsComponent } from './listado-favs/listado-favs.component';
import { FavsComponent } from './favs/favs.component';
import { QuoteNamePipe } from './quote-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CharactersComponent,
    QuotesComponent,
    Page404Component,
    CharListComponent,
    FiltroNamePipe,
    ListadoFavsComponent,
    FavsComponent,
    QuoteNamePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
