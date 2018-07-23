import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { InMemoryDataService } from "./agentlist";
import { Observable } from 'rxjs';
import { Agent } from './agentlist';
import { catchError, map, tap } from 'rxjs/operators';
// import { url } from 'inspector';

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

  deleteAgents(agent:Agent): Observable<Agent>{
    const id = typeof agent === 'number' ? agent: agent.id;
    const url = `${this.agentsUrl}/${id}`;
    return this.http.delete<Agent>(url,httpOptions);
  }

  getAgent(id: number): Observable<Agent> {
    const url = `${this.agentsUrl}/${id}`;
    return this.http.get<Agent>(url);
  }

  showdetailsofAgents(id: number): Observable<Agent>{
    const url = ``;
    return this.http.get<Agent>(url)
  }

}
