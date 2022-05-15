import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/LoginModel';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private _auth : AuthService, private _router : Router) { }
  loginModel : LoginModel = new LoginModel();

  Login(){
    this._auth.loginUser(this.loginModel).subscribe(res => {
      debugger;
        localStorage.setItem('token', res.token)
        this._router.navigate([('/userdetails')])
    },
    err => console.log(err));
  }

  ngOnInit() {
  }

}
