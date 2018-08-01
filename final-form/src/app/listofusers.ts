import { InMemoryDbService } from "angular-in-memory-web-api";

export class User{
    id: number;
    fname: string;
    lname:string
  // push: any;
}

export class InMemoryDataService implements InMemoryDbService {
    static users: User[];
    createDb() {
      let users = [
        {id: 0, fname: 'Zorro', lname: 'Reborn'},
        {id: 1, fname: 'Naruto', lname: 'Uzumaki'},
        {id: 2, fname: 'Sasuke', lname: 'Uchiha'}
      ];
      return {users};
    }
  }
  