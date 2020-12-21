import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormReactivoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormularioModule {}
