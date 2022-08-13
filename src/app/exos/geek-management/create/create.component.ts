import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Geek } from 'src/app/models/geek.model';
import { GeekManagementComponent } from '../geek-management.component';
import { GkMngService } from '../gk-mng.service';
import { Router } from '@angular/router';
import { AgeValidator } from 'src/app/shared/age.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  geekForm! : FormGroup;
  currentGeek! : Geek;

  constructor(
    private builder : FormBuilder,
    private gkService : GkMngService,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    this.geekForm = this.builder.group({
      name : [null, Validators.required],
      birthDate : [null, [Validators.required, AgeValidator(18)]],
      email : [null, [Validators.required, Validators.email]],
      avatar : [null],
      movies : this.builder.array([])
    })
  }

  getMoviesArray() : FormArray {
    return this.geekForm.get("movies") as FormArray;
  }

  addMovie(){
    this.getMoviesArray().push(new FormControl(null, [Validators.required, Validators.maxLength(20)]));
  }

  removeMovie(){
    this.getMoviesArray().removeAt(this.getMoviesArray.length - 1);
  }

  validForm(){
    this.currentGeek = {
      name : this.geekForm.value['name'],
      birthDate : this.geekForm.value['birthDate'],
      email : this.geekForm.value['email'],
      avatar : this.geekForm.value['avatar'],
      moviesList : this.geekForm.value['movies']
    };
    this.gkService.addGeek(this.currentGeek);
    this.router.navigate(['exos/geek_mng/show'])
  }
}
