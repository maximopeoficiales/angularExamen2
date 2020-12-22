import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronoComponent } from './crono/crono.component';
import { CronopadreComponent } from './cronopadre/cronopadre.component';



@NgModule({
  declarations: [CronoComponent, CronopadreComponent],
  imports: [
    CommonModule
  ]
})
export class CronorealModule { }
