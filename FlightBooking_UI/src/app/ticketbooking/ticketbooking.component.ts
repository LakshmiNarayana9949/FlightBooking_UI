import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { Ticket, UserData } from '../models/Ticket';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  templateUrl: './ticketbooking.component.html'
})
export class TicketbookingComponent implements OnInit {
  inventory : Inventory = new Inventory()
  ticket : Ticket = new Ticket()
  tickets : Array<Ticket> = new Array<Ticket>()
  successMsg : string = ''
  usersArray : Array<UserData> = new Array<UserData>()
  user : UserData = new UserData()
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this._auth.getInventory(Number(localStorage.getItem('inventoryId'))).subscribe(res => {
      this.inventory = res;
    },
    err => {
      
    })
  }

  AddNewPassenger(){
    this.user.name = this.ticket.passengerName;
    this.user.age = this.ticket.age;
    this.user.passportNumber = this.ticket.passportNumber;
    this.user.seatType = Number(this.ticket.seatType) 

    this.usersArray.push(this.user)
    this.user = new UserData()
    this.ticket = new Ticket();
  }

  RemovePassenger(passportNumber : string){
    this.usersArray = this.usersArray.filter(a => a.passportNumber != passportNumber)
  }

  BookTicket(){
    for(let i = 0; i < this.usersArray.length; i ++){
      this.ticket.userId = Number(localStorage.getItem('userid'))
      this.ticket.inventoryId = this.inventory.inventoryId
      this.ticket.flightNumber = this.inventory.flightNumber
      this.ticket.dateOfJourney = this.inventory.startDate
      this.ticket.fromPlace = this.inventory.fromPlace
      this.ticket.toPlace = this.inventory.toPlace
      this.ticket.cost = this.inventory.ticketCost
      this.ticket.createdBy = Number(localStorage.getItem('userid'))
      this.ticket.modifiedBy = Number(localStorage.getItem('userid'))

      this.ticket.passengerName = this.usersArray[i].name;
      this.ticket.age = this.usersArray[i].age;
      this.ticket.passportNumber = this.usersArray[i].passportNumber;
      this.ticket.seatType = Number(this.ticket.seatType)

      this.tickets.push(this.ticket)
      this.ticket = new Ticket()
    }

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
