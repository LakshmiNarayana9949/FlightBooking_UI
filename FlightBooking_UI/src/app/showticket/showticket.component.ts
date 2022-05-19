import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AirLine } from '../models/AirLine';
import { AirlineComponent } from '../airline/airline.component';
import { Inventory } from '../models/Inventory';

@Component({
  templateUrl: './showticket.component.html'
})
export class ShowticketComponent implements OnInit {
  ticket : Ticket = new Ticket()
  tickets : Array<Ticket> = new Array<Ticket>()
  airLine : AirLine = new AirLine()
  airLines : Array<AirLine> = new Array<AirLine>()
  inventory : Inventory = new Inventory()
  inventories : Array<Inventory> = new Array<Inventory>()
  airLineName : string = ''

  constructor( private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.showTicketDetails()
  }

  showTicketDetails(){
    this._auth.getTicketInfo(String(localStorage.getItem('ticketid'))).subscribe(res =>{
      this.tickets = res;      
      this.ticket = this.tickets[0]

      this.getAirLineName()
      this._router.navigate(['/ticketdetails'])
    },
    err => {
      console.log(err)
    })
  }

  getAirLineName(){    
    this._auth.showAllInventories().subscribe(res => {
      this.inventories = res;
      this.inventory = this.inventories.find(x => x.inventoryId == this.ticket.inventoryId) || new Inventory()

      this._auth.getAllAirLines().subscribe(res => {
        this.airLines = res;
        this.airLine = this.airLines.find(a => a.airlineId == this.inventory.airLineId) || new AirLine()
        this.airLineName = this.airLine.name;
      },
      err => {
        console.log(err)
      })

    },
    err => {
      console.log(err)
    })
  }

}
