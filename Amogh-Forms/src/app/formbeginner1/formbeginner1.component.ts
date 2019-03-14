import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbeginner1',
  templateUrl: './formbeginner1.component.html',
  styleUrls: ['./formbeginner1.component.css']
})
export class Formbeginner1Component implements OnInit {
  rForm: FormGroup;
  post: any;
  formData: any = {};
  formSubmitted: boolean = false;

  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  customerID: string = "";
  day: string = "";
  month: string = "";
  year: string = "";
  gender: string = "";

  dates: number[] = [];
  monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];


  titleAlert: string = "This Field Is Required*";
  alphabeticAlert: string = "This Field Is required. Only Alphabetic characters are allowed*";
  customerIDAlert: string = "This Field Is required. Only AlphaNumeric characters are allowed*";
  dateAlert: string = "Please Select Date*";
  monthAlert: string = "Please Select Month*";
  yearAlert: string = "Please Select Year*";
  radioButtonAlert: string = "Please Select A Gender*";

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'middleName': [null, Validators.pattern('^[a-zA-Z]*$')],
      'lastName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'customerID': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])],
      'day': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      'month': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.pattern('^((?!Month+).)*$')])],
      'year': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      'gender' : ['Male'],
      'voterID': [null, Validators.pattern('^[a-zA-Z0-9/]+$')],
      'maritalStatus': ['Single'],
      'fatherFirstName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'fatherMiddleName' : [null, Validators.pattern('^[a-zA-Z]*$')],
      'fatherLastName' : [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'motherMaidenName' : [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'spouseFirstName': [null, Validators.pattern('^[a-zA-Z]*$')],
      'spouseMiddleName': [null, Validators.pattern('^[a-zA-Z]*$')],
      'spouseLastName': [null, Validators.pattern('^[a-zA-Z]*$')],
    })

    //Filling The Date Array
    for (let i = 1; i <= 31; i++) {
      this.dates.push(i);
    }

    for (let i = 1900; i <= 2020; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
  }

  addPost(post) {
    console.log(this.rForm.value);
    this.formSubmitted = true;
  }

}
