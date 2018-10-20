import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host: string = 'localhost:9090'
  constructor(private http:HttpClient) { }

  login(user) {
    return this.http.post(this.host + '/login', user);
  }
  register(user)
  {
    return this.http.post(this.host + '/register', user);
  }
}
