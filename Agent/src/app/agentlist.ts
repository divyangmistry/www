import { InMemoryDbService } from "angular-in-memory-web-api";

export class Agent {
  id: number;
  name: string;
}

export class InMemoryDataService implements InMemoryDbService {
  static agents: Agent;
  createDb() {
    const agents = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {agents};
  }
}