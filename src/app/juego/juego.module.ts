import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosComponent } from './dados/dados.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { SimpleComponent } from './simple/simple.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DadosComponent, AcercaDeComponent, SimpleComponent],
  imports: [CommonModule, RouterModule],
})
export class JuegoModule {}
