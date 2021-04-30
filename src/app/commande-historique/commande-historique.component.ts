import { Component, OnInit } from '@angular/core';
import { HomeproduitService } from '../services/homeproduit.service';
import { Homeproduit } from '../shared/homeproduit';

@Component({
  selector: 'app-commande-historique',
  templateUrl: './commande-historique.component.html',
  styleUrls: ['./commande-historique.component.scss']
})
export class CommandeHistoriqueComponent implements OnInit {

  user: Array<Homeproduit> ;

  constructor(private usersservice : HomeproduitService) {
    this.user = new Array<Homeproduit>();
   }

  ngOnInit(): void {
    this.usersservice.getHomeProduit()
        .subscribe(result => {
        this.user = result;
        console.log(this.user);
    });
  }
  key : string ='price';
  reverse:boolean =false;
  sort (key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
