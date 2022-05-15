import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html'
})


export class TicketComponent implements OnInit {
  userTicketBookMessage = 'Welcome ' + localStorage.getItem('firstname') + ', ' + 'you can book you tickets here.'
  constructor() { }

  ngOnInit() {
  }

}
