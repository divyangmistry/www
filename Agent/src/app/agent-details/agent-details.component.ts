import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agentlist';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {
 

  @Input() agent: Agent;

  constructor(
    private route: ActivatedRoute,
    private service: MainService,
    private location: Location
  ) { }

  ngOnInit() : void{
    this.getAgent();
  }

  getAgent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getAgent(id)
      .subscribe(agent => this.agent = agent);
  }

  goBack(): void{
    this.location.back();
  }
}
