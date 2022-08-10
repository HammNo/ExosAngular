import { Component, OnInit } from '@angular/core';
import { FakeauthService } from '../demo/demo5/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //déclaration de propriété nullable ("?")
  text? : string;

  nbr : number = 5;
  date : Date = new Date();
  booleen : boolean = true;

  client1 : Client = { id : 1, name : "toto"};

  isAuth! : boolean;

  constructor(
    private authService : FakeauthService
  ) {
    this.text = "defaultVal";
   }


  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }

}

export class Client{
  id! : number;
  name! : string;
}
