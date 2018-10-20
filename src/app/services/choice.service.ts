import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {
  host: string = 'localhost:9090'
  constructor(private http) { }


  addChoice(choice) {
    return this.http.post(this.host, choice);
  }
}
