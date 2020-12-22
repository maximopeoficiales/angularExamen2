import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule, FormsModule],
})
export class FacturaModule {}
