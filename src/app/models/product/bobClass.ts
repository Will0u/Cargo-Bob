export class Bob {
    name: string ;
    image: string ;
    brand: string ;
    desc: string ;

    size: string[] ;
    color: string[] ;
    carac: string[] ;

    id:number ;
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
        size: string[] ,
        color: string[] ,
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
        this.size = size ;
        this.color = color ;
        this.carac = carac ;
        this.price = price ;
        this.size = size ;
        this.stock = stock ;
        this.isAvailable = isAvailable ;
        this.isDelivery = isDelivery ;
        this.isBestSell = isBestSell;
        this.id = id ;
    }

}
