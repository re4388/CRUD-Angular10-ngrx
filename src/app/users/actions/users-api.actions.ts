import { User } from '../models/user';
import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[User List] Begin to load User via Service'
);

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

export const deleteUser = createAction(
  '[Users/API] Delete User',
  props<{ userId: number }>()
);
