import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name = 'Maximo Junior Apaza Chirhuana';
  title = 'Aprendiendo Angular';
  current_date = new Date().toLocaleString('es-pe');
}
