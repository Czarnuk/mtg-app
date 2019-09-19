/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from './module/category';
import { CATEGORIES } from './mock/mock-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // eslint-disable-next-line class-methods-use-this
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
