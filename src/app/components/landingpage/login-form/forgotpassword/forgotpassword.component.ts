import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, Validator } from '@angular/forms';
import { PasswordValidation } from "./passwordmatch.validator";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotpasswordComponent implements OnInit {
  
  constructor(private matdDialogRef: MatDialogRef<ForgotpasswordComponent>, private fb: FormBuilder) { 

  }

  isLinear = true;
  emailGroup: FormGroup;
  questionGroup: FormGroup;
  resetPassword: FormGroup;
  showPasswordErrorMsg: boolean;
  hintQuestion:string = 'What is your first pet?'
  complete(){
   this.matdDialogRef.close()
  }

  passwordReset(){
    console.log(this.resetPassword);

    if(this.resetPassword.invalid){
        this.showPasswordErrorMsg = true;
    }
 }

  emailGroupSubmit(){
   console.log(this.emailGroup);
   
 }

  questionGroupSubmit(){
    console.log(this.questionGroup.value);
    
  }

  ngOnInit() {
    this.emailGroup = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email], PasswordValidation.RegisteredEmail)
    });
    this.questionGroup = new FormGroup({
      'question': new FormControl('', [Validators.required], PasswordValidation.SecurityAnswer)
    });
    
    this.resetPassword = this.fb.group({
        'passwordEnter': ['', [Validators.required,Validators.minLength(8)]],
        'passwordReEnter': ['', [Validators.required, Validators.minLength(8)]]
      }, {
          validator: PasswordValidation.MatchPassword
        })
    }

}
