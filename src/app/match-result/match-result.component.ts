/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  matchResultForm;

  constructor(private categoryService: CategoryService,
              private userService: UserService,
              private formBuilder: FormBuilder) {
    this.matchResultForm = this.formBuilder.group({
      firstPlayer: '',
      secondPlayer: '',
      category: '',
      winner: '',
    });
  }

  categories:Category[];

  users: User[];

  ngOnInit() {
    this.getCategories();
    this.getUsers();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe((categories) => this.categories = categories);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users) => this.users = users);
  }

  addResult(matchResult) : void {
    const winner = { name: '', category: '' };
    if (matchResult.winner === 'first') {
      winner.name = matchResult.firstPlayer.name;
      winner.category = matchResult.category.type;
      this.userService.updateUser(winner)
        .subscribe();
    } else if (matchResult.winner === 'second') {
      winner.name = matchResult.secondPlayer.name;
      winner.category = matchResult.category.type;
      this.userService.updateUser(winner)
        .subscribe();
    } else {
      window.alert('You have to choose the winner!');
    }
    this.matchResultForm.reset();
  }
}
