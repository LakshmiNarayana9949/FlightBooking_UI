import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }