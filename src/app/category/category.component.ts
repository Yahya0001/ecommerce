import { Component, OnInit} from '@angular/core';
import { Homeproduit } from '../shared/homeproduit';
import { HomeproduitService } from '../services/homeproduit.service';
import { Options , LabelType  } from '@angular-slider/ngx-slider';
import { element } from 'protractor';

export interface products {
  id: string;
  title: string;
  image: string;
  prix: string;
  onsale: string;
  promo: string;
  newprice: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})


export class CategoryComponent implements OnInit {

  Hproduit : Array<Homeproduit> ;
  hproduitCopy: Array<Homeproduit>;
  selectedIteams : Array<any> ;
  marques : Array<string>;
  p:number = 1 ;
  pl:number = 1 ;
  selectedOption: string = 'low';
  trie : string ='';
  listMode : Boolean  ;
  title : any;
  prix : any ;
  nbrProduit : number ;

  minValue: number = 0;
  maxValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number, label: LabelType): string => {
      this.homeproduitservice.getHomeProduit()
        .subscribe(result => {
            this.Hproduit = result;
            this.Hproduit = this.Hproduit.filter(res =>{
            //  console.log(res.price);
             return this.minValue <= res.price && res.price <= this.maxValue;
            });
            this.nbrProduit = this.Hproduit.length;
            //console.log(this.Hproduit);
        });
    /*  this.Hproduit = this.Hproduit.filter(res =>{
        console.log(res.price);
       return this.minValue <= res.price && res.price <= this.maxValue;
      });*/
      switch (label) {
        case LabelType.Low:
          return "";
        case LabelType.High:
          return "";
        default:
          return "";
      }
    }
  };

  constructor(private homeproduitservice : HomeproduitService,) {
    this.Hproduit = new Array<Homeproduit>();
    this.hproduitCopy = this.Hproduit ;
    this.listMode = true ;
    this.selectedIteams = new Array<any>() ;
    this.marques = new Array<string>() ;
    this.nbrProduit = this.Hproduit.length;
  }
  key: string = 'price';
  namekey: string = 'title';

  ngOnInit(): void {
    this.homeproduitservice.getHomeProduit()
    .subscribe(result => {
        this.Hproduit = result;
        console.log(this.Hproduit);
        this.Hproduit.forEach(element => {
          this.marques.push(element.marque);
          this.marques = this.marques.filter( m => m === element.marque);
          this.marques.push(element.marque);
      });
      console.log("tfarej marque : " + this.marques);
    });
  }
  rev!:boolean  ;
  reverse!:boolean ;
  sortCROI(key:any){
    this.key = key ;
    this.reverse = false ;
    this.p = 1 ;
    this.trie = 'Prix croissant';
  }
  sortDESC(key:any){
    this.key = key ;
    this.reverse = true ;
    this.p = 1 ;
    this.trie = 'Prix décroissant';
  }
  sortA2Z(namekey:any){
    this.namekey = namekey ;
    this.reverse = false ;
    this.p = 1 ;
    this.trie = 'Nom, A à Z';
  }
  sortZ2A(namekey:any){
    this.namekey = namekey ;
    this.reverse = true ;
    this.p = 1 ;
    this.trie = 'Nom, Z à A';
  }
  changeListMode(){
    this.listMode = true ;
  }
  changeLargeMode(){
    this.listMode = false ;
  }
  Search(){
    if(this.title == ""){
      this.ngOnInit();
    }else{
      this.Hproduit = this.Hproduit.filter(res =>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }/*
  Search2(){
      this.Hproduit = this.Hproduit.filter(res =>{
        console.log(res.price);
       return this.minValue <= res.price && res.price <= this.maxValue;
      });
  }*/
  /* cheked(element, index, array) { 
    return (element >= 10); 
 } */
  search1(e:any , marque:string){
    if(e.target.checked){
     // console.log(id + ' checked');
      this.selectedIteams.push(marque);
      this.Hproduit = this.Hproduit.filter (res =>{
       /* this.selectedIteams.forEach(element => { 
          if(res.id != element.id){
            return false ;
          }else{
            return true ;
          }
        });*/
        for ( let i of this.selectedIteams){
          //console.log('res :' + res.id + ' w id : ' + i.id)
          if(res.marque != i){
            return false ;
          }
        }
        return true ;
      });
     // console.log(this.Hproduit)
    }else{
     // console.log(id + ' not checked');
      this.selectedIteams = this.selectedIteams.filter( m => m != marque);
    }
    //console.log(this.selectedIteams);
  }
  
}
