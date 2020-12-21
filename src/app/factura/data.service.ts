import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getData = {
    id: 344,
    name: 'Tienda Pepita',
    address: 'Av Arequipa 444,Lima,Peru',
    phone: '44445355',
    date_created: new Date().toLocaleDateString('es-PE'),
    status: 'Pagado',
    client: {
      id: 70889470,
      name: 'Juanito alimaña',
      address: 'Mz M lt 15 Eden del Manantial',
      city: 'Lima',
      postcode: 442,
      phone: '+5170889470',
      email: 'maximopeoficiales@gmail.com',
    },
    line_items: [
      {
        id: 2,
        description: 'PS5',
        quantity: 1,
        price: 3000,
        image_url:
          'https://hardzone.es/app/uploads-hardzone.es/2020/10/PS5.jpg',
      },
      {
        id: 3,
        description: 'Laptops',
        quantity: 4,
        price: 1000,
        image_url:
          'https://images-na.ssl-images-amazon.com/images/I/41+ohb81CrL._AC_SR400,600_.jpg',
      },
      {
        id: 4,
        description: 'Mouse',
        quantity: 1,
        price: 10,
        image_url:
          'https://http2.mlstatic.com/D_NQ_NP_736263-MPE30634051036_052019-V.jpg',
      },
      {
        id: 5,
        description: 'Perfume',
        quantity: 3,
        price: 30,
        image_url:
          'https://i.pinimg.com/originals/c1/99/e1/c199e1d8225be82c966a61971a374625.jpg',
      },
    ],
    getTotal() {
      return this.line_items.reduce(
        (a: any, item: any) => a + item.price * item.quantity,
        0
      );
    },
  };
}
