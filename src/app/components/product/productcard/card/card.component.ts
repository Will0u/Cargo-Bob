import { Component, Input, OnInit } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
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

  constructor(
    private bobService : BobService
  ) { }

  ngOnInit(): void {
    if (this.bob) {
      this.sizeLenght = this.bob.size.length ;
      this.sizeMessage = this.bobService.displaySizeMessage(this.sizeLenght);
    }
  }

}
