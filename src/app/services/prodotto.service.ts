import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerUrl} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Prodotto} from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  apiUrl = `${ServerUrl.url}/prodotto`;

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<Prodotto[]> {
    let request = this.http.get<Prodotto[]>(this.apiUrl+ "/getAll");
    return request;
  }

  getById(id: number): Observable<Prodotto> {
    let request = this.http.get<Prodotto>(this.apiUrl+ "/getById/"+id);
    return request;
  }

  getProdottiByIdCliente(id: number): Observable<Prodotto[]>  {
    let request = this.http.get<Prodotto[]>(this.apiUrl+ "/getByIdCliente/" + id);
    return request;
  }

  save(prodotto: Prodotto): Observable<Prodotto> {
    let request = this.http.post<Prodotto>(this.apiUrl + "/save", prodotto);
    return request;
  }

  update(prodotto: Prodotto): Observable<Prodotto> {
    let request = this.http.post<Prodotto>(this.apiUrl + "/update", prodotto);
    return request;
  }
}
