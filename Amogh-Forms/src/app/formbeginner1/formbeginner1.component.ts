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
  description: string = "";
  name: string = "";
  titleAlert: string="This Field Is Required.";
  formData: any = {};

  constructor(private fb: FormBuilder){

    this.rForm = fb.group({
      'name': [null, Validators.required],
      // 'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      // 'validate': ''
    })
  }

  ngOnInit(){
    //When Component Will init this will get load first.
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if(validate =='1'){
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)])
          this.titleAlert = "You need to Specify 3 characters"
        }
        else{
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }

  addPost(post){
    this.description = post.description;
    this.name = post.name;
    //Creating a JSON Object for the data submitted by the user.
    this.formData = {
      name: post.name,
      description: post.description
    }
    console.log("JSON: ", this.formData);
  }

}
