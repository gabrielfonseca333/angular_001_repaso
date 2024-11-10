import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

const routes: Routes = [
  {path:"", component:LibreriaComponent},
  {path:"personasapi", component:PersonasapiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
