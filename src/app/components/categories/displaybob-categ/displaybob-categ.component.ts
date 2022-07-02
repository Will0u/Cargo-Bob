import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bob } from 'src/app/models/product/bobClass';
import { BobService } from 'src/app/service/bobService/bob.service';

@Component({
  selector: 'app-displaybob-categ',
  templateUrl: './displaybob-categ.component.html',
  styleUrls: ['./displaybob-categ.component.scss']
})
export class DisplaybobCategComponent implements OnInit {

  bobsArray ?: Bob[];
  categ ?: string ;
  categArray ?: string[] ;

  constructor(
    private bobService : BobService,
    private ActivatedRoute : ActivatedRoute,
    private router : Router 
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.categ = <string>this.ActivatedRoute.snapshot.paramMap.get('categ') ;
    this.bobsArray = this.bobService.getBobByCateg(this.categ) ;
    this.categArray = this.bobService.getCategoriesArray();   
  }

}
