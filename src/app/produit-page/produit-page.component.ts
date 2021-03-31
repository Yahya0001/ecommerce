import { Component, OnInit } from '@angular/core';
import { Homeproduit } from '../shared/homeproduit';
import { HomeproduitService } from '../services/homeproduit.service';


@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.scss']
})
export class ProduitPageComponent implements OnInit {

  bestsell : Array<Homeproduit> ;
  
  constructor(private homeproduitservice : HomeproduitService ) {
    this.bestsell = new Array<Homeproduit>();
   }

  

  ngOnInit(): void {
    this.homeproduitservice.getBestSell()
    .subscribe(result => {
        this.bestsell = result;
      console.log(this.bestsell);
    });

  }

}
