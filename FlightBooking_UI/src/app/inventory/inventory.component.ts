import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './inventory.component.html'
})

export class InventoryComponent implements OnInit {
  
  adminInventoryCreateMessage : string = 'Hey Admin, wecome. Do you want to schedule a flight...?'
  constructor() { }

  ngOnInit() {
  }

  AddNewInventory(){
    
  }

}
