import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './containers/users.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersFeatureKey, reducer } from './store/index';
import { UsersEffects } from './effects';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { WelcomePageComponent } from './containers/welcome-page/welcome-page.component';
import { AnotherDashboardComponent } from './containers/another-dashboard/another-dashboard.component';
import { CounterComponent } from './components/counter/counter.component';
import { AnotherUserListComponent } from './components/another-user-list/another-user-list.component';
import { UserLocComponent } from './components/user-loc/user-loc.component';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    UsersComponent,
    UserListsComponent,
    UserComponent,
    AddUserComponent,
    WelcomePageComponent,
    AnotherDashboardComponent,
    CounterComponent,
    AnotherUserListComponent,
    UserLocComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(usersFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects]),
    MaterialModule,
  ],
})
export class UsersModule {}
