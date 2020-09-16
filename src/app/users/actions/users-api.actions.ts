import { User } from '../models/user';
import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[User List] Begin to load User via Service'
);

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

// export const loadUsersFailure = createAction(
//   '[Users/API] Load Users Failure',
//   props<{ error: any }>()
// );

/**
 * Add Book to Collection Actions
 */
// export const addBookSuccess = createAction(
//   '[Users/API] Add Book Success',
//   props<{ book: Book }>()
// );

// export const addBookFailure = createAction(
//   '[Users/API] Add Book Failure',
//   props<{ book: Book }>()
// );

/**
 * Remove Book from Users Actions
 */
// export const removeBookSuccess = createAction(
//   '[Users/API] Remove Book Success',
//   props<{ book: Book }>()
// );

// export const removeBookFailure = createAction(
//   '[Users/API] Remove Book Failure',
//   props<{ book: Book }>()
// );
