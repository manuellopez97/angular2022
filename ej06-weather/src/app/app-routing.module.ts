import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FavsComponent } from './favs/favs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'menu', component:HomeComponent},
  {path:'gestion', component:FavoritosComponent},
  {path:'favoritos', component:FavsComponent},
  {path:'', redirectTo:'/menu',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
