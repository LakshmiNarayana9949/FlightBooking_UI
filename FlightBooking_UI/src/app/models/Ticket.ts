export class Ticket{
    id : number = 0
    userId : number = 0
    inventoryId : number = 0
    bookingID : string = ""
    ticketID : string = ""        
    flightNumber : string = "" 
    dateOfJourney : Date = new Date()
    fromPlace : string = ""
    toPlace : string = ""
    cost : number = 0
    boardingTime : Date = new Date()
    passengerName : string = "" 
    passportNumber : string = "" 
    age : number = 0
    seatNumber : string = ""
    status : number = 0 
    statusStr : string = ""
    seatType : number = 0
    createdBy : number = 0 
    createdOn : Date = new Date()
    modifiedBy : number = 0 
    modifiedOn : Date = new Date()
}