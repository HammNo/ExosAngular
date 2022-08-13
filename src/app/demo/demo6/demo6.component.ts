import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MinMaxLengthValidator } from 'src/app/shared/length.validator';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  fg! : FormGroup;

  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.builder.group({
      name : [null, Validators.required, MinMaxLengthValidator(4, 10)],
      birthDate : [],
      email : [null, [Validators.required, Validators.email]],
      phone : this.builder.array([])
    })

    // this.fg.addControl(new FormControl("", Validators.required))
  }

  getPhoneArray() : FormArray {
    return this.fg.get("phone") as FormArray
  }

  addPhone(){
    this.getPhoneArray().push(new FormControl(null, [Validators.required, Validators.maxLength(14)]));
  }

  validForm(){
    console.log(this.fg.value);
  }

}
