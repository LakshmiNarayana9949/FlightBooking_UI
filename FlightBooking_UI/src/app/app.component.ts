import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'event-app';
 
  constructor(private _authService:AuthService) {
   
  }

  LogOut(){
    this._authService.logoutUser();
  }

  LoggedIn(input:boolean):boolean{
    if(input){
      return this._authService.loggedIn();
    }
    else{
      return !this._authService.loggedIn();
    }
  }
  IsAdmin(){
    let userType = localStorage.getItem('usertype')
    if(userType == '2'){
      return true;
    }
    else{
      return false;
    }
  }  
}