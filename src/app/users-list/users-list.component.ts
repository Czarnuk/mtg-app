import { Component } from '@angular/core';
import { users } from '../module/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class UsersListComponent {
  users = users;
}
