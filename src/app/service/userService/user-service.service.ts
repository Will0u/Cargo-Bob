import { Injectable } from '@angular/core';
import { USER } from 'src/app/models/user/constant/userConstant';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getAllUsers() {
    return USER ;
  }
}
