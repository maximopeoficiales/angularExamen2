import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css'],
})
export class FormReactivoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  resultado: string = '';
  data = { nombre: '', mail: '', age: 0, mensaje: '' };
  //se declaran las validaciones
  formularioContacto: any = this.fb.group({
    nombre: ['Maximo', [Validators.required, Validators.minLength(4)]],
    mail: ['maximopeoficia@gmail.com', [Validators.required, Validators.email]],
    age: ['2001', Validators.required],
    mensaje: ['balbalba', [Validators.required, Validators.maxLength(100)]],
  });
  ngOnInit(): void {}

  formSubmit() {
    // console.log(this.formularioContacto.value);
    this.resultado = this.formularioContacto.valid
      ? 'Todos los datos son válidos'
      : 'Hay datos inválidos en el formulario';
    this.data = this.formularioContacto.value;
    this.data.age =
      new Date().getFullYear() - this.formularioContacto.value.age;
  }
}
