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
  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  customerID: string = "";
  dob: string ="";
  gender: string="";
  titleAlert: string="This Field Is Required*";
  alphabeticAlert: string="This Field Is required. Only Alphabetic characters are allowed*";
  customerIDAlert: string = "This Field Is required. Only AlphaNumeric characters are allowed*";
  formData: any = {};

  constructor(private fb: FormBuilder){

    this.rForm = fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'middleName': [null],
      'lastName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      'customerID': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])],
      'dob' : [null, Validators.required],
      'gender' : ['']
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
    this.firstName = post.firstName;
    if(post.middleName)
        this.middleName = post.middleName;
    this.lastName = post.lastName;
    this.customerID = post.customerID;
    this.dob = post.dob;
    this.gender = post.gender;
    //Creating a JSON Object for the data submitted by the user.
    this.formData = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      customerID: this.customerID,
      dob: this.dob,
      gender: this.gender,
    }
    console.log("JSON: ", this.formData);
  }

}
