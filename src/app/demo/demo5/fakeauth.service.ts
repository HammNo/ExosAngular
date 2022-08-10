import { Injectable } from '@angular/core';

@Injectable({
  //signifie que injecté en tant que singleton
  providedIn: 'root'
})
export class FakeauthService {

  isAuth! : boolean;

  constructor() { }

  login(){
    this.isAuth = true;
  }

  logout(){
    this.isAuth = false;
  }
}
