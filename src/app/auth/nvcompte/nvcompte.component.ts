import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/shared/user';
import { CommonAuthService } from '../common-auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent!.dirty); // 7otet ! 
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-nvcompte',
  templateUrl: './nvcompte.component.html',
  styleUrls: ['./nvcompte.component.scss']
})
export class NvcompteComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authService:CommonAuthService) {
    this.registerForm = new FormGroup({
      'nom' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'prenom' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'adresse' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'ville' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'code_postal' : new FormControl(null, [Validators.required, Validators.maxLength(4),Validators.minLength(4)]),
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  get nom(){ return this.registerForm.get('nom'); }
  get prenom(){ return this.registerForm.get('prenom'); }
  get adresse(){ return this.registerForm.get('adresse'); }
  get ville(){ return this.registerForm.get('ville'); }
  get code_postal(){ return this.registerForm.get('code_postal'); }
  get mail(){ return this.registerForm.get('mail'); }
  get password(){ return this.registerForm.get('password'); }
  ngOnInit(): void {
  }
register()
{
  this.authService.registerUser(this.registerForm).subscribe(res=>{
    console.log('done');
  },err=>{
    console.log('Error');
  })
}
}
