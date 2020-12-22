import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  constructor(private data: DataService) {}
  actulizar: boolean = false;
  factura: any = this.data.getData;
  id = 0;
  description = 'PS5';
  quantity = 3;
  price = 3000;
  image_url = '';

  ngOnInit(): void {}

  agregarProducto() {
    this.factura.line_items.push({
      id: this.factura.line_items.lenght + 1,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      image_url: this.image_url,
    });
  }
  borrarProducto(id: any) {
    this.factura.line_items.filter((item: any, index: any) => {
      if (item.id == id) {
        this.factura.line_items.splice(index, 1);
      }
    });
  }
  actualizarProducto(id: any) {
    this.factura.line_items.filter((item: any, index: any) => {
      if (item.id == id) {
        this.factura.line_items[index].description = this.description;
        this.factura.line_items[index].quantity = this.quantity;
        this.factura.line_items[index].price = this.price;
        this.factura.line_items[index].image_url = this.image_url;
      }
    });
    this.actulizar = false;
  }
  seleccionarProducto(id: any) {
    this.factura.line_items.filter((item: any, index: any) => {
      if (item.id == id) {
        this.id = id;
        this.description = this.factura.line_items[index].description;
        this.quantity = this.factura.line_items[index].quantity;
        this.price = this.factura.line_items[index].price;
        this.image_url = this.factura.line_items[index].image_url;
      }
    });
    this.actulizar = true;
  }
}
