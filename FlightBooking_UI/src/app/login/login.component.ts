import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginModel : LoginModel = new LoginModel();

  Login(loginModelUI : LoginModel){

  }

  ngOnInit() {
  }

}
