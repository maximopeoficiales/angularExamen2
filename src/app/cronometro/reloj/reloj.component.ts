import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  fecha = new Date().toLocaleString('es-PE');
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.fecha = new Date().toLocaleString('es-PE');
    }, 1000);
  }
}
