import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { user } from "../user";

export class user {
  name: string;
  street: string;
  postode: number
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  user: user;
  adduser: boolean = false;
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(
    private _fb: FormBuilder
  ){
  }
  
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      address: new FormGroup({
          street: new FormControl('', <any>Validators.required),
          postcode: new FormControl('')
      })
    })

    this.subcribeToFormChanges();
  }

  save(model: user, isValid: boolean) {
    this.submitted = true;
    
    const people = {
      name: '',
      address: {
          street: '',
          postcode: ''
      }
    };
  
  (<FormGroup>this.myForm)
  .setValue(people, { onlySelf: true });
      
  console.log(model, isValid);
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

  subcribeToFormChanges() {
    const myFormValueChanges$ = this.myForm.valueChanges; 
    myFormValueChanges$.subscribe(x => this.events
        .push({ event: 'STATUS CHANGED', object: x }));
  }
}
