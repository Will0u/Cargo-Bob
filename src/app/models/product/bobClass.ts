export class Bob {
    name: string ;
    image: string ;
    brand: string ;
    desc: string ;
    category : string;

    carac: string[] ;

    id?:number ;
    price : number ;
    stock: number ;

    isAvailable: boolean;
    isDelivery: boolean;
    isBestSell:boolean;


    // > constructor
    constructor(
        name: string ,
        image: string ,
        brand: string ,
        desc: string ,
        category : string,
        carac: string[] ,
        price : number ,
        stock: number ,
        isAvailable: boolean,
        isDelivery: boolean ,
        id : number ,
        isBestSell:boolean
    ) 
    {
        this.name = name ;
        this.image = image ;
        this.brand = brand ;
        this.desc = desc ;
        this.category = category ;
        this.carac = carac ;
        this.price = price ;
        this.stock = stock ;
        this.isAvailable = isAvailable ;
        this.isDelivery = isDelivery ;
        this.isBestSell = isBestSell;
        this.id = id ;
    }

}
