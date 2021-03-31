import { Component, OnInit } from '@angular/core';
//import { AnyNsRecord } from 'dns';
import { HomeproduitService } from '../services/homeproduit.service';
import { Homeproduit } from '../shared/homeproduit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  HomeProduit: Array<Homeproduit>;
  // listpost:Array<>;
  constructor(private homeproduitservice: HomeproduitService) {
    this.HomeProduit = new Array<Homeproduit>();
  }

  ngOnInit(): void {
    this.homeproduitservice.getHomeProduit().subscribe((result) => {
      this.HomeProduit = result;
      console.log(this.HomeProduit);
    });
  }
  DeleteButton(id: string) {
    this.homeproduitservice.deleteProduct(id).subscribe(
      () => console.log('Employee with ID = ${id} Deleted'),
      (err) => console.log(err)
    );
    this.homeproduitservice.getHomeProduit().subscribe((result) => {
      this.HomeProduit = result;
    });
    this.ngOnInit();
  }
}
