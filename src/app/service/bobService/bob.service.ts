import { Injectable } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { BOB } from 'src/app/models/product/constant/bobConstant';

@Injectable({
  providedIn: 'root'
})
export class BobService {

  constructor() { }

  getBobsArray() : Bob[] {
    return BOB ;
  }

  getBestSellBobsArray() : Bob[] {
    return BOB.filter(bob => bob.isBestSell == true) ;
  }

  getBobById(id : number) : Bob[] {
    return BOB.filter(bob => bob.id == id);
  }

  displaySizeMessage(arrayLenght : number) : string {
    if (arrayLenght == 1) {
      return 'Taille disponible : ';
    } else return 'Tailles disponibles : '; 
  }

}
