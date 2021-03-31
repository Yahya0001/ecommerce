export class Homeproduit {
    id: string;
    title: string;
    image: string;
    price: string;
    onsale: string;
    promo: string;
    newprice: string;

    constructor(id:string,title: string,image: string,price: string,onsale: string,promo: string,newprice: string){
        this.id=id;
        this.title=title;
        this.image=image;
        this.price=price;
        this.onsale=onsale;
        this.promo=promo;
        this.newprice=newprice;
    }
  }