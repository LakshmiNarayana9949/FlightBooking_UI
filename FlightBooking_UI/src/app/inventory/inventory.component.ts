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
  public Add = true;
  public Edit = false;
  public Cancel = false;
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

  EditClick(id : number){
    this._auth.getInventory(id).subscribe(res => {
      this.inventoryModel = res
      this.ShowEdit()
    },
    err => {
      console.log(err)
    })

  }

  UpdateInventory(){
    this._auth.updateInventory(this.inventoryModel).subscribe(res => {
      this.inventoryModel = new Inventory
      this.ShowAllInventories()
      this.ShowEdit()
    },
    err => {
      console.log(err)
      this.inventoryModel = new Inventory
      this.ShowAllInventories()
      this.ShowEdit()
    })
  }

  RemoveInventory(id : number){
    this._auth.removeInventory(id).subscribe(res => {
      this.ShowAllInventories()
      this.ShowEdit()
    },
    err => {
      console.log(err);
      this.ShowAllInventories()
      this.ShowEdit()
    })
  }

  CancelUpdate(){
    this.inventoryModel = new Inventory()
    this.ShowAdd()
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

  GetAllAirLines(){
    this._auth.getAllAirLines().subscribe(res => {
      this.airLines = res;
    },
    err => {

    })
  }
}
