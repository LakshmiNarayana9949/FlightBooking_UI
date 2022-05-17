import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Inventory } from '../models/Inventory';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html'
})


export class TicketComponent implements OnInit {
  fromplace : string = ''
  toplace : string = ''
  startdate : Date = new Date()
  inventories : Array<Inventory> = new Array<Inventory>()
  userTicketBookMessage = 'Welcome ' + localStorage.getItem('firstname') + ', ' + 'you can book you tickets here.'
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
    
  }

  ShowFlights(){
    this.inventories = [];
    this._auth.showAllInventoriesWithSearch(this.fromplace, this.toplace, this.startdate).subscribe(res => {
      if(res.length == 0){
        alert("No flights found")
        this.isFlightsAvailable()
      }
      else{
        this.BuildGrid(res)
        this.isFlightsAvailable()
      }
    },
    err => {

    })
  }

  isFlightsAvailable(){
    if(this.inventories.length == 0){
      return false;
    }
    else{
      return true;
    }
  }
  
  BuildGrid(res : any){
    this.inventories = res;
  }

  BookTickets(inventoryId : number){
    localStorage.setItem('inventoryId', inventoryId.toString());
    this._router.navigate(['/ticketbooking'])
  }
}
