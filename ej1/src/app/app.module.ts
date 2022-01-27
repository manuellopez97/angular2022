import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ListadoCochesComponent } from './listado-coches/listado-coches.component';
import { AlumnoFichaComponent } from './alumno-ficha/alumno-ficha.component';
import { CarCardComponent } from './car-card/car-card.component';
import { BdCochesService } from './bd-coches.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnosComponent,
    ListadoCochesComponent,
    AlumnoFichaComponent,
    CarCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BdCochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
