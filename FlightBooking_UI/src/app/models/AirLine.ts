import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"

export class AirLine{
    airlineId : number = 0
    logoPath : string = ""
    name : string = ""
    address : string = ""  
    contactNumber : string = ""
    createdBy : number = 0   
    createdOn : Date = new Date() 
    modifiedBy : number = 0 
    formAirLineGroup : FormGroup;

    constructor(){
        var _builder = new FormBuilder()
        this.formAirLineGroup = _builder.group({})

        var validationCollection = []
        validationCollection.push(Validators.required)
        validationCollection.push(Validators.pattern("^[0-9]*$"))

        this.formAirLineGroup.addControl("namecontrol", new FormControl('', Validators.required))
        this.formAirLineGroup.addControl("phonecontrol", new FormControl('', Validators.compose(validationCollection)))
    }
}