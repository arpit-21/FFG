import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbeginner0',
  templateUrl: './formbeginner0.component.html',
  styleUrls: ['./formbeginner0.component.css']
})
export class Formbeginner0Component implements OnInit {
  rForm: FormGroup;
  formSubmitted: boolean = false;

  name: string = "";
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
  dateAlert: string = "Please Enter Date as Number*";
  monthAlert: string = "Please Enter Month as Number*";
  yearAlert: string = "Please Enter Year as Number*";
  radioButtonAlert: string = "Please Select A Gender*";

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])],
      'customerID': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])],
      'day': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      'month': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      'year': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      'gender': ['Male'],
      'voterID': [null, Validators.pattern('^[a-zA-Z0-9/]+$')],
      'maritalStatus': ['Single'],
      'fatherName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])],
      'motherName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])],
      'spouseName': [null, Validators.pattern('^[a-zA-Z ]*$')],
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

  addPost() {
    console.log(this.rForm.value);
    this.formSubmitted = true;
  }

  displayForm() {
    this.formSubmitted = false;
  }
}
