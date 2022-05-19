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
  public Add = true;
  public Edit = false;
  public Cancel = false;
  constructor(private _auth : AuthService, private _route : Router) { }

  ngOnInit(): void {
    this.GetAllAirLines()
  }

  GetAllAirLines(){
    this._auth.getAllAirLines().subscribe(res => {
      this.BuildGrid(res)
    },
    err => {
      console.log(err)
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
      console.log(err)
      this.airLine = new AirLine()
      this.GetAllAirLines()
    })
  }

  EditClick(id : number){
    this._auth.getAirLine(id).subscribe(res => {
      this.airLine = res;
    },
    err => {
      console.log(err);
    })
    this.ShowEdit()
  }

  CancelUpdate(){
    this.airLine = new AirLine()
    this.ShowAdd()
  }

  UpdateAirLine(){
    this._auth.updateAirLine(this.airLine).subscribe(res => {
      this.airLine = new AirLine()
      this.GetAllAirLines()
      this.ShowAdd()
    },
    err => {
      console.log(err)
      this.airLine = new AirLine()
      this.GetAllAirLines()
      this.ShowAdd()
    })
  }

  RemoveAirLine(id : number){
    this._auth.removeAirLine(id).subscribe(res => {
      this.GetAllAirLines()
    },
    err => {
      this.GetAllAirLines()
    })
  }  

  ShowAdd(){
    this.Edit = false;
    this.Cancel = false;
    this.Add = true;
  }

  ShowEdit(){
    this.Edit = true;
    this.Cancel = true;
    this.Add = false;
  }

  // hasError(validator : string, controlname : string): boolean{
  //   return this.airLine.formAirLineGroup.controls[controlname].hasError(validator);
  // }

}
