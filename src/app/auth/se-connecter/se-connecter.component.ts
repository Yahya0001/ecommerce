import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonAuthService } from '../common-auth.service';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {
  loginForm!: FormGroup;  // 7otet  !  
  myimage:string = "assets/images/seconnecter.jpg";

  constructor(private authService: CommonAuthService, private router: Router) { 
   
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  get mail(){ return this.loginForm.get('mail'); }
  get password(){ return this.loginForm.get('password'); }
  login()
  {

    this.authService.logIn(this.loginForm).subscribe(
      (response) => {
        localStorage.removeItem('token');
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        localStorage.removeItem('token');
        //console.log(this.serverErrors);
        this.router.navigate(['/home']);

      }
    );
  }

  }

