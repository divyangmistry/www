import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { User } from '../listofusers';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  user: User[];

  constructor(
    private service: MainService,
    private http: HttpClient
  ) {
    this.get();
   }

  ngOnInit() {
  }

  get(){
    this.service.getuser().subscribe(user =>{this.user = user});
  }

  

}
