import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './ticketbooking.component.html'
})
export class TicketbookingComponent implements OnInit {
  inventory : Inventory = new Inventory()
  ticket : Ticket = new Ticket()
  tickets : Array<Ticket> = new Array<Ticket>()
  successMsg : string = ''
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this._auth.getInventory(Number(localStorage.getItem('inventoryId'))).subscribe(res => {
      this.inventory = res;
    },
    err => {
      
    })
  }

  BookTicket(){
    this.ticket.FlightNumber = this.inventory.flightNumber
    this.ticket.DateOfJourney = this.inventory.startDate
    this.ticket.FromPlace = this.inventory.fromPlace
    this.ticket.ToPlace = this.inventory.toPlace
    this.ticket.SeatType = Number(this.ticket.SeatType)
    this.ticket.CreatedBy = Number(localStorage.getItem('userid'))
    this.ticket.ModifiedBy = Number(localStorage.getItem('userid'))

    this.tickets.push(this.ticket)
    this._auth.bookTicket(this.tickets).subscribe(res => {
      this.successMsg = res.text
      this.inventory = new Inventory()
      this.ticket = new Ticket()
    },
    err => {
      this.successMsg = err.error.text
      this.inventory = new Inventory()
      this.ticket = new Ticket()
    })
  }

}
