import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-motdepasse',
  templateUrl: './motdepasse.component.html',
  styleUrls: ['./motdepasse.component.scss']
})
export class MotdepasseComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
