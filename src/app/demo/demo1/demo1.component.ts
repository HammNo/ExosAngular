import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  name : string = "toto";

  constructor() { }

  ngOnInit(): void {
  }

  public changeName(value : string) : void {
    this.name = value;
  }

}
