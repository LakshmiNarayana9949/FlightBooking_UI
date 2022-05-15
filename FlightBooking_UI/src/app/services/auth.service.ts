import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { LoginModel } from '../models/LoginModel';
import { User } from '../models/User';
import { TokenInterceptorService } from './token-interceptor.service';

@Injectable()
export class AuthService {
    private _registerUrl = "https://localhost:44361/api/Register/RegisterNewUser";
    private _loginUrl = "https://localhost:44357/api/Authentication/Authenticate";
    private _userUrl = "https://localhost:44315/api/UserDetails/GetUserDetailsFromEmail"

    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(loginModel: LoginModel) {
        return this.http.post<any>(this._loginUrl, loginModel)
    }

    registerUser(registerUser: RegisterUser) {
        console.log(registerUser);
        return this.http.post(this._registerUrl, registerUser, {responseType : 'text'})
    }

    logoutUser() {
        localStorage.removeItem('token')
        this._router.navigate(['/login'])
    }

    getUserDetails(){ 
        debugger;
        let token = this.getToken();
        let decodedToken = this.getTokenClaims();
        let email = decodedToken.unique_name; 
        
        let headers = new HttpHeaders().set('Authorization', 'Bearer '+ token)
                                        .set('Content-Type', 'application/json')
        return this.http.get(this._userUrl + "?email=" + email, {headers:headers})
    }

    getTokenClaims(){
        let token = localStorage.getItem('token');
        if(token != null){
            let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
            return decodedJWT;
        }
        else{
            return null;
        }
    }

    getUserId(){
        return localStorage.getItem('userId')
    }

    getToken() {
        return localStorage.getItem('token')
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
}