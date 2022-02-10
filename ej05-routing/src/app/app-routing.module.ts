import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

const routes: Routes = [
  {path: 'sec1', component: Section1Component},
  {path: 'sec2', component: Section2Component},
  {path: '', redirectTo: 'sec1', pathMatch: 'full'},
  {path: '**', component:Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
