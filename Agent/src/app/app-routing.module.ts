import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AgentsComponent } from './agents/agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';

const routes: Routes =[
  {path: '', component: AgentsComponent},
  {path: 'detail/:id', component: AgentDetailsComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
