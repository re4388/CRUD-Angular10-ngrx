import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UsersApiActions } from '../actions';
import { User } from '../models/user';

export interface UserState extends EntityState<User> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user._id,
});

export const initialState = adapter.getInitialState({ usersLoaded: false });

export const userReducer = createReducer(
  initialState,

  on(UsersApiActions.loadUsersSuccess, (state, action) => {
    // update all course and the extra prop: `coursesLoaded: true`
    return adapter.setAll(action.users, { ...state, usersLoaded: true });
  }),

  on(UsersApiActions.deleteUser, (state, action) => {
    return adapter.removeOne(action.userId, state);
  }),

  on(UsersApiActions.updateUser, (state, action) => {
    return adapter.updateOne(action.update, state);
  }),

  on(UsersApiActions.createUser, (state, action) => {
    return adapter.addOne(action.user, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
