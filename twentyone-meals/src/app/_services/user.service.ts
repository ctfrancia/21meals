import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  // getAll() {
  //   return this.http.get<User[]>(`http:localhost:3001/users`);
  // }

  // getById(id: number) {
  //   return this.http.get(`http:localhost:3001/users/${id}`);
  // }

  // register(user: User) {
  //   return this.http.post(`http:localhost:3001/users/register`, user);
  // }


  // delete(id: number) {
  //   return this.http.delete(`http:localhost:3001/users/${id}`);
  // }
}