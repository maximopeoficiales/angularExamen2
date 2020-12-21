import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* componentes */
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, HttpClientModule,FormsModule],
})
export class LibreModule {}
