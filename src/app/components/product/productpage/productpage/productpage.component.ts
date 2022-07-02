import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bob } from 'src/app/models/product/bobClass';
import { BobService } from 'src/app/service/bobService/bob.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  id ?: number ;
  bobDisplayer ?: Bob ;
  bobSizeLenght ?: number ; 
  sizeMessage ?: string ;

  colorLenght ?: number ;
  colorMessage ?: string ;

  sameBobArray ?: Bob[] ;

  samebobArrayLenght ?: number ;

  index = 0 ;

  constructor(
    private ActivatedRoute : ActivatedRoute,
    private bobService : BobService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id')) ;

    this.bobDisplayer = this.bobService.getBobById(this.id)[0] ;

    this.bobSizeLenght = this.bobDisplayer.size.length;
    this.sizeMessage = this.bobService.displaySizeMessage(this.bobSizeLenght);

    this.colorLenght = this.bobDisplayer.color.length ;
    this.colorMessage = this.bobService.displayColorMessage(this.colorLenght) ;

    this.sameBobArray = this.bobService.getBobByCategWithoutOne(this.bobDisplayer.category, this.id);

    this.samebobArrayLenght = this.sameBobArray.length ;
  }


  nextElementCarousel() {
    if (this.samebobArrayLenght) {
      if (this.index == this.samebobArrayLenght-1) {    
      } else this.index++ ;
    }
  }

  prevElementCarousel() {
    if (this.index > 0) {
      this.index--;
    }
  }
}
