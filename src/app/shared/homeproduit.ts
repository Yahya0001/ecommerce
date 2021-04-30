export class Homeproduit {
    id: string;
    title: string;
    image: string;
    description:string;
    price: Number;
    onsale: string;
    promo: string;
    newprice: Number;
    marque:string;

    constructor(id:string,title: string,image: string,description:string,price: Number,onsale: string,promo: string,newprice: Number,marque:string){
        this.id=id;
        this.title=title;
        this.image=image;
        this.description=description;
        this.price=price;
        this.onsale=onsale;
        this.promo=promo;
        this.newprice=newprice;
        this.marque = marque;
    }
  }