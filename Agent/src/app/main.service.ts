import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Agent } from './agentlist';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private agentsUrl = 'api/agents';

  constructor(
    private http: HttpClient
  ) { }

  getAgents(): Observable<Agent[]>{
    return this.http.get<Agent[]>(this.agentsUrl)
  }

  addAgents(agent: Agent): Observable<Agent>{
    return this.http.post<Agent>(this.agentsUrl, agent,httpOptions)
  }

  deleteAgents(id: number): Observable<Agent>{
    // const id = typeof agent === 'number' ? agent: agent.id;
    const url = `${this.agentsUrl}/${id}`;
    return this.http.delete<Agent>(url,httpOptions);
  }

  getAgent(id: number): Observable<Agent> {
    const url = `${this.agentsUrl}/${id}`;
    return this.http.get<Agent>(url);
  }

  // trypro = new Promise((resolve,reject) => {
  //   resolve(console.log('Inside the Reject'));
  //   reject(console.log('Inside the Reject'));
  // });
}
