import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from 'src/app/models/user/user-class';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private UserService : UserServiceService,
    private router : Router,
    private authService : AuthServiceService
  ) { }

  usersArray ?: UserClass[] ;
  connecUser = new UserClass('','','','','');
  test ?: boolean ;
  

  ngOnInit(): void {
    this.usersArray = this.UserService.getAllUsers() ;
    console.log(this.authService.getToken());
  }

  checkIds() {
    if (this.usersArray) {
      let adminLog = [this.usersArray[0].nickname , this.usersArray[0].password  ];
      if (this.connecUser.nickname == adminLog[0] && this.connecUser.password == adminLog[1]) {
        this.authService.signIn(this.connecUser) ;
        this.router.navigate(['/adminHome'])
      } else {
        this.UserService.getAllUsers().forEach(user => {
          if (this.connecUser.password === user.password && this.connecUser.nickname === user.nickname) {
            this.authService.signIn(this.connecUser);
            this.router.navigate(['/userHome']);        
          }
        });
      }
    } 
  } 
}

