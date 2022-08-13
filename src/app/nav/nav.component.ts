import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  prevSelect? : Link;
  links! : Link[];

  constructor() { }

  ngOnInit(): void {
    this.links = [
      {title : 'Home', url : 'home'},
      {title : 'Demos', children : [
        {title : 'Demo1', url : 'demo/demo1'},
        {title : 'Demo2', url : 'demo/demo2'},
        {title : 'Demo3', url : 'demo/demo3'},
        {title : 'Demo4', url : 'demo/demo4'},
        {title : 'Demo5', url : 'demo/demo5'},
        {title : 'Demo6', url : 'demo/demo6'},
        {title : 'Demo7', url : 'demo/demo7'},
      ]},
      {title : 'Exercices', children : [
        {title : 'Chronomètre', url : 'exos/chrono'},
        {title : 'Calculatrice', url : 'exos/calc'},
        {title : 'Shopping', url : 'exos/shopping'},
        {title : 'Shopping2', url : 'exos/shopping2'},
        {title : 'GeeksList', url : 'exos/geek_mng'},
      ]},
    ]
  }

  public toggleChildVisible(lk : Link) : void{
    lk.isChildrenVisible = !lk.isChildrenVisible;
  }

  public toggleSelected(lk : Link) : void{
    if(!lk.selected){
      if(this.prevSelect) this.prevSelect.selected = false;
      if(!lk.children){
        lk.selected = true;
        this.prevSelect = lk;
      }
    }
    else{
      if(this.prevSelect != lk) lk.selected = false;
    }
  }
}
