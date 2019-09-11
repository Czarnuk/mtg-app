/* eslint-disable no-unused-vars */
import { Component } from '@angular/core';
import { categories } from '../module/categories';
import { users } from '../module/users';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class MatchResultComponent {
  categories = categories;

  users = users;
}
