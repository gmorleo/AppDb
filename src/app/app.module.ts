import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ElencoComponent } from './components/elenco/elenco.component';
import { ElencoMongoComponent } from './components/elenco-mongo/elenco-mongo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElencoComponent,
    ElencoMongoComponent
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
