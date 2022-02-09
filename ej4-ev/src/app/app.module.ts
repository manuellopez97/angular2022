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
import { FiltroPatronPipe } from './filtro-patron.pipe';
import { FiltroFabPipe } from './filtro-fab.pipe';
import { FiltroTecPipe } from './filtro-tec.pipe';
import { ParamsFiltrosService } from './params-filtros.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AsideFiltrosComponent,
    ResultadosComponent,
    CocheTarjetaComponent,
    CocheFilaComponent,
    FiltroPatronPipe,
    FiltroFabPipe,
    FiltroTecPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BdCochesService, ParamsFiltrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
