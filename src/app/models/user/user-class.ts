export class UserClass {
    adresseMail : string ;
    password : string ;
    firstName : string ;
    name : string ;
    nickname : string ;

    constructor(
        adresseMail : string ,
        password : string ,
        firstName : string ,
        name : string ,
        nickname : string 
    ) {
        this.adresseMail = adresseMail;
        this.password = password;
        this.firstName = firstName;
        this.name = name ;
        this.nickname = nickname;
    }
}
