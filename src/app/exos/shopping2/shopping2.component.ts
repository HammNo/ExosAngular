import { Component, OnInit } from '@angular/core';
import { article, BagManagementService } from './bag-management.service';

@Component({
  selector: 'app-shopping2',
  templateUrl: './shopping2.component.html',
  styleUrls: ['./shopping2.component.scss']
})
export class Shopping2Component implements OnInit {

  currentAName : string = "";
  currentAPrice : string = "";

  constructor(
    private bagService : BagManagementService
  ) { }

  ngOnInit(): void {
  }

  add(){
    let price = parseFloat(this.currentAPrice);
    if(!isNaN(price)) this.bagService.addArticle(this.currentAName, price);
  }

  getBag(): article[] {
    return this.bagService.bag;
  }

  delete(art : article){
    this.bagService.deleteArticle(art);
  }

  addQuant(art : article){
    this.bagService.addArtQuant(art);
  }

  reduceQuant(art : article){
    this.bagService.reduceArtQuant(art);
  }

}
