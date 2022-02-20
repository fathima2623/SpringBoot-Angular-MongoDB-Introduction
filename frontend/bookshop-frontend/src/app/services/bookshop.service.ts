import { Injectable } from '@angular/core';
import {BookShop} from "../models/bookshop";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";
const baseUrl = 'http://localhost:8080/api/bookshops'
@Injectable({
  providedIn: 'root'
})
export class BookshopService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<BookShop[]> {
    return this.http.get<BookShop[]>(baseUrl);
  }

  get(id: any): Observable<BookShop> {
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

  findByTitle(title: any): Observable<BookShop> {
    console.log(baseUrl+'/title/'+title);
    return this.http.get<Book>(`${baseUrl}/title/${title}`);
  }
}
