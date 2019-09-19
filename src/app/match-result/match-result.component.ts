/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Category } from '../module/category';
import { User } from '../module/user';
import { CategoryService } from '../category.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class MatchResultComponent {
  constructor(private categoryService: CategoryService,
              private userService: UserService) {}

  categories:Category[];

  users: User[];

  ngOnInit() {
    this.getCategories();
    this.getUsers();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
