import { Component, OnInit } from '@angular/core';
import { FakeauthService } from './fakeauth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss'],
  providers : [FakeauthService] //Spécifie que le singleton du service est propre à ce seul composant, le service n'est donc utilisable que la durée de vie du composant
})
export class Demo5Component implements OnInit {

  localIsAuth! : boolean;

  constructor(
    private authService : FakeauthService //Attention, bien passer en paramètre du constructeur, sinon l'injection de dépendance n'est pas terminée avant fin du constructeur!
  ) { }

  ngOnInit(): void {
    console.log("je m'initialise");
    this.localIsAuth = this.authService.isAuth;
  }

  ngOnDestroy(): void {
    console.log("je me détruis");
  }

  connect(){
    this.authService.login();
    this.localIsAuth = this.authService.isAuth;
  }

  disconnect(){
    this.authService.logout();
    this.localIsAuth = this.authService.isAuth;
  }
}
