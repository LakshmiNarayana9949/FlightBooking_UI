import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userdetails',
    component: UserComponent
  },
  {
    path: 'airline',
    component: AirlineComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'ticketbooking',
    component: TicketbookingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }