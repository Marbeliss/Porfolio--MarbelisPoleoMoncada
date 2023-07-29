import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HabilidadesAdicionalesComponent } from './components/habilidades-adicionales/habilidades-adicionales.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { FormacionAcademicaComponent } from './components/formacion-academica/formacion-academica.component';
import { ReferenciasLaboralesComponent } from './components/referencias-laborales/referencias-laborales.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroeComponent,
    SobreMiComponent,

    EstudiosComponent,
    HabilidadesAdicionalesComponent,
    ContactoComponent,
    FormacionAcademicaComponent,
    ReferenciasLaboralesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    PorfolioComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
