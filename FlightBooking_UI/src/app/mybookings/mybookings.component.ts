import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { Ticket } from '../models/Ticket';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './mybookings.component.html'
})
export class MybookingsComponent implements OnInit {
  myTickets : Array<Ticket> = new Array<Ticket>()

  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
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

}
