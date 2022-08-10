import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  visible : boolean = false;

  list : string[] = ["Steven Seagal", "David Carradine", "Clint Eastwood"]

  val : string = "blabla";

  constructor() { }

  ngOnInit(): void {
  }

  switchVisible(): boolean {
    return this.visible = !this.visible;
  }

}
