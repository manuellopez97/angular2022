import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptosService } from './criptos.service';
import { CriptosComponent } from './criptos/criptos.component';
import { HomeComponent } from './home/home.component';
import { ListadoFavoritosComponent } from './listado-favoritos/listado-favoritos.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'criptos', component:CriptosComponent},
  {path: 'favoritos', component:ListadoFavoritosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
