import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { user } from "../../list";



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  user: user[];

  private url= '../../list.ts'
  characters: Observable<any[]>;
  columns: string[];

  constructor(
    private http: HttpClient
  ) { }
  

  ngOnInit() {
    this.http.get(this.url).subscribe(
      data => {
        this.user = data as user[];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.user[0]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.getuser().subscribe(data => {
      console.log(data);
    })
    
    this.showuser();

  }
  
  showuser(){
    this.http.put(this.url, user);
  }

  getuser(): Observable<any> {
    return this.http.get(this.url);
  }

}

