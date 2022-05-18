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
    this.ticket.userId = Number(localStorage.getItem('userid'))
    this.ticket.inventoryId = this.inventory.inventoryId
    this.ticket.flightNumber = this.inventory.flightNumber
    this.ticket.dateOfJourney = this.inventory.startDate
    this.ticket.fromPlace = this.inventory.fromPlace
    this.ticket.toPlace = this.inventory.toPlace
    this.ticket.cost = this.inventory.ticketCost
    this.ticket.seatType = Number(this.ticket.seatType)
    this.ticket.createdBy = Number(localStorage.getItem('userid'))
    this.ticket.modifiedBy = Number(localStorage.getItem('userid'))

    this.tickets.push(this.ticket)
    this._auth.bookTicket(this.tickets).subscribe(res => {
      this.successMsg = res.text
      this.inventory = new Inventory()
      this.ticket = new Ticket()
      this._router.navigate(['/mybookings'])
    },
    err => {
      this.successMsg = err.error.text
      this.inventory = new Inventory()
      this.ticket = new Ticket()
      this._router.navigate(['/mybookings'])
    })
  }

}
