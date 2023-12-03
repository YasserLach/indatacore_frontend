import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserComponent} from "./user/user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {DataComponent} from "./data/data.component";
import {UploadComponent} from "./upload/upload.component";


const routes: Routes = [
  {path:"",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {
    path: 'home',
    component: UserComponent,
    children: [
      { path:'',component:HomeComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'data', component: DataComponent},
      { path: 'upload', component: UploadComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
