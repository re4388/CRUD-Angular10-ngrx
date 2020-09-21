import { Component, Inject, Input, OnInit } from '@angular/core';
import { UsersApiActions } from '../../../actions/index';
import { User } from '../../../models/user';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  @Input() user: User;
  userToBeUpdated: User;

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
    this.userToBeUpdated = this.data.user;
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

    // this.userToBeUpdated = null;
  }
}
