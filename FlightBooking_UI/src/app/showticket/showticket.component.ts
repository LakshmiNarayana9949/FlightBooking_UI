import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './showticket.component.html'
})
export class ShowticketComponent implements OnInit {
  ticket : Ticket = new Ticket()

  constructor( private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.showTicketDetails()
  }

  showTicketDetails(){
    debugger;
    this._auth.getTicketInfo(String(localStorage.getItem('ticketid'))).subscribe(res =>{
      debugger;
      this.ticket = res;
    },
    err => {

    })
  }

}
