/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { User } from '../module/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: User[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
