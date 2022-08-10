import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dem4-child',
  templateUrl: './dem4-child.component.html',
  styleUrls: ['./dem4-child.component.scss']
})
export class Dem4ChildComponent implements OnInit {

  @Input() fromParent! : string;
  @Input() numberFromParent! : number;

  @Output() messageEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message : string) {
    this.messageEvent.next(message)
  }
}
