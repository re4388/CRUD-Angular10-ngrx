import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { UsersApiActions } from '../../actions/index';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }

    const user: User = {
      name: submittedForm.value.name,
      age: submittedForm.value.age,
      loc: submittedForm.value.loc,
    };

    this.store.dispatch(UsersApiActions.createUser({ user }));
  }
}
