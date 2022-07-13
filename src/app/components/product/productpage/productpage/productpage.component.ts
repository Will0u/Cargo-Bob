import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bob } from 'src/app/models/product/bobClass';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
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

  isLoggedIn = false ;

  constructor(
    private ActivatedRoute : ActivatedRoute,
    private bobService : BobService,
    private router : Router,
    private authService : AuthServiceService 
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id')) ;

    this.checkId(this.id);
    
    this.isLoggedIn = this.authService.IsLoggedIn() ;
  }

  checkId(id : number) {
    if ( this.bobService.getBobsArray()[id] == null ) {
      this.router.navigate(['/error404']);
    } else {
      this.bobDisplayer = this.bobService.getBobById(id)[0] ;

      this.bobSizeLenght = this.bobDisplayer.size.length;
      this.sizeMessage = this.bobService.displaySizeMessage(this.bobSizeLenght);

      this.colorLenght = this.bobDisplayer.color.length ;
      this.colorMessage = this.bobService.displayColorMessage(this.colorLenght) ;

      this.sameBobArray = this.bobService.getBobByCategWithoutOne(this.bobDisplayer.category, id);

      this.samebobArrayLenght = this.sameBobArray.length ;
    }
  }

  nextElementCarousel() {
    if (this.samebobArrayLenght) {
      if (this.index == this.samebobArrayLenght-1){
        this.index = 0 ;
      } else this.index++;
    }
  }

  prevElementCarousel() {
    if (this.samebobArrayLenght) {
      if (this.index == 0) {
        this.index = this.samebobArrayLenght-1 ;
      } else this.index--;
    }
  }


  pushToCart(id : number )
  {
    this.bobService.pushToCart(id) ;
  }


  
}
