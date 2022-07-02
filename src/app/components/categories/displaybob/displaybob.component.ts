import { Component, OnInit } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { BobService } from 'src/app/service/bobService/bob.service';

@Component({
  selector: 'app-displaybob',
  templateUrl: './displaybob.component.html',
  styleUrls: ['./displaybob.component.scss']
})
export class DisplaybobComponent implements OnInit {

  bobsArray ?: Bob[];

  categArray ?: string[] ;

  constructor(
    private bobService : BobService 
  ) { }

  ngOnInit(): void {
    this.bobsArray = this.bobService.getBobsArray();
    this.categArray = this.bobService.getCategoriesArray();   
  }

}
