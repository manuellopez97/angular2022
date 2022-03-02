import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MercedesPipe } from './mercedes.pipe';
import { CheaperThanPipe } from './cheaper-than.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MercedesPipe,
    CheaperThanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
