import { Component, OnInit } from '@angular/core';
import { AirLine } from '../models/AirLine';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html'
})
export class AirlineComponent implements OnInit {
  adminAirLineCreateMessage : string = 'Hey Admin, wecome to AirLines. Do you want to add a new AirLine...?'
  constructor() { }

  ngOnInit(): void {
  }

}
