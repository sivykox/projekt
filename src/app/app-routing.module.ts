import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CzasWolnyComponent } from './czas-wolny/czas-wolny.component';
import { HistoriaComponent } from './historia/historia.component';
import { KinoComponent } from './kino/kino.component';
import { SportComponent } from './sport/sport.component';
import { TeatrComponent } from './teatr/teatr.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
  {path: 'czas-wolny', component: CzasWolnyComponent,
            children:[{
              path: 'kino',
              component: KinoComponent,
            },
            {
              path: 'teatr',
              component: TeatrComponent,
            },
            {
              path: 'sport',
              component: SportComponent,
            }]},
    {path: 'historia', component: HistoriaComponent},
    {path: 'mapa', component: MapaComponent},
    {path: '', redirectTo: '/czas-wolny',pathMatch: 'full'},//to musi być u góry
    {path: '**', component: PageNotFoundComponent}//a to na końcu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
