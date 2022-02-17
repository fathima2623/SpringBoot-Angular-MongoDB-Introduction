import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author";

const baseUrl = 'http://localhost:8080/api/authors'
@Injectable({
  providedIn: 'root'
})
export class AuthorServicesService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(baseUrl);
  }

  get(id: any): Observable<Author> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Author[]> {
    console.log(baseUrl+'?name='+name);
    return this.http.get<Author[]>(`${baseUrl}?name=${name}`);
  }

}
