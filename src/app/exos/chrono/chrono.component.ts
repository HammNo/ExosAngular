import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  time : Date = new Date(0);
  stopChrono : boolean = false;
  timer : any;

  constructor() {

  }

  ngOnInit(): void {
  }

  start(): void {
    this.stopChrono = false;
    this.timer = setInterval(() => {
          var date = new Date(this.time);
          date.setSeconds(date.getSeconds() + 1);
          this.time = date;
      }, 1000);
  }

  pause(): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset(): void {
    clearInterval(this.timer);
    this.timer = null;
    this.time = new Date(0);
  }
}
