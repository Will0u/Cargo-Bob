export class UserClass {
    id ?: number ;
    adresseMail : string ;
    password : string ;
    firstName : string ;
    name : string ;
    nickname : string ;

    constructor(
        id : number ,
        adresseMail : string ,
        password : string ,
        firstName : string ,
        name : string ,
        nickname : string 
    ) {
        this.id = id ;
        this.adresseMail = adresseMail;
        this.password = password;
        this.firstName = firstName;
        this.name = name ;
        this.nickname = nickname;
    }
}
