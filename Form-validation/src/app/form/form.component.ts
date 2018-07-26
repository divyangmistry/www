import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { DataTableComponent } from "../data-table/data-table.component";
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
    // private DT: DataTableComponent
  ){
  }
  
  ngOnInit() {
    this.myForm = new FormGroup({
      fname: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      lname: new FormControl('', [<any>Validators.required])
    })

    this.subcribeToFormChanges();
  }

  // save(model: user, isValid: boolean) {
  //   this.submitted = true;
    
  //   const people = {
  //     fname: '',
  //     lname: ''
  //   };
  
  // (<FormGroup>this.myForm)
  // .setValue(people, { onlySelf: true });
  
  // console.log(model, isValid);
  // } 

  save(){
    // this.DT.addusers();
  }
  get formData() {
    return JSON.stringify(this.user);
  }

  showcl(){
    console.log(this.user);
    // this.DT.addusers();
  }

  add(){
    this.adduser = true;
    this.myForm.reset();
  }

  subcribeToFormChanges() {
    const myFormValueChanges$ = this.myForm.valueChanges;
    console.log(this.events) 
    myFormValueChanges$.subscribe(x => this.events
        .push({ event: 'STATUS CHANGED', object: x }));
  }
}
