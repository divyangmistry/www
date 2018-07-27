import { InMemoryDbService } from "angular-in-memory-web-api";

export class User{
    fname: string;
    lname:string
  push: any;
}

export class InMemoryDataService implements InMemoryDbService {
    static users: User[];
    createDb() {
      const users = [
        {fname: 'Zorro', lname: 'Reborn'},
        {fname: 'Naruto', lname: 'Uzumaki'},
        {fname: 'Sasuke', lname: 'Uchiha'}
      ];
      return {users};
    }
  }
  