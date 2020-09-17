import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { UsersApiActions } from '../actions';

// import { loadUsersSuccess, loadUsersFailure } from '../actions/users-api.actions';
// import { enter } from '../actions/users-page.actions';

import { User } from '../models/user';
import { UserService } from '../../core/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private storageService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersApiActions.loadUser),
      switchMap(() =>
        this.storageService.getAllUsers().pipe(
          map((users: User[]) => UsersApiActions.loadUsersSuccess({ users }))
          // catchError((error) => of(UsersApiActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
    ofType(UsersApiActions.deleteUser),
    switchMap((user) => this.storageService.deleteUser(user.userId))
  ), { dispatch: false});
}
