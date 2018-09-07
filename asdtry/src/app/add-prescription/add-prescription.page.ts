import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParamS } from '../param-s';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.page.html',
  styleUrls: ['./add-prescription.page.scss'],
})
export class AddPrescriptionPage {

  setMedicine: FormGroup;

  constructor(
    private FB: FormBuilder,
    private route: Router,
    private params: ParamS
  ) { 
    this.setMedicine = this.FB.group({
      medicine: ['', Validators.required]
    })
  }

  send(){
    this.params.medicines = this.setMedicine.controls.medicine.value,
    this.route.navigateByUrl('address');
  }

}
