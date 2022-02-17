import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'menu', component:HomeComponent},
  {path:'favoritos', component:FavoritosComponent},
  {path:'', redirectTo:'/menu',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
