import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './inventory.component.html'
})

export class InventoryComponent implements OnInit {
  
  adminInventoryCreateMessage : string = 'Hey Admin, wecome. Do you want to schedule a flight...?'
  inventoryModel : Inventory = new Inventory()
  inventories : Array<Inventory> = new Array<Inventory>()
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
    this.ShowAllInventories()
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
    this.inventoryModel.ScheduledDays = Number(this.inventoryModel.ScheduledDays)
    this.inventoryModel.MealType = Number(this.inventoryModel.MealType)

    this._auth.addNewInventory(this.inventoryModel).subscribe(res => {
      console.log(res)
    },
    err => {
      console.log(err)
    })
  }
}
