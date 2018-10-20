import { Component, OnInit } from '@angular/core';
import { User } from '../entities/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  added:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  cancel()
  {
    this.newUser=new User();
  }
  register()
  {
    this.authService.register(this.newUser).subscribe(res=>{
      this.added=true;
    })
  }

}
