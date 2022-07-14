import { Injectable } from '@angular/core';
import { Bob } from 'src/app/models/product/bobClass';
import { BOB } from 'src/app/models/product/constant/bobConstant';
import { AuthServiceService } from '../auth/auth-service.service';
import { UserServiceService } from '../userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class BobService {

  constructor(
    private userService : UserServiceService,
    private authService : AuthServiceService
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

  pushToCart(bobId : number){
    let nickname = this.authService.getToken();
    if (nickname) {
      this.userService.getOneUser(nickname).articlesArray?.push(bobId);
    }
  }


  deleteFromCart(bobId : number){
    let nickname = this.authService.getToken();
    if (nickname) {
      let userBobsArray = this.userService.getOneUser(nickname).articlesArray ;
      if (userBobsArray) {
        let idOfDeletedElement = userBobsArray.indexOf(bobId);
        userBobsArray.splice(idOfDeletedElement , 1) ;
      }    
    }
  }


  bobCounter(array : Bob[] ) {
    let a : { [key : string] : number } = {}
    var result = array.reduce( (acc, o) => (acc[o.name] = (acc[o.name] || 0)+1, acc), a );
    return result;
  }

  getOneBobByName(name : string) {
    return this.getBobsArray().filter(bob => bob.name === name) ;
  }

}
