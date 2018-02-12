import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('form') signUpForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

    onSubmit(){
      console.log(this.signUpForm)
    }
}
