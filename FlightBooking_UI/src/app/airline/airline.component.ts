import { Component, OnInit } from '@angular/core';
import { AirLine } from '../models/AirLine';
import { AuthService } from '../services/auth.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html'
})
export class AirlineComponent implements OnInit {
  airLine : AirLine = new AirLine()
  airLines : Array<AirLine> = new Array<AirLine>()
  airLineMsg : string = 'Hello Admin, here are your Air Lines'
  constructor(private _auth : AuthService, private _route : Router) { }

  ngOnInit(): void {
    this.GetAllAirLines()
  }

  GetAllAirLines(){
    this._auth.getAllAirLines().subscribe(res => {
      this.BuildGrid(res)
    },
    err => {

    })
  }

  BuildGrid(res : any){
    this.airLines = res;
  }

  AddNewAirLine(){
    this._auth.addNewAirLine(this.airLine).subscribe(res => {
      this._route.navigate(['/airline'])
    },
    err => {

    })
  }

}
