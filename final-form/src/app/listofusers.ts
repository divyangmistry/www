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
      const users = [
        {id: 1, fname: 'Zorro', lname: 'Reborn'},
        {id: 2, fname: 'Naruto', lname: 'Uzumaki'},
        {id: 3, fname: 'Sasuke', lname: 'Uchiha'}
      ];
      return {users};
    }
  }
  