import { Component, OnInit } from '@angular/core';
import { Agent } from "../agentlist";
import { MainService } from "../main.service";
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents: Agent[];

  constructor(
    private service: MainService,
    private router: Router
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

  showdetails(id): void{
    console.log('there showing on different page !!!');
    this.router.navigateByUrl(`/detail/${id}`);
  }

  delete(agent: Agent): void{
    console.log('there it got deleted !!!');
    this.agents = this.agents.filter(a => a !== agent);
    this.service.deleteAgents(agent).subscribe();
  }

  
}


