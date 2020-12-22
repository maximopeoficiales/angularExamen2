import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css'],
})
export class CronoComponent implements OnInit {
  segundo = 0;
  @Input() inicio = '';
  @Output() multiplo10 = new EventEmitter();
  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.segundo = parseInt(this.inicio);
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0) {
        this.multiplo10.emit(this.segundo);
      }
    }, 1000);
  }
}
