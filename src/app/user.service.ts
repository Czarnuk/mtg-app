/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './module/user';
import { USERS } from './mock/mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // eslint-disable-next-line class-methods-use-this
  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
