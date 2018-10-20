import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VoteService {
  host: string = 'localhost:9090'
  constructor(private http: HttpClient) { }

  addVote(vote) {
    return this.http.post(this.host + '/vote', vote);
  }

  loadAll() { return this.http.get(this.host + '/vote') }
}
