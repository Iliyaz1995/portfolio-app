import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import 'hammerjs';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { ProjectsComponent } from './components/dashboard/projects/projects.component';
import { NavigationComponent } from './components/dashboard/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginFormComponentDialog } from "./components/landingpage/login-form/login-form.component";
import { ForgotpasswordComponent } from "./components/landingpage/login-form/forgotpassword/forgotpassword.component";
import { CdkTableModule } from '@angular/cdk/table';
import { GuestComponent } from './components/guest/guest.component';
import { CandidateComponent } from './components/guest/candidate/candidate.component';
import { SearchCandidateComponent } from './components/guest/search-candidate/search-candidate.component';
import { SearchCandidateService } from './components/guest/search-candidate/services/search-candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { myAuthGuard } from './auth.service';



let appRoutes:Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'guest', component: GuestComponent,children:[
    { path: '', component: SearchCandidateComponent },
    { path: 'candidate/:username', component: CandidateComponent },
  ] },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [myAuthGuard], children:[
    { path:'user', component: ResumeComponent },
    { path:'projects', component: ProjectsComponent }
  ]},
]

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    NavigationComponent,
    DashboardComponent,
    LandingpageComponent,
    LoginFormComponentDialog,
    ForgotpasswordComponent,
    GuestComponent,
    CandidateComponent,
    SearchCandidateComponent
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    
  ],
  entryComponents:[
    LoginFormComponentDialog,
    ForgotpasswordComponent
  ],
  providers: [SearchCandidateService, myAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
