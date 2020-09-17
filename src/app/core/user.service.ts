import { User } from './../users/models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient;
  url = 'https://crudcrud.com/api/dbde26872f454c0aadbde5feb1c17c77/users/';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.url}/${userId}`);
  }

  updateUser(userId: string | number, changes: Partial<User>): Observable<any> {
    return this.http.put(`${this.url}/${userId}`, changes);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
