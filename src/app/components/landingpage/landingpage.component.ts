import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MatDialog} from '@angular/material';
import { LoginFormComponentDialog } from "./login-form/login-form.component"

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class LandingpageComponent implements OnInit {
  constructor(public dialog: MatDialog) {

   }


  openDialog(){
    this.dialog.open(LoginFormComponentDialog,{
      width: '700px'
    })
  }

  ngOnInit() {
  }

}
