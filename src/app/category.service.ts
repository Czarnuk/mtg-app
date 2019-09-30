/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Category } from './module/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/get-categories`);
  }
}
