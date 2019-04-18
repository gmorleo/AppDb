import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerUrl} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl = `${ServerUrl.url}/cliente`;

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<Cliente[]> {
    let request = this.http.get<Cliente[]>(this.apiUrl+ "/getAll");
    return request;
  }

  getById(id: number): Observable<Cliente> {
    let request = this.http.get<Cliente>(this.apiUrl+ "/getById/"+id);
    return request;
  }

  save(cliente: Cliente): Observable<Cliente> {
    let request = this.http.post<Cliente>(this.apiUrl + "/save", cliente);
    return request;
  }

  update(cliente: Cliente): Observable<Cliente> {
    let request = this.http.post<Cliente>(this.apiUrl + "/update", cliente);
    return request;
  }

  delete(cliente: Cliente): Observable<Cliente> {
    let request = this.http.post<Cliente>(this.apiUrl + "/delete", cliente);
    return request;
  }
}
