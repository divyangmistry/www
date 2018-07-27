import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      address: new FormGroup({
          street: new FormControl('', <any>Validators.required),
          postcode: new FormControl('')
      })
    });

    this.subcribeToFormChanges();
  }

  showtable(model: User, isValid: boolean) {
    this.submitted = true;
    
    //var raju : model;

    console.log(model);

    const people = {
      name: '',
      address: {
          street: '',
          postcode: ''
      }
    };
  }
  save(model: User, isValid: boolean) {
    this.submitted = true;
    
    //var raju : model;

    console.log(model);

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

  subcribeToFormChanges() {
    const myFormValueChanges$ = this.myForm.valueChanges; 
    console.log(this.events);
    myFormValueChanges$.subscribe(x => this.events
        .push({ event: 'STATUS CHANGED', object: x }));
  }

//   myFormValueChanges$.subscribe(x => this.raju
//     .push({ event: 'STATUS CHANGED', object: x }));
// }
  }



