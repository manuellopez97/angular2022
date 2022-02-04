import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AsideFiltrosComponent } from './aside-filtros/aside-filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { CocheTarjetaComponent } from './coche-tarjeta/coche-tarjeta.component';
import { BdCochesService } from './bd-coches.service';
import { HttpClientModule } from '@angular/common/http';
import { CocheFilaComponent } from './coche-fila/coche-fila.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AsideFiltrosComponent,
    ResultadosComponent,
    CocheTarjetaComponent,
    CocheFilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BdCochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
