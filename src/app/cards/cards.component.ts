import { Component, OnInit } from '@angular/core';
import { Homeproduit } from '../shared/homeproduit';
import { HomeproduitService } from '../services/homeproduit.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  
  Hproduit : Array<Homeproduit> ;

  constructor(private homeproduitservice : HomeproduitService ) {
    this.Hproduit = new Array<Homeproduit>();
   }

  ngOnInit(): void {
    this.homeproduitservice.getHomeProduit()
    .subscribe(result => {
        this.Hproduit = result;
      console.log(this.Hproduit);
    });
  }
}