import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';

  FirstFormGroup = FormGroup;
  SecondFormGroup = FormGroup;

  constructor(
    private Fb : FormBuilder
  ){}

  ngOnInit(): void {
    this.FirstFormGroup = this.Fb.group({
      name: ['', Validators.required]
    });

    this.SecondFormGroup = this.Fb.group({
      street: ['', Validators.required]
      pincode: ['', Validators.required]
    });
  }
}
