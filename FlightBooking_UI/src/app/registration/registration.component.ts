import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterUser } from '../models/RegisterUser';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {

  successMessage : string = ''
  registerUserModel : RegisterUser = new RegisterUser();
  constructor(private _auth : AuthService, private _router : Router) { }  

  RegisterNewUser(){
    console.log(this.registerUserModel);
    this._auth.registerUser(this.registerUserModel).subscribe(res => this.successMessage = res);
    this._router.navigate(['/register']);
  }

  ngOnInit(): void {
  }

}
