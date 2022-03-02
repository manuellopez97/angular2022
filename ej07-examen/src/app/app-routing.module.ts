import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { InicioComponent } from './inicio/inicio.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'buscador', component:BuscadorComponent},
  {path: 'thanks', component:AgradecimientosComponent},
  {path: 'favoritos', component:FavoritosComponent},
  {path: 'detalles', component: DetallesComponent},
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  {path: '**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
