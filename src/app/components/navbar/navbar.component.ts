import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false ;
  isAdminLoggedIn = false ;

  constructor(
    private authService : AuthServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.IsLoggedIn() ;
    this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
  }

  logOut () {
    this.authService.logOut();
    this.ngOnInit();
  }
  

}
