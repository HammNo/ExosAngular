import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-geek-management',
  templateUrl: './geek-management.component.html',
  styleUrls: ['./geek-management.component.scss']
})
export class GeekManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('showBtn')?.click();
  }
}
