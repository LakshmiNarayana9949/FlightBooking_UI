import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './mybookings.component.html'
})
export class MybookingsComponent implements OnInit {
  myTickets : Array<Ticket> = new Array<Ticket>()
  searchTxt : string = ''

  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.getAllTickets()
  }

  getAllTickets(){
    this._auth.getAllTickets().subscribe(res => {
      this.myTickets = res;
      this.isTicketsAvailable();
    },
    err => {

    })
  }

  isTicketsAvailable(){
    if(this.myTickets.length == 0){
      return false;
    }
    else{
      return true;
    }
  }

  CancelTicket(ticketId : string){
    this._auth.cancelTicket(ticketId).subscribe(res => {
      this.getAllTickets()
    },
    err => {
      console.log(err);
    })
  }

  GetTicketsWithSearch(){
    this.myTickets = []
    debugger
    if(this.searchTxt == null){
      
    }
    this._auth.getTicketWithSearch(this.searchTxt).subscribe(res => {
      this.myTickets = res;
      this.isTicketsAvailable();
    },
    err => {

    })
  }

  ShowTicket(ticketId : string){
    debugger;
    localStorage.setItem('ticketid', ticketId)
    this._router.navigate(['/ticketdetails'])
  }

}
