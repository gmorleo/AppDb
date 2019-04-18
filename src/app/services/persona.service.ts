import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Persona} from '../models/persona';
import {HttpClient} from '@angular/common/http';
import {ServerUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl = `${ServerUrl.url}/persona`;

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<Persona[]> {
    let request = this.http.get<Persona[]>(this.apiUrl+ "/getAll");
    return request;
  }

  getById(id: number): Observable<Persona> {
    let request = this.http.get<Persona>(this.apiUrl+ "/getById/"+id);
    return request;
  }

  save(persona: Persona): Observable<Persona> {
    let request = this.http.post<Persona>(this.apiUrl + "/save", persona);
    return request;
  }

  update(persona: Persona): Observable<Persona> {
    let request = this.http.post<Persona>(this.apiUrl + "/update", persona);
    return request;
  }

  delete(id: number): Observable<Persona> {
    let request = this.http.get<Persona>(this.apiUrl+ "/deleteById/"+id);
    return request;
  }
}
