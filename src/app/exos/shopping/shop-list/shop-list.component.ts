import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input() currentArt! : string;

  articles : string[] = [];

  // @Output() listEvent : EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  addArticle(art : string){
    this.articles.push(art);
  }

  deleteArticle(art : string){
    this.articles.splice(this.articles.indexOf(art), 1);
  }

}
