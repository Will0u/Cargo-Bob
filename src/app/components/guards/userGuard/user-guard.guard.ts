import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  userNickname = this.authService.getToken() ;
  constructor(
    private authService : AuthServiceService,
    private router : Router,
    private userService : UserServiceService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authService.IsLoggedIn() !== true) {
            this.router.navigate(['/noAcess']);   
      } 
    return true;
  }
  
}

// this.router.navigate(['/noAcess']);   
