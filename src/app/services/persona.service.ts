import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Persona} from '../models/persona';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ServerUrlMongo, ServerUrlMySql} from '../../environments/environment';
import {PersonaMongo} from '../models/personaMongo';
import {RequestOptions} from '@angular/http';



const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const requestOptions = {
  headers: new HttpHeaders(headerDict),
  withCredentials: true
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  apiUrlMysql = `${ServerUrlMySql.url}/persona`;
  apiUrlMongo = `${ServerUrlMongo.url}/persona`;

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<Persona[]> {
    let request = this.http.get<Persona[]>(this.apiUrlMysql+ "/getAll");
    return request;
  }

  getById(id: number): Observable<Persona> {
    let request = this.http.get<Persona>(this.apiUrlMysql+ "/getById/"+id);
    return request;
  }

  save(persona: Persona): Observable<Persona> {
    let request = this.http.post<Persona>(this.apiUrlMysql + "/save", persona);
    return request;
  }

  update(persona: Persona): Observable<Persona> {
    let request = this.http.post<Persona>(this.apiUrlMysql + "/update", persona);
    return request;
  }

  delete(id: number): Observable<Persona> {
    let request = this.http.get<Persona>(this.apiUrlMysql+ "/deleteById/"+id);
    return request;
  }

  getAllMongo(): Observable<PersonaMongo[]> {

    let request = this.http.get<PersonaMongo[]>(this.apiUrlMongo+ "/getAll",  {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'} });
    console.log(request);
    return request;
  }

  getByIdMongo(id: string): Observable<PersonaMongo> {
    let request = this.http.get<PersonaMongo>(this.apiUrlMongo+ "/getById/"+id);
    return request;
  }

  saveMongo(persona: PersonaMongo): Observable<PersonaMongo> {
    let request = this.http.post<PersonaMongo>(this.apiUrlMongo + "/save", persona);
    return request;
  }

  updateMongo(persona: PersonaMongo): Observable<PersonaMongo> {
    let request = this.http.post<PersonaMongo>(this.apiUrlMongo + "/update", persona);
    return request;
  }

  deleteMongo(id: string): Observable<PersonaMongo> {
    let request = this.http.get<PersonaMongo>(this.apiUrlMongo+ "/deleteById/"+id);
    return request;
  }
}
