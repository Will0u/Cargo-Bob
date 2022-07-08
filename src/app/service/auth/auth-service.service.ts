import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from 'src/app/models/user/user-class';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private router : Router
  ) { }

  signIn(user : UserClass) {
    localStorage.setItem('token' , user.nickname+user.password);
  }

  getToken() {
    return localStorage.getItem('token') ;
  }

  logOut() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['/connection']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

}
