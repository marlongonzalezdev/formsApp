import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  // form: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0)
  // })

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.min(0), Validators.required]],
    stock: [0, [Validators.min(0), Validators.required]]
  })

  isInvalidField(field:string)
  {
     return this.form.controls[field].errors && this.form.controls[field].touched;
  }

  constructor(private formBuilder: FormBuilder) { }

}
