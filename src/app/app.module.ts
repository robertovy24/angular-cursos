import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { Heroesmodulo } from './heroes/heroes.module';
import { ContadorModulo } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Heroesmodulo,
    ContadorModulo 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
