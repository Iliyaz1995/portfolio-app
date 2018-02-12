import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.less']
})
export class SignupPageComponent implements OnInit {

  @ViewChild('newUserform') signUpForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

    onSubmit(){
      console.log(this.signUpForm)
    }
}
