import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UsersApiActions } from '../actions';
import { User } from '../models/user';

export interface UserState extends EntityState<User> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({ usersLoaded: false });

export const userReducer = createReducer(
  initialState,

  on(UsersApiActions.loadUsersSuccess, (state, action) => {
    // update all course and the extra prop: `coursesLoaded: true`
    return adapter.setAll(action.users, { ...state, usersLoaded: true });
  })
);

export const { selectAll } = adapter.getSelectors();
