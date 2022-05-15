import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  user : User = new User();
  constructor(private _auth : AuthService, private _route : Router) { }

  

  ngOnInit(): void {
    this._auth.getUserDetails();
  }

}
