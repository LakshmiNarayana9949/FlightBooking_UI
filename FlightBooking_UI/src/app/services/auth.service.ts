import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';

@Injectable()
export class AuthService {
    private _registerUrl = "https://localhost:44361/api/Register/RegisterNewUser";
    private _loginUrl = "https://localhost:44355/api/Users/login"

    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(user: any) {
        return this.http.post<any>(this._loginUrl, user)
    }

    registerUser(registerUser: RegisterUser) {
        debugger;
        console.log(registerUser);
        return this.http.post<any>(this._registerUrl, registerUser)
    }

    logoutUser() {
        localStorage.removeItem('token')
        this._router.navigate(['/events'])
    }

    getToken() {
        return localStorage.getItem('token')
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
}