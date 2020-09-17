import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { UsersApiActions } from '../../actions/index';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  userToBeUpdated: User;
  isUpdateActivated = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  showUpdateForm(user: User) {
    this.userToBeUpdated = { ...user };
    this.isUpdateActivated = true;
  }

  updateUser(updateForm) {
    const update: Update<User> = {
      id: this.userToBeUpdated._id,
      changes: {
        ...this.userToBeUpdated,
        ...updateForm.value,
      },
    };

    this.store.dispatch(UsersApiActions.updateUser({ update }));

    this.isUpdateActivated = false;
    this.userToBeUpdated = null;
  }

  deleteUser(userId: string): void {
    this.store.dispatch(UsersApiActions.deleteUser({ userId }));
  }
}
