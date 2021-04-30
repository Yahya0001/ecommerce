import { Component, OnInit } from '@angular/core';
import { Homeproduit } from '../shared/homeproduit';
import { HomeproduitService } from '../services/homeproduit.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.scss'],
  styles: [`
    .star {
      font-size: 1.7rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
  `]
})
export class ProduitPageComponent implements OnInit {

  bestsell : Array<Homeproduit> ;
  currentRate = 3;
  
  constructor(private homeproduitservice : HomeproduitService ) {
    this.bestsell = new Array<Homeproduit>();
   }

   owlOptions: OwlOptions = {
    loop: true,
    items : 5 ,
    margin : -320 ,
    mergeFit : true ,
    autoplayTimeout : 2000,
    autoplay:true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
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
    this.homeproduitservice.getBestSell()
    .subscribe(result => {
        this.bestsell = result;
      console.log(this.bestsell);
    });

  }

}
