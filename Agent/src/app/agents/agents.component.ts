import { Component, OnInit } from '@angular/core';
import { agentlist, Agent } from "../agentlist";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  agents =  agentlist;
  
  ngOnInit(){
    this.getAgents();
  }

  ngOnInit() {
  }

  onSelect(agents: Agent){
    this.selectedAgent = agents;
  }

}
