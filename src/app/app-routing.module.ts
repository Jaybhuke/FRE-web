import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { UploaderComponent } from './uploader/uploader.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent },
  { path:'about', component: AboutComponent },
  { path:'uploader', component: UploaderComponent }
  // Auth Gaurds If your are login tar path access asto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
