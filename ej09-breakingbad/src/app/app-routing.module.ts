import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharListComponent } from './char-list/char-list.component';
import { CharactersComponent } from './characters/characters.component';
import { FavsComponent } from './favs/favs.component';
import { HomeComponent } from './home/home.component';
import { ListadoFavsComponent } from './listado-favs/listado-favs.component';
import { Page404Component } from './page404/page404.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'characters', component: CharListComponent},
  {path:'quotes', component: QuotesComponent},
  {path:'favourites', component:ListadoFavsComponent},
  {path:'**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
