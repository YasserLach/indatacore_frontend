import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  errorMsg : String = ''

  signUPForm = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
  })

  constructor(private route:Router) {
  }

  submitForm() {
    if (this.signUPForm.value.password === this.signUPForm.value.confirmPassword) {
      if(this.signUPForm.valid){
        this.route.navigateByUrl("/")
      }
    } else {
      this.errorMsg =" Please verify your password !"
    }

  }
}
