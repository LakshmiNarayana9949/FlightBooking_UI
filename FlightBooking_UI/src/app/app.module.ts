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
import { RegistrationComponent } from './registration/registration.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LoginComponent } from './login/login.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ShowticketComponent } from './showticket/showticket.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    TicketComponent,
    AirlineComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    TicketbookingComponent,
    MybookingsComponent,
    ShowticketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,UserComponent,LoginComponent,InventoryComponent,AirlineComponent,TicketComponent,TicketbookingComponent,MybookingsComponent,ShowticketComponent,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }