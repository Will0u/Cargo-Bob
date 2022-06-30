import { Component, OnInit } from '@angular/core';
import { BOB } from 'src/app/models/product/constant/bobConstant';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  bobsArray = BOB ;

  constructor() { }

  ngOnInit(): void { 
    console.log(this.bobsArray);
  }

  
  
}
