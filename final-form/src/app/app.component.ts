import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { User } from './listofusers';
import { MainService } from "./main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  private myForm: FormGroup
  private mainService: MainService
  people: User;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myForm = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required])
    });
  }

  addUser(){

    const done = this.myForm.value;
    this.mainService.addUsers(done).subscribe(x=> this.user .push(done));

    // console.log(user)
    // // this.mainService.updateUsers(user)
    // this.mainService.addUsers(user as User)
    // .subscribe(users =>
    //   {this.user.push(users)})
  }

}
