import { Component, Input, OnInit } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { BobService } from 'src/app/service/bobService/bob.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() bob ?: Bob;
  sizeMessage ?: string ;
  sizeLenght ?: number ;

  isLoggedIn = false ;

  constructor(
    private bobService : BobService,
    private authService : AuthServiceService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.IsLoggedIn();
  }


  pushToCart(id : number )
  {
    this.bobService.pushToCart(id) ;
  }


}
