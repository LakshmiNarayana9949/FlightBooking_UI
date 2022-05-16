export class Inventory{
    inventoryId : number = 0   
    flightNumber : string = ""
    airLineId : number = 0
    airLineName : string = ""
    fromPlace : string = ""
    toPlace : string = ""
    startDate : Date = new Date()
    endDate : Date = new Date()
    scheduledDays : number = 0
    instrument : string = ""
    bClassCount : number = 0
    nBClassCount : number = 0
    ticketCost : number = 0
    rows : number = 0
    mealType : number = 0
    createdBy : number =0
    createdOn : Date = new Date()
    modifiedBy : number = 0
    modifiedOn : Date = new Date()
}