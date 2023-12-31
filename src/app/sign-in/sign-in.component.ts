import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  })

  constructor(private router:Router) {
  }


  submitForm() {
    if (this.loginForm.valid) {
      this.router.navigateByUrl("/home")
    }
  }
}
