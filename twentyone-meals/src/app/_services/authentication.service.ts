import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../_models/user';
// const helper = new JwtHelperService;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  currentUser$: BehaviorSubject<User>;


  constructor(private http: HttpClient) {
    this.currentUser$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
    btoa('username:password'));
  }

  public get currentUserValue(): User {
    return this.currentUser$.value;
  }


  login(email: string, password: string) {
    // const decodedToken = helper.decodeToken();
    console.log(email, password);

    return this.http.get<any>('http://localhost:3001/sign-in', {
        headers: {
          'Authorization': 'Basic ' + btoa(`${email}:${password}`)
          }
      })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser$.next(user);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser$.next(null);
  }
}