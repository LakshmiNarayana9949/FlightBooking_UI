import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router, Routes } from '@angular/router';
import { AirLine } from '../models/AirLine';

@Component({
  templateUrl: './inventory.component.html'
})

export class InventoryComponent implements OnInit {
  
  inventoryMsg : string = 'Hey Admin, here are your Inventories.'
  inventoryModel : Inventory = new Inventory()
  inventories : Array<Inventory> = new Array<Inventory>()
  airLines : Array<AirLine> = new Array<AirLine>()
  successMsg : string = ''
  constructor(private _auth : AuthService) { }

  ngOnInit() {
    this.ShowAllInventories()
    this.GetAllAirLines()
  }

  ShowAllInventories(){
    this._auth.showAllInventories().subscribe(res => {
      console.log(res)
      this.BuildGrid(res)
    },
    err => {
      console.log(err)
    })
  }

  BuildGrid(res : any){
    debugger;
    this.inventories = res;
  }

  AddNewInventory(){
    this.inventoryModel.scheduledDays = Number(this.inventoryModel.scheduledDays)
    this.inventoryModel.mealType = Number(this.inventoryModel.mealType)
    this.inventoryModel.airLineId = Number(this.inventoryModel.airLineId)
    this.inventoryModel.avlbleBClassCount = this.inventoryModel.bClassCount
    this.inventoryModel.avlbleNBClassCount = this.inventoryModel.nBClassCount
    this.inventoryModel.createdBy = Number(localStorage.getItem('userid'))
    this.inventoryModel.modifiedBy = Number(localStorage.getItem('userid'))

    this._auth.addNewInventory(this.inventoryModel).subscribe(res => {
      this.inventoryModel = new Inventory()
      this.ShowAllInventories()

    },
    err => {
      console.log(err)
      this.inventoryModel = new Inventory()
      this.ShowAllInventories()
    })
  }

  GetAllAirLines(){
    this._auth.getAllAirLines().subscribe(res => {
      this.airLines = res;
    },
    err => {

    })
  }
}
