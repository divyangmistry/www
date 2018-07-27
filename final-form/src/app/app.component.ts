import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { User } from './listofusers';
import { MainService } from "./main.service";
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  
  users: User[];
  private myForm: FormGroup

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
    .subscribe(x=>{this.users.push(x)})
    this.mainService.updateUsers(user);
  }

  editUser(user: User): void {
    
    console.log(user);
    // this.mainService.getUser(id)
      // .subscribe(user => user);
  }

  deleteUser(user: User){
    console.log('Deleted !'+ user.id)
    this.users = this.users.filter(u => u !== user);
    this.mainService.deleteHero(user.id).subscribe();
  }

}
