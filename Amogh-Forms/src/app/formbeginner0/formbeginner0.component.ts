import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbeginner0',
  templateUrl: './formbeginner0.component.html',
  styleUrls: ['./formbeginner0.component.css']
})
export class Formbeginner0Component implements OnInit {
  rForm: FormGroup;
  post: any;
  Name: string = "";
//  middleName: string = "";
//  lastName: string = "";
  customerID: string = "";
  dob: string ="";
  day: string ="";
  month: string="";
  year: string="";
  gender: string="";
  voterId: string="";
  maritalStatus: string= "";
  fatherName: string="";
  motherName: string="";
  spouseName: string="";
  titleAlert: string="This Field Is Required*";
  alphabeticAlert: string="This Field Is required. Only Alphabetic characters are allowed*";
  customerIDAlert: string = "This Field Is required. Only AlphaNumeric characters are allowed*";
  voterIDAlert: string= "This Field is required. Only Alphanumric and '/' characters are allowed*"
  formData: any = {};

  constructor(private fb: FormBuilder){

    this.rForm = fb.group({
      'Name': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      //'middleName': [null],
      //'lastName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'customerID': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])],
      'dob' : [null, Validators.required],
      'day' : [null],
      'month':[null],
      'year': [null],
      'gender' : [''],
      'voterId': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9/]*$')])],
      'maritalStatus':[null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'fatherName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'motherName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'spouseName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])]
      // 'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      // 'validate': ''
    })
  }

  ngOnInit(){
    //When Component Will init this will get load first.
    // this.rForm.get('validate').valueChanges.subscribe(
    //   (validate) => {
    //     if(validate =='1'){
    //       this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)])
    //       this.titleAlert = "You need to Specify 3 characters"
    //     }
    //     else{
    //       this.rForm.get('firstName').setValidators(Validators.required);
    //     }
    //     this.rForm.get('firstName').updateValueAndValidity();
    //   }
    // )
  }

  addPost(post){
    this.Name = post.Name;
    //if(post.middleName)
    //    this.middleName = post.middleName;
    //this.lastName = post.lastName;
    this.customerID = post.customerID;
    this.dob = post.dob;
    this.day = post.day;
    this.month=post.month;
    this.year = post.year;
    this.gender = post.gender;
    this.voterId = post.voterId;
    this.maritalStatus=post.maritalStatus;
    this.fatherName = post.fatherName;
    this.motherName = post.motherName;
    this.spouseName = post.spouseName;
    //Creating a JSON Object for the data submitted by the user.
    this.formData = {
      Name: this.Name,
      //middleName: this.middleName,
      //lastName: this.lastName,
      customerID: this.customerID,
      dob: this.dob,
      day: this.day,
      month: this.month,
      year: this.year,
      gender: this.gender,
      voterId : this.voterId,
      maritalStatus:this.maritalStatus,
      fatherName : this.fatherName,
      motherName : this.motherName,
      spouseName : this.spouseName
    }
    console.log("JSON: ", this.formData);
  }

}
