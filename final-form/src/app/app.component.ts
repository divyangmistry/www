import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { User } from './listofusers';
import { MainService } from "./main.service";
import { Observable, of } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  formDekh: Boolean = false;
  users: User[];
  private myForm: FormGroup
  btnSave: Boolean = false;

  constructor(
    private mainService: MainService
    // private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myForm = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required])
    });

    this.get();
  }

  get(){
    this.mainService.getUsers()    
    .subscribe(user =>{this.users = user});
  }

  addUser(){
    
    const user = this.myForm.value;
    // console.log(done);
    this.mainService.addUsers(user)
    .subscribe(x=>{
      this.users.push(x);
    })   
    
  }

  getUserById(user: User): void{
    
    console.log(user);
    this.myForm.patchValue(user);
    this.btnSave = true;
    // this.formDekh = true;
  }

  updateUser(user: User): void{
    // console.log(user);
    let data=Object.assign({},{'id':user.id},this.myForm.value);
      this.mainService.updateUsers(data);
    // console.log(user.id)

    // this.users.forEach((user, index) => {
      
    //   if (user.fname) {
    //     console.log(user.fname)
    //   } else {
        
    //   }

      // if (user.id = index) {
      //   console.log(user.id)
      //   this.mainService.updateUsers(user)        
      // } else {
      //   console.log('inside else !!!')
      // }
    // });
    this.formDekh = false;
    this.btnSave = false;
    this.myForm.reset(this.myForm);
  }

  deleteUser(user: User){
    console.log('Deleted !'+ user.id)
    this.users = this.users.filter(u => u !== user);
    this.mainService.deleteHero(user).subscribe();
  }

}
