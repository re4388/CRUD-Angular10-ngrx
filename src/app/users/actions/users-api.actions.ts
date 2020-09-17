import { User } from '../models/user';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadUser = createAction(
  '[User List] Begin to load User via Service'
);

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

export const deleteUser = createAction(
  '[Users/API] Delete User',
  props<{ userId: string }>()
);

export const updateUser = createAction(
  '[Users/API] Update User',
  props<{ update: Update<User> }>()
);

export const createUser = createAction(
  '[Users/API] Create User',
  props<{ user: User }>()
);
