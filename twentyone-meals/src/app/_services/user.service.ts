import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModelIndex } from '../_models/index';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ModelIndex[]>(`${config.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get(`${config.apiUrl}/users/${id}`);
  }

  register(user: ModelIndex) {
    return this.http.post(`${config.apiUrl}/users/register`, user);
  }

  update(user: ModelIndex) {
    return this.http.put(`${config.apiUrl}/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${config.apiUrl}/users/${id}`);
  }
}