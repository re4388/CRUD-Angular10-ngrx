import { UserState, userReducer } from '../reducers/users.reducer';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';

export const usersFeatureKey = 'users';

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
