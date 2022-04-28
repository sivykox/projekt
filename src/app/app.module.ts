import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CzasWolnyComponent } from './czas-wolny/czas-wolny.component';
import { HistoriaComponent } from './historia/historia.component';
import { MapaComponent } from './mapa/mapa.component';
import { KinoComponent } from './kino/kino.component';
import { TeatrComponent } from './teatr/teatr.component';
import { SportComponent } from './sport/sport.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CzasWolnyComponent,
    HistoriaComponent,
    MapaComponent,
    KinoComponent,
    TeatrComponent,
    SportComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
