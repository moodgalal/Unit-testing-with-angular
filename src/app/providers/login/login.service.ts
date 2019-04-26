import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  isAuthenticated : boolean = false;

  isUserAuthenticated()
  {
    return this.isAuthenticated;
  }
}
