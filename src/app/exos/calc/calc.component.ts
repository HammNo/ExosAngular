import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  nbr1 : string = "0";
  nbr2 : string = "0";

  constructor() { }

  ngOnInit(): void {
  }

  add(): string {
    if (!isNaN(parseInt(this.nbr1)) && !isNaN(parseInt(this.nbr2))){
      return (parseInt(this.nbr1) + parseInt(this.nbr2)).toString();
    }
    else return "erreur";
  }

}
