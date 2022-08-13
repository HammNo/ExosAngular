import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BagManagementService {

  bag : article[] = [];

  constructor() { }

  addArticle(art : string, price : number){
    if(art!="" && !this.bag.find(a => a.name == art) && price > 0){
      this.bag.push(new article(art, 1, Math.round(price * 100) / 100));
    }
  }

  deleteArticle(art : article){
    this.bag.splice(this.bag.findIndex(a => a == art), 1);
  }

  addArtQuant(art : article){
    art.quantity ++;
  }

  reduceArtQuant(art : article){
    if(art.quantity > 0){
      art.quantity --;
      if(art.quantity == 0) this.deleteArticle(art);
    }
  }
}

export class article{

  name! : string;
  quantity! : number;
  price! : number;

  constructor(name : string, quantity : number, price : number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
   }
}
