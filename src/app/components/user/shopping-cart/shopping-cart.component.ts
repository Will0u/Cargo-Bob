import { Component, OnInit } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { BobService } from 'src/app/service/bobService/bob.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  userNickname = this.authService.getToken();
  userCart ?: number[]
  bobsArray : Bob[] = [] ;

  constructor(
    private userService : UserServiceService,
    private authService : AuthServiceService,
    private bobService : BobService
  ) { }

  ngOnInit(): void {
    if (this.userNickname) {
      this.userCart = this.userService.getOneUser(this.userNickname).articlesArray ;

      if (this.userCart) {
        this.userCart.forEach(bobId => {
          this.bobsArray.push(this.bobService.getBobById(bobId)[0]) ;
        });
      }
      console.log(this.bobsArray);
    }
  }

}
