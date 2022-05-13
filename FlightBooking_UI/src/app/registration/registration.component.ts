import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterUser } from '../models/RegisterUser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registration.component.html'
})

// @NgModule({
//   imports:[FormsModule]
// })

export class RegistrationComponent implements OnInit {

  registerUser : RegisterUser = new RegisterUser();
  constructor() { }  

  RegisterNewUser(){
    alert("registering");
  }

  ngOnInit(): void {
  }

}
