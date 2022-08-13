import { Component, OnInit } from '@angular/core';
import { Geek } from 'src/app/models/geek.model';
import { GkMngService } from '../gk-mng.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  providers: [ConfirmationService]
})
export class ShowComponent implements OnInit {

  localGkList! : Geek[];

  constructor(
    private gkService : GkMngService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.localGkList = this.gkService.geeksList;
  }

  removeGk(name : string){
    if(name){
      this.confirmationService.confirm({
        key: name,
        acceptLabel : 'Oui',
        rejectLabel : 'Non',
        message: 'Etes-vous sûr de vouloir supprimer le geek?',
        accept: () => {
          this.gkService.removeGeek(name);
        }
    });
    }
  }

}
