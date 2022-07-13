import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/models/user/user-class';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  userDisplay ?: UserClass ;
  userNickname = this.authService.getToken() ;

  constructor(
    private userService : UserServiceService,
    private authService : AuthServiceService
  ) { }

  ngOnInit(): void {
    if (this.userNickname) {
      this.userDisplay = this.userService.getOneUser(this.userNickname) ;
     } 
  }

}
