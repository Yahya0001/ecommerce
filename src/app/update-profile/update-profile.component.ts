import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../shared/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  
  Profile: Array<User>;
  btnPopup = document.getElementById('btnPopup');
  overlay = document.getElementById('overlay');
  dataSource: any[] = [];

  constructor(
    private registerservice: RegisterService ,public data: User , public Update: RegisterService) {
    this.Profile = new Array<User>();
  }

  ngOnInit(): void {
    this.registerservice.getRegister().subscribe((result) => {
      this.Profile = result;
      console.log(this.Profile);
    });
  }

  public onSubmit(formObj: NgForm) {
    

    let values = formObj.value;
    let obj: User = {
      id:values.ID,
	    nom:values.nom,
	    prenom:values.prenom,
	    adresse:values.adresse,
	    ville:values.ville,
	    code_postal:values.code_postal,
	    mail:values.mail,
	    password:values.password
    }

    //this.dataSource.push(obj);
    //console.log(values);
    this.Update.updateProfil(obj, values.ID).subscribe(
      () => {console.log("Employee with ID = ${values.ID} has been updated") ;},
      (err) => console.log(err)

    );

  }

}

