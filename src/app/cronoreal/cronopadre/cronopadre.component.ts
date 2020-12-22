import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronopadre',
  templateUrl: './cronopadre.component.html',
  styleUrls: ['./cronopadre.component.css'],
})
export class CronopadreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mensaje = '';

  actualizar(t: any) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
