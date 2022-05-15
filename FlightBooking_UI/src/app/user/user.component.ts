import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private _auth : AuthService, private _route : Router) {}
  userLoginMessage : string = ''
  
  getUserDetails(){
    this._auth.getUserDetails().subscribe(res => {
      this.userLoginMessage = 'Welcome ' + res.firstName
      localStorage.setItem('usertype', res.userType)
      localStorage.setItem('firstname', res.firstName)
      
      
    }, err => console.log(err));
  }  

  ngOnInit(): void {
    this.getUserDetails();
  }

}
