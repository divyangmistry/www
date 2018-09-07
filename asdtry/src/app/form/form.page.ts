import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { ListService } from "../service/list.service";
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  addForm: FormGroup;

  constructor(
    public FB: FormBuilder,
    public route: Router,
    public toastCtrl: ToastController,
    public service: ListService,
    public navCtrl: NavController,
    public toast: ToastService
  ) {
    this.addForm = this.FB.group({
      name: ['',Validators.required],
      age: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  submit(){
    let data = this.addForm.value;
    this.toast.submitToast();
    this.service.add(data);
    this.navCtrl.navigateRoot('/home');
  }
}
