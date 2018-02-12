import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/Router'


import { AppComponent } from './app.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { ProjectsComponent } from './components/dashboard/projects/projects.component';
import { NavigationComponent } from './components/dashboard/navigation/navigation.component';
import { LoginPageComponent } from './components/homepage/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GuestEnterComponent } from './components/homepage/guest-enter/guest-enter.component';
import { HomepageNavigationComponent } from './components/homepage/homepage-navigation/homepage-navigation.component';
import { SignupPageComponent } from './components/homepage/login-page/signup-page/signup-page.component';
import { LoginFormComponent } from './components/homepage/login-page/login-form/login-form.component';
import { WelcomepageComponent } from './components/homepage/welcomepage/welcomepage.component';


var appRoutes:Routes = [
  { path:'', component: HomepageComponent,children:[
    {path:'', component: WelcomepageComponent},
    {path:'login', component: LoginPageComponent, children:[
      {path:'', component:LoginFormComponent},
      {path:'signup', component: SignupPageComponent}
    ]},
    {path:'guestenter', component:GuestEnterComponent}
  ] },
  { path:'dashboard', component: DashboardComponent, children:[
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
    LoginPageComponent,
    DashboardComponent,
    GuestEnterComponent,
    HomepageComponent,
    HomepageNavigationComponent,
    SignupPageComponent,
    LoginFormComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
