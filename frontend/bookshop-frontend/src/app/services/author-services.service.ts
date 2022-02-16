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

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
