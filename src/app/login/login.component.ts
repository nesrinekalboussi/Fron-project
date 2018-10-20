import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../entities/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  required: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.user.login === null || this.user.login === undefined) {
      this.required = true;
    } else {
      this.authService.login(this.user).subscribe(response => {
        console.log(response)
        //let jwtToken = response.headers.get('Authorization');
        this.router.navigate(['/list-vote']);
      })
    }
  }
  register() {
    this.router.navigate(['/register']);
  }

}
