import { Component, Input, OnInit } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  counter ?: {} ;

  @Input() bob ?: any;
  displayBob ?: Bob ; 
  quantity ?: number ;
  result = 0 ;
  priceArray = [0] ;

  constructor(
  ) { }

  ngOnInit(): void {
    this.displayBob = this.bob[0] ;
    this.quantity = this.bob[1];

  }

}
