import { Injectable } from '@angular/core';
import { Geek } from 'src/app/models/geek.model';

@Injectable({
  providedIn: 'root'
})
export class GkMngService {

  geeksList : Geek[] = [
    {name : 'Client Eastwood', birthDate : new Date(), email : "cleast@mail.be", moviesList : ['Unforgivable', 'Grand Torino'], avatar : 'https://fr.web.img2.acsta.net/pictures/15/10/15/16/51/136406.jpg'},
    {name : 'Brad Pitt', birthDate : new Date(), email : "brpi@mail.be", moviesList : ['Fight Club', 'Once Upon a Time in Hollywood', 'Troy'], avatar : 'https://fr.web.img2.acsta.net/pictures/20/02/10/10/37/1374948.jpg'},
    {name : 'Melanie Laurent', birthDate : new Date(), email : "mela@mail.be", moviesList : ['Inglorious Bastards', "Je vais bien ne t'en fais pas", 'Paris'], avatar : 'https://medias.unifrance.org/medias/99/251/129891/format_page/media.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
    document.getElementById('showBtn')?.click();
    console.log(document.getElementById('showBtn'));
  }

  addGeek(gk : Geek){
    if(gk != null){
      this.geeksList.push(gk);
    }
  }

  removeGeek(name : string){
    if(name){
      this.geeksList.splice(this.geeksList.findIndex(gk => gk.name == name), 1);
    }
  }
}
