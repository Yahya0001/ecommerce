import { Component, OnInit } from '@angular/core';
import { Homeproduit } from '../shared/homeproduit';
import { HomeproduitService } from '../services/homeproduit.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Hproduit : Array<Homeproduit> ;
  bestsell : Array<Homeproduit> ;
  ourpromos : Array<Homeproduit> ;

  constructor(private homeproduitservice : HomeproduitService,config: NgbCarouselConfig ) {
    this.Hproduit = new Array<Homeproduit>();
    this.bestsell = new Array<Homeproduit>();
    this.ourpromos = new Array<Homeproduit>();
   }
  
   owlOptions: OwlOptions = {
    loop: true,
    items : 5 ,
    margin : -400 ,
    mergeFit : true ,
    autoplayTimeout : 1700,
    autoplay:true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
   // navText: ['&#8249', '&#8250;'],
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1 
      },
      480: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: false,
    lazyLoad:true,
  }

  ngOnInit(): void {
    this.homeproduitservice.getHomeProduit()
    .subscribe(result => {
        this.Hproduit = result;
      console.log(this.Hproduit);
    });
    
    this.homeproduitservice.getBestSell()
    .subscribe(result => {
        this.bestsell = result;
      console.log(this.bestsell);
    });

    this.homeproduitservice.getOurPromo()
    .subscribe(result => {
        this.ourpromos = result;
      console.log(this.ourpromos);
    });
  }

}

