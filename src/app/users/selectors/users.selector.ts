import { selectAll, UserState } from '../reducers/users.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// get the course slice of entity
export const userFeatureSelector = createFeatureSelector<UserState>('users');

// createSelector to get all selector
// have include the extra state
export const areUsersLoaded = createSelector(
  userFeatureSelector,
  (state) => state.usersLoaded
);

export const getAllUsers = createSelector(userFeatureSelector, selectAll);
