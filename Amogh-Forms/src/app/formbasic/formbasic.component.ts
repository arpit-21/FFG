import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbasic',
  templateUrl: './formbasic.component.html',
  styleUrls: ['./formbasic.component.css']
})
export class FormbasicComponent implements OnInit {
  rForm: FormGroup;
  formSubmitted: boolean = false;

  name: string = "";
  fatherName: string = "";
  motherName: string = "";
  day: string = "";
  month: string = "";
  year: string = "";
  gender: string = "";
  mobileNumber: string = "";

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null],
      'day': [null],
      'month': [null],
      'year': [null],
      'gender': ['Male'],
      'fatherName': [null],
      'motherName': [null],
      'mobileNumber': [null]
    })

  }

  ngOnInit() {
  }

  addPost() {
    console.log(this.rForm.value);
    this.formSubmitted = true;
  }

  displayForm() {
    this.formSubmitted = false;
	  this.rForm.reset();
  }

}
