import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-rectform',
  templateUrl: './rectform.component.html',
  styleUrls: ['./rectform.component.css']
})
export class RectformComponent implements OnInit {
  myReactiveForm!:FormGroup;
  //  myReactiveForm! is starting of reactive forms.It is must,as it is Id of our reactive Form and '!' is used so that
  constructor(private frmbuido:FormBuilder) { }
  submitted=false
    // There are three types of contructors
    // it is used for
  ngOnInit(): void {
    this.myReactiveForm = this.frmbuido.group({
      username:["", Validators.required],
      email:["", [Validators.required],[Validators.email]],
      gender:["",Validators.required],
      contact:["",Validators.required],
      location:["Haryana",Validators.required],
      password:["",Validators.required],
      cpassword:["",Validators.required],
      terms:[false,Validators.required]
      // Here we have to define our controls(name,email etc.)
      //It is in ngOnInit so that it can be loaded on just opening of component
});
}
getdetails()
{
  console.log(this.myReactiveForm.value)
}
get f(){
  return this.myReactiveForm.controls
 };

onSubmit(){
  this.submitted = true;
  if (
    this.myReactiveForm.invalid
  )
  return
}
}
