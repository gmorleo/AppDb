import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import {HttpClientModule} from '@angular/common/http';
import { ElencoComponent } from './components/elenco/elenco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    ProdottoComponent,
    ElencoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
