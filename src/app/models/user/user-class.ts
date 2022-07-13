export class UserClass {
    id ?: number ;
    adressMail : string ;
    password : string ;
    firstName : string ;
    name : string ;
    nickname : string ;
    address ?: string ;
    country ?: string ;
    articlesArray ?: number[] ;


    constructor(
        id : number ,
        adressMail : string ,
        password : string ,
        firstName : string ,
        name : string ,
        nickname : string ,
        address ?: string ,
        country ?: string ,
        articlesArray ?: number[] 
    ) {
        this.id = id ;
        this.adressMail = adressMail;
        this.password = password;
        this.firstName = firstName;
        this.name = name ;
        this.nickname = nickname;
        this.address = address ;
        this.country = country ;
        this.articlesArray = articlesArray ;
    }
}
