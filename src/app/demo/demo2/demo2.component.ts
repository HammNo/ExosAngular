import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  prop1 : string = "Bellmondo";
  prop2 : number = 13;
  prop3 : Date = new Date();
  eur : number = 5.54;

  constructor() { }

  ngOnInit(): void {
  }

}
