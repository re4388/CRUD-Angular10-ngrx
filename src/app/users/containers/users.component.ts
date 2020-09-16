import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { select, Store } from '@ngrx/store';
import { getAllUsers } from '../selectors/users.selector';
import { UsersApiActions } from '../actions/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store) {
    this.store.dispatch(UsersApiActions.loadUser());
    this.users$ = store.pipe(select(getAllUsers));
    // console.log('this.users$ :', this.users$);
  }

  ngOnInit(): void {}
}
