import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { LoginModel } from '../models/LoginModel';
import { User } from '../models/User';
import { TokenInterceptorService } from './token-interceptor.service';
import { Inventory } from '../models/Inventory';
import { AirLine } from '../models/AirLine';
import { AirlineComponent } from '../airline/airline.component';
import { Head } from 'rxjs';
import { Ticket } from '../models/Ticket';

@Injectable()
export class AuthService {
    private _registerUrl = "https://localhost:44361/api/Register/RegisterNewUser";

    private _loginUrl = "https://localhost:44357/api/Authentication/Authenticate";

    private _userUrl = "https://localhost:44315/api/UserDetails/GetUserDetails";

    private _inventoryUrl = "https://localhost:44349/api/Inventory/AddNewInventory";
    private _allInventoriesUrl = "https://localhost:44349/api/Inventory/GetAllInventories";
    private _allInventoriesWithSearchUrl = "https://localhost:44349/api/Inventory/GetAllInventoriesWithSearch";
    private _oneInventoryUrl = "https://localhost:44349/api/Inventory/GetInventory";
    private _updateInventoryUrl = "https://localhost:44349/api/Inventory/UpdateInventory"
    private _removeInventoryUrl = "https://localhost:44349/api/Inventory/RemoveInventory"

    private _allAirLinesUrl = "https://localhost:44349/api/AirLine/GetAllAirlines";
    private _airLineUrl = "https://localhost:44349/api/AirLine/AddNewAirLine";
    private _updateAirLineUrl = "https://localhost:44349/api/AirLine/UpdateAirLine"
    private _removeAirLineUrl = "https://localhost:44349/api/AirLine/RemoveAirLine"
    private _getAirLineUrl = "https://localhost:44349/api/AirLine/GetAirLine"

    private _bookTticketUrl = "https://localhost:44340/api/TicketBooking/BookTicket";
    private _allTicketsUrl = "https://localhost:44340/api/TicketBooking/GetAllTickets";
    private _cancelTicketUrl = "https://localhost:44340/api/TicketBooking/CancelTicket";
    private _allTicketsWithSearchUrl = "https://localhost:44340/api/TicketBooking/GetTicketsWithSearch";
    private _ticketInfoURL = "https://localhost:44340/api/TicketBooking/GetTicketInfo"
    

    constructor(private http: HttpClient, private _router: Router) {

    }

    loginUser(loginModel: LoginModel) {
        return this.http.post<any>(this._loginUrl, loginModel)
    }

    registerUser(registerUser: RegisterUser) {
        console.log(registerUser);
        return this.http.post(this._registerUrl, registerUser, {responseType : 'text'})
    }

    loggedIn() {
        return !!localStorage.getItem('token')
    }

    getToken() {
        return localStorage.getItem('token')
    }

    logoutUser() {
        localStorage.removeItem('token')
        localStorage.removeItem('inventoryId')
        localStorage.clear()
        this._router.navigate(['/login'])
    }

    getUserDetails(){ 
        let userId = localStorage.getItem('userid');
        let token = localStorage.getItem('token')
        return this.http.get<any>(this._userUrl + "/" + userId)
    }

    addNewInventory(inventory : Inventory){
        return this.http.post<any>(this._inventoryUrl, inventory)
    }

    showAllInventories(){
        return this.http.get<any>(this._allInventoriesUrl)
    }

    showAllInventoriesWithSearch(fromplace : string, toplace : string, startdate : Date){
        return this.http.post<any>(this._allInventoriesWithSearchUrl + "?fromDate=" + startdate + "&fromPlace=" + fromplace + "&toPlace=" + toplace, '')
    }

    getInventory(inventoryId : number){
        return this.http.get<any>(this._oneInventoryUrl + "/" + inventoryId)
    }

    getAllAirLines(){
        return this.http.get<any>(this._allAirLinesUrl)
    }

    addNewAirLine(airLine : AirLine){
        return this.http.post<any>(this._airLineUrl, airLine)
    }

    bookTicket(tickets : Array<Ticket>){
        return this.http.post<any>(this._bookTticketUrl, tickets)
    }

    getAllTickets(){    
        return this.http.get<any>(this._allTicketsUrl + "/" + Number(localStorage.getItem('userid')))
    }
    
    cancelTicket(ticketId : string){
        return this.http.put<any>(this._cancelTicketUrl + "/" + ticketId, '')
    }

    getTicketWithSearch(searchTxt : string){ 
        debugger;       
        return this.http.get<any>(this._allTicketsWithSearchUrl + "?userId=" + 
                                    Number(localStorage.getItem('userid')) + "&TicketID=" + searchTxt )
    }

    getTicketInfo(ticketId : string){
        return this.http.get<any>(this._ticketInfoURL + "/" + ticketId)
    }

    updateAirLine(airLine : AirLine){
        return this.http.put<any>(this._updateAirLineUrl,airLine)
    }

    getAirLine(id : number){
        return this.http.get<any>(this._getAirLineUrl + "/" + id)
    }

    removeAirLine(id : number){
        return this.http.put<any>(this._removeAirLineUrl + "/" + id, '')
    }

    updateInventory(inventory : Inventory){
        return this.http.put<any>(this._updateInventoryUrl,inventory);
    }

    removeInventory(id : number){
        return this.http.put<any>(this._removeInventoryUrl + "/" + id, '')
    }
}