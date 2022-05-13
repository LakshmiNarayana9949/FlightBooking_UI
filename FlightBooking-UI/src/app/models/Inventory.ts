import { DatePipe } from "@angular/common"

export class Inventory{
    InventoryId : number = 0   
    FlightNumber : string = ""
    AirLineId : number = 0
    FromPlace : string = ""
    ToPlace : string = ""
    StartDate : DatePipe
    EndDate : DatePipe
    ScheduledDays : number
    Instrument : string
    BClassCount : number
    NBClassCount : number
    TicketCost : number
    Rows : number
    MealType : number
    CreatedBy : number
    CreatedOn : DatePipe
    ModifiedBy : number
    ModifiedOn : DatePipe
}