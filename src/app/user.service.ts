/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './module/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/get-users`);
  }
}
