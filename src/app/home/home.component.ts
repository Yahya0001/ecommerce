import { Component, OnInit } from '@angular/core';
import { Homeproduit } from '../shared/homeproduit';
import { HomeproduitService } from '../services/homeproduit.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Hproduit : Array<Homeproduit> ;
  bestsell : Array<Homeproduit> ;

  constructor(private homeproduitservice : HomeproduitService ) {
    this.Hproduit = new Array<Homeproduit>();
    this.bestsell = new Array<Homeproduit>();
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
  }

}
