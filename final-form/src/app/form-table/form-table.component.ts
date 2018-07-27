import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { User } from '../listofusers';
import { of } from 'rxjs';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  users: User[];

  constructor(
    private service: MainService,
  ) { }

  ngOnInit() {
    this.get();
    this.show(User);
  }

  get(){
    this.service.getUsers()    
    .subscribe(user =>{this.users = user});
  }

  show(users){
    this.service.addUsers(users) 
      .subscribe(x=>{this.users.push(x)})
  }

}
