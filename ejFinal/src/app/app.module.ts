import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CriptosComponent } from './criptos/criptos.component';
import { CriptoComponent } from './cripto/cripto.component';
import { CheapestPipe } from './cheapest.pipe';
import { CambioPipe } from './cambio.pipe';
import { ListadoFavoritosComponent } from './listado-favoritos/listado-favoritos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CriptosComponent,
    CriptoComponent,
    CheapestPipe,
    CambioPipe,
    ListadoFavoritosComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
