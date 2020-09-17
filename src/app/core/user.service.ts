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

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
