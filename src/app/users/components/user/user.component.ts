import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { UsersApiActions } from '../../actions/index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // console.log(this.user);
  }

  deleteUser(userId: number): void {
    this.store.dispatch(UsersApiActions.deleteUser({ userId }));

    // this.store.dispatch(courseActionTypes.deleteCourse({ courseId }));
  }
}
