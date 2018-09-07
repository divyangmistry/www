import { Injectable } from '@angular/core';
import { lists } from '../../app/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list = lists;

  constructor(
  ) {

  }

  show(){
    this.list;
  }

  add(data){
    this.list.push(data);  
  }

  delete(x){
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] == x) {
        this.list.splice(i, 1);
      }
    }
  }

}
