import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TicketComponent } from './ticket/ticket.component';
import { AuthService } from './services/auth.service';
import { AirlineComponent } from './airline/airline.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    TicketComponent,
    AirlineComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }