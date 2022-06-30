import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private ActivatedRoute : ActivatedRoute,
    private bobService : BobService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id')) ;

    this.bobDisplayer = this.bobService.getBobById(this.id)[0] ;

    this.bobSizeLenght = this.bobDisplayer.size.length;
    this.sizeMessage = this.bobService.displaySizeMessage(this.bobSizeLenght);
    console.log(this.bobDisplayer);
  }


}
