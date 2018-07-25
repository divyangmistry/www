import { Component, OnInit } from '@angular/core';
// import { user } from "../user";

export class user {
  fname: string;
  lname: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  user: user;
  submitted: boolean = false;
  adduser: boolean = false;

  constructor(){
  }
  
  ngOnInit() {
    this.user = {
      fname: '',
      lname:''
    }
  }

  get formData() {
    return JSON.stringify(this.user);
  }

  showcl(){
    console.log(this.user);
    this.submitted = true;
  }

  add(){
    this.adduser = true;
  }
}
