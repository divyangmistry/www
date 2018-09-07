import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCallsService } from '../providers/api-calls.service';
import { Sql } from '../providers/sql';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  profileForm: FormGroup;
  public profile: any = {
  };
  data: any;
  name: any;
  email: any;
  mobile: any;
  
  constructor(
    private FB: FormBuilder,
    private service: ApiCallsService,
    private sql: Sql
  ){
    this.profileForm = this.FB.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required]
    })
    
  }
  ionViewWillEnter(){
    this.get();
    // this.update();
  }

  get() {
    this.sql.get('user').then((data) => {
      this.name = JSON.parse(data).name
      this.email = JSON.parse(data).email
      this.mobile = JSON.parse(data).mobile
      this.profileForm.patchValue({ mobile:this.mobile, name:this.name, email:this.email });
    })    
    
    // this.service.getData().subscribe(
    //   (res) => {
    //     this.profile = res;
    //     this.profileForm.patchValue(this.profile);
    //   }
    // )
  }

  update(){
    debugger
    let data = Object.assign({}, this.profileForm.value)
    console.log(data);
    this.service.update(data).subscribe((res) => {
      // this.sql.set('user',JSON.stringify(res));
      // console.log(res);
    })
    this.sql.set('user', JSON.stringify(this.profileForm.value));
  }

}
