import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
  ) {
  }

  list: any = [
    { id: 0, name: 'Batman', age: 21, strength: 'Night' },
    { id: 1, name: 'Superman', age: 23, strength: 'Muscle' },
    { id: 2, name: 'Flash', age: 19, strength: 'Speed' },
    { id: 3, name: 'Aquaman', age: 25, strength: 'Water' }
  ];

  show() {
    return this.list;
  }

  push(data) {
    this.list.push(data);
  }

  delete(x) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] == x) {
        this.list.splice(i, 1);
      }
    }
  }
}
