import { Component, OnInit } from '@angular/core';
import { InMemoryDataService, Agent } from "../agentlist";
import { MainService } from "../main.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents: Agent[];

  constructor(
    private service: MainService
  ) { }

  ngOnInit(){
    this.getAgents();
  }

  getAgents(): void {
    this.service.getAgents()
    .subscribe((agents)=>{
      this.agents = agents
    });
  }


  add(name: string): void{
    console.log('there it got added !!!');
    this.service.addAgents({name} as Agent)
    .subscribe(agent => {
      this.agents.push(agent);
    });
  }

  delete(agent: Agent): void{
    this.agents = this.agents.filter(a => a !== agent);
    this.service.deleteAgents(agent).subscribe();
  }
}


