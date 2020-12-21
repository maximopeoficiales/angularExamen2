import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
})
export class DadosComponent implements OnInit {
  ngOnInit(): void {}
  valor1: number;
  valor2: number;
  valor3: number;
  resultado = 'Juega bro';

  constructor() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
  }

  generarAleatorio() {
    return Math.trunc(Math.random() * 3 + 1);
  }
  tirarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    this.resultado =
      // tslint:disable-next-line: triple-equals
      this.valor1 == this.valor2 && this.valor1 == this.valor3
        ? 'Gano'
        : 'Perdio';
  }
}
