import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { UserComponent } from './components/user/user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersFeatureKey, reducer } from './store/index';
import { UsersEffects } from './effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [UsersComponent, UserListsComponent, UserComponent, AddUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(usersFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersModule {}
