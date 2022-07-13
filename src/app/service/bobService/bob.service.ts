import { Injectable } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { BOB } from 'src/app/models/product/constant/bobConstant';
import { UserServiceService } from '../userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class BobService {

  constructor(
    private userService : UserServiceService
  ) { }

  getBobsArray() : Bob[] {
    return BOB ;
  }

  getBestSellBobsArray() : Bob[] {
    return BOB.filter(bob => bob.isBestSell == true) ;
  }

  getBobById(id : number) : Bob[] {
    return BOB.filter(bob => bob.id == id);
  }

  getBobByCategWithoutOne(category : string , id : number) : Bob[] {
    return BOB.filter(bob => bob.category == category && bob.id != id);
  }

  displaySizeMessage(arrayLenght : number) : string {
    if (arrayLenght == 1) {
      return 'Taille disponible : ';
    } else return 'Tailles disponibles : '; 
  }

  displayColorMessage(arrayLenght : number) : string {
    if (arrayLenght == 1) {
      return 'Couleur disponible : ';
    } else return 'Couleurs disponibles : '; 
  }

  getCategoriesArray() : string[] {
    let categArray : string[] = [];
    BOB.forEach(bob => {
      if (!categArray.includes(bob.category)) {
        categArray.push(bob.category);
      }   
    });
    return categArray;   
  }

  getBobByCateg(categ : string) : Bob[] {
    return BOB.filter(bob => bob.category == categ);
  }


}
