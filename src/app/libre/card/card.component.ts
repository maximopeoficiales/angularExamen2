import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private userApi: UsersApiService) {}
  // cuando inicia el component
  ngOnInit(): void {
    this.userApi
      .getClients()
      .subscribe((clientes) => (this.clientes = clientes));
  }
}
