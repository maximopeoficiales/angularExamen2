import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private urlEndPoint: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getClients(): Observable<Cliente[]> {
    // patron observable , of convierte a string nuestra data
    // return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Cliente[]));
  }
}
