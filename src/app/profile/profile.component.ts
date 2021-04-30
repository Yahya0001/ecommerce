import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../shared/user';
import { UpdateProfileComponent } from '../update-profile/update-profile.component'; // yy
import { MatDialog } from '@angular/material/dialog'; // yy

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Profile: Array<User>;
  btnPopup = document.getElementById('btnPopup');
  overlay = document.getElementById('overlay');

  constructor(private registerservice: RegisterService ,public dialog: MatDialog) {
    this.Profile = new Array<User>();
  }

  ngOnInit(): void {
    this.registerservice.getRegister().subscribe((result) => {
      this.Profile = result;
      console.log(this.Profile);
    });
  }

  openDialog(id: number): void {
    
    const i = this.Profile.findIndex(e => e.id === id);
    
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '250px', height: '400px',
      data: { 
        id: this.Profile[i].id,
        nom: this.Profile[i].nom,
        prenom: this.Profile[i].prenom,
        adresse: this.Profile[i].adresse,
        ville: this.Profile[i].ville,
        code_postal: this.Profile[i].code_postal,
        mail: this.Profile[i].mail,
        password: this.Profile[i].password
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.registerservice.getRegister()
        .subscribe(result => {
          this.Profile = result;
        });
      console.log('The dialog was closed');
    });
  }
}