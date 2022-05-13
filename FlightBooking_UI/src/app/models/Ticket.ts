export class Ticket{
    Id : number = 0
    BookingID : string = ""
    TicketID : string = ""        
    FlightNumber : string = "" 
    DateOfJourney : Date = new Date()
    FromPlace : string = ""
    ToPlace : string = ""
    BoardingTime : Date = new Date()
    PassengerName : string = "" 
    PassportNumber : string = "" 
    Age : number = 0
    SeatNumber : string = ""
    Status : number = 0 
    StatusStr : string = ""
    SeatType : number = 0
    CreatedBy : number = 0 
    CreatedOn : Date = new Date()
    ModifiedBy : number = 0 
    ModifiedOn : Date = new Date()
}