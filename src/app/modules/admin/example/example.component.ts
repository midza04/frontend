import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommonService} from "../../../services/common.service";
import {PreffixUrl} from "../../../preffix-url.enum";
import {MatStepper} from "@angular/material/stepper";

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit
{
    /**
     * Constructor
     */
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
        firstName: ['', Validators.required],
        otherNames: ['', Validators.required],
        idType: ['', Validators.required]

    });
    gridData: any;


    constructor(private _formBuilder: FormBuilder,
                private _httpClient: HttpClient,
                private common:CommonService,
                )
    {
        this.GetData();
    }

    ngOnInit(): void {
    }
    public GetData(){
        const apiUrl = PreffixUrl.Customers.key + PreffixUrl.Customers.variable
        this.common.getAllData(apiUrl)
        .subscribe(response => {
            console.log(response)
            this.gridData =response;
        })
    }

    public AddCustomer(){
        let data  = this.firstFormGroup.value;
        let API ="https://localhost:44352/api/Customers";
        console.log(data);

        let body = JSON.stringify({
            "id": 0,
            "customerId": 0,
            "firstName": "FromApp",
            "otherNames": "string",
            "surname": "string",
            "sex": "string",
            "passportNumber": "string",
            "idType": "string",
            "idNumber": "string",
            "idTypeI": "string",
            "nrcNumber": "string",
            "dateOfBirth": "2022-10-26T09:40:41.948Z",
            "maritalStatus": "string",
            "workRoomHouseNumber": 0,
            "workBuildingApartmentName": "string",
            "workStreetNumber": 0,
            "workStreetName": "string",
            "workCityTownAreaShortName": "string",
            "workCityTownAreaFullName": "string",
            "workCityTownAreaCode": 0,
            "workDistrictFullname": "string",
            "workDistrictShortname": "string",
            "workProvinceFullname": "string",
            "workProvinceShortname": "string",
            "workCountryFullname": "string",
            "workCountryShortname": "string",
            "workCountryCode": 0,
            "homeRoomHouseNumber": 0,
            "homeBuildingApartmentName": "string",
            "homeStreetNumber": 0,
            "homeStreetName": "string",
            "homeCityTownAreaShortName": "string",
            "homeCityTownAreaFullName": "string",
            "homeCityTownAreaCode": 0,
            "homeDistrictFullname": "string",
            "homeDistrictShortname": "string",
            "homeProvinceFullname": "string",
            "homeProvinceShortname": "string",
            "homeCountryFullname": "string",
            "homeCountryShortname": "string",
            "homeCountryCode": 0,
            "manNumber": "string",
            "nextOfKinNames": "string",
            "nextOfKinPhoneNumber": "string",
            "nextOfKinAddress": "string",
            "dateEntered": "2022-10-26T09:40:41.948Z",
            "dateUpdated": "string",
            "updatedBy": "2022-10-26T09:40:41.948Z",
            "enteredBy": "string",
            "additionalField1": "string"
        });
        this._httpClient.post(API,body ,{
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })})
            .subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
    }


    goToManage(stepper:MatStepper,index) {
        let detail = this.gridData[index];
        this.secondFormGroup.patchValue({
            secondCtrl: [detail.firstName],
            firstName: [''],
            otherNames: [''],
            idType: ['']
        })
        console.log(detail);
        stepper.next();

    }
}
