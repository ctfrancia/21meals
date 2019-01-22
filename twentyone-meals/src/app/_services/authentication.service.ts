import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../_models/user';
const helper = new JwtHelperService;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  currentUser$: BehaviorSubject<User>;


  constructor(private http: HttpClient) {
    console.log('HELLO FROM AUTH')
    this.currentUser$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser$ = new BehaviorSubject<User>(null);
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

    // const res =  this.http.get<any>('http://localhost:3001/sign-in', {
    //     headers: {
    //         email,
    //         password,
    //       }
    //   });
    //   console.log(res);
    //   return res;
      //return http request instead of sending res




    //below is what we are doing
    // return this.http.post<any>(`http:localhost:3001/users/authenticate`, { email, password })
    //   .pipe(map(user => {
    //     console.log('USER', user);

    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       this.currentUser$.next(user);
    //     }
    //     return user;
    //   }));
  }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // this.currentUser$.next(null);
  }
}