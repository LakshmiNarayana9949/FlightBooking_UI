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
  successMsg : string = ''
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
    this.airLine.createdBy = Number(localStorage.getItem('userid'))
    this.airLine.modifiedBy = Number(localStorage.getItem('userid'))
    this._auth.addNewAirLine(this.airLine).subscribe(res => {      
      this.airLine = new AirLine()
      this.GetAllAirLines()
    },
    err => {
      this.successMsg = err.error.text;
      this.airLine = new AirLine()
      this.GetAllAirLines()
    })
  }

  hasError(validator : string, controlname : string): boolean{
    return this.airLine.formAirLineGroup.controls[controlname].hasError(validator);
  }

}
