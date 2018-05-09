import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component"
import { signUpModel } from './login-form.interface';
import { LoginFormService } from './login-form.service';
import { loginValidator } from './login-form.validator';
import { AngularFirestore } from 'angularfire2/firestore';
import { debounceTime, take } from 'rxjs/operators';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-login-form-dialog',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [LoginFormService]
})
export class LoginFormComponentDialog implements OnInit {
  
  constructor(
     private dialogRef: MatDialogRef<LoginFormComponentDialog>,
     private matDialog: MatDialog,
     private loginService: LoginFormService,
     private afs: AngularFirestore
    ) { 


    this.loginForm = new FormGroup({
      "username": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)])
    })

    this.signUpForm = new FormGroup({
      "username": new FormControl("", [Validators.required], loginValidator.usernameInvalid(this.afs)),
      "fullname": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email], loginValidator.emailInvalid(this.afs)),
      "securityQuestion": new FormControl("", Validators.required),
      "securityAnswer": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
    })
  }




  loginForm: FormGroup;
  signUpForm: FormGroup;
  
  loginFormValue;
  signupFormValue = {
    username: null,
    fullname: null,
    password: null,
    secQuestion: null,
    secAnswer: null,
    email: null,
    dp: null,
    projects: null,
    resume: null
  };
  
  @ViewChild('formInputs') private FormContainer: ElementRef;
  
  questions:object = [
    { question:"What is your favorite pet?", value:"pet", placeholder: "pet name"},
    { question: "Who is your first teacher?", value: "teacher", placeholder: "teacher name"},
    { question: "Who is your enemy?", value: "enemy", placeholder: "enemy name"},
    { question: "What is your first vehicle number?", value: "vehicle", placeholder: "vehicle number"}
  ];

  focusOnInvalid(){
    // let invalidInput = document.getElementsByTagName(input);
    // invalidInput.focus()
  }


  signupSubmittedValue(){
    this.signupFormValue.username = this.signUpForm.value.username;
    this.signupFormValue.fullname = this.signUpForm.value.fullname;
    this.signupFormValue.email = this.signUpForm.value.email;
    this.signupFormValue.password = this.signUpForm.value.password;
    this.signupFormValue.secQuestion = this.signUpForm.value.securityQuestion.value;
    this.signupFormValue.secAnswer = this.signUpForm.value.securityAnswer;
    this.signupFormValue.dp = null;
    this.signupFormValue.projects = null;
    this.signupFormValue.resume = null;
  }


  onLoginSubmit(){
    if(this.loginForm.valid ){
      this.dialogRef.close();
    }
  }

  postSignUp(){
    this.loginService.addCandidates(this.signupFormValue)
  }

  onSignUpFormSubmit(){
    console.log(this.signUpForm);
    
    if (this.signUpForm.valid) {
      this.signupSubmittedValue()
      console.log(this.signupFormValue);
      this.postSignUp()
      this.dialogRef.close();
    }
  }

 
  onsiginInCancel(){
    this.dialogRef.close();
  }

  forgotpassword(){
    this.matDialog.open(ForgotpasswordComponent, {
      width: '500px'
    })
  }

  ngOnInit() {
    console.log(this.FormContainer.nativeElement.children);
    // this.loginService.xample().valueChanges().subscribe(res=>console.log(res))
    this.loginService.getCandidates().valueChanges().subscribe(res=>console.log(res))
  }


}
