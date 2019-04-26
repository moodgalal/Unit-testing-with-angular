import { Component, OnInit } from '@angular/core';
import { LoginService } from '../providers/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginService) { }

  ngOnInit() {
  }

  needsLogin() : boolean
  {
    return !this.service.isUserAuthenticated();
  }
}
