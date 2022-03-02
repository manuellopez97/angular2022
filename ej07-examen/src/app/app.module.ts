import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { Page404Component } from './page404/page404.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PieComponent } from './pie/pie.component';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavBarComponent,
    InicioComponent,
    BuscadorComponent,
    Page404Component,
    FavoritosComponent,
    PieComponent,
    AgradecimientosComponent,
    FavoritoComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
