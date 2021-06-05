import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgenciaComponent } from './agencia/agencia.component';
import { Mapa1Component } from './mapa1/mapa1.component';
import { Mapa2agenciaComponent } from './mapa2agencia/mapa2agencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciaComponent,
    Mapa1Component,
    Mapa2agenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
