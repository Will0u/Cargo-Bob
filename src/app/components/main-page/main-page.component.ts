import { Component, OnInit } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { BobService } from 'src/app/service/bobService/bob.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private bobService : BobService 
  ) { }

  bobsArray ?: Bob[] ;

  ngOnInit(): void { 
    this.bobsArray = this.bobService.getBestSellBobsArray();
    console.log(this.bobsArray);
  }

  
  
}
