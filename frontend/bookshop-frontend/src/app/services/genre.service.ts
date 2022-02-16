import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author";
import {Genre} from "../models/genre";

const baseUrl = 'http://localhost:8080/api/genres'

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Genre[]> {
    return this.http.get<Genre[]>(baseUrl);
  }

}
