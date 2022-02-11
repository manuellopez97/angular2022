import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'buscador', component: BuscadorComponent},
  {path:'favoritos', component:FavoritosComponent},
  {path:'contactos', component:ContactosComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
