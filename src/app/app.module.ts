import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuegoModule } from './juego/juego.module';
import { FormularioModule } from './formulario/formulario.module';
import { FacturaModule } from './factura/factura.module';
import { LibreModule } from './libre/libre.module';
import { CronorealModule } from './cronoreal/cronoreal.module';

//importa los modulos que usaras
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JuegoModule,
    FormularioModule,
    FacturaModule,
    LibreModule,
    CronorealModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
