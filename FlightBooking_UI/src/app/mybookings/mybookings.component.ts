import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './mybookings.component.html'
})
export class MybookingsComponent implements OnInit {
  myTickets : Array<Ticket> = new Array<Ticket>()

  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.getAllTickets()
  }

  getAllTickets(){
    this._auth.getAllTickets().subscribe(res => {
      this.myTickets = res;
      debugger;
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

}
