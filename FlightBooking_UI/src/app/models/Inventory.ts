import { DatePipe } from "@angular/common"

export class Inventory{
    InventoryId : number = 0   
    FlightNumber : string = ""
    AirLineId : number = 0
    FromPlace : string = ""
    ToPlace : string = ""
    StartDate : Date = new Date()
    EndDate : Date = new Date()
    ScheduledDays : number = 0
    Instrument : string = ""
    BClassCount : number = 0
    NBClassCount : number = 0
    TicketCost : number = 0
    Rows : number = 0
    MealType : number = 0
    CreatedBy : number =0
    CreatedOn : Date = new Date()
    ModifiedBy : number = 0
    ModifiedOn : Date = new Date()
}