import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  myProp : string = "Contenu venant du parent"
  myProp2 : number = 42

  messageFromChildren! : string

  constructor() { }

  ngOnInit(): void {
  }

  modifValeur(){
    this.myProp = "Autre valeur mise à jour"
  }

  receiveMessage(message : string) {
    this.messageFromChildren = message
  }
}
