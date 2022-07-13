import { Injectable } from '@angular/core';
import { USER } from 'src/app/models/user/constant/userConstant';
import { UserClass } from 'src/app/models/user/user-class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getAllUsers() 
  {
    return USER ;
  }


  getOneUser(nickname : string) 
  {
    this.getAllUsers().forEach(user => {
      if (nickname === user.nickname) {
      } 
    });
  }


}
