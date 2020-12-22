import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelojComponent } from './cronometro/reloj/reloj.component';
import { CronopadreComponent } from './cronoreal/cronopadre/cronopadre.component';
import { TemplateComponent } from './factura/template/template.component';
import { FormReactivoComponent } from './formulario/form-reactivo/form-reactivo.component';
import { AcercaDeComponent } from './juego/acerca-de/acerca-de.component';
import { DadosComponent } from './juego/dados/dados.component';
import { CardComponent } from './libre/card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/relog', pathMatch: 'full' },
  {
    path: 'relog',
    component: RelojComponent,
  },
  {
    path: 'dados',
    component: DadosComponent,
  },
  {
    path: 'acercade',
    component: AcercaDeComponent,
  },
  {
    path: 'formulario',
    component: FormReactivoComponent,
  },
  {
    path: 'factura',
    component: TemplateComponent,
  },
  {
    path: 'cards',
    component: CardComponent,
  },
  {
    path: 'crono',
    component: CronopadreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
