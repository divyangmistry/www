import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from "../list";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  user: user[];
  private url = './list';

  constructor(
    private http: HttpClient
  ) { }
  

  ngOnInit() {

    this.getusers().subscribe(user => {
      console.log(user);
      this.user = user
    })

  }

  getusers(): Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }

  addusers(): Observable<user[]>{
    return this.http.post<user[]>(this.url, this.users);
  }

  users =
[
    {
        ID: 1,
       First_Name: "Naruto",
        Last_Name: "Usumaki"
        
    },
    {
        ID: 2,
       First_Name: "Sasuke",
        Last_Name: "Uchiha"
    },
    {
        ID: 3,
       First_Name: "Luffy",
        Last_Name: "Monkey D."
    }
];

}

