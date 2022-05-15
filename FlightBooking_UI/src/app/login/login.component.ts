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
  errorMessage : string = '';

  Login(){
    debugger;
      this._auth.loginUser(this.loginModel).subscribe(res => {
        console.log(res);
      localStorage.setItem('token', res.token)
      localStorage.setItem('userid', res.userId)
      localStorage.setItem('usertype', res.userType)
      this._router.navigate([('/userdetails')])
    },
      err => this.errorMessage = err.error.text
    );
  }

  ngOnInit() {
  }

}
