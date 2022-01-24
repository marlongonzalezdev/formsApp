import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  @ViewChild('form') form!: NgForm

  initForm =
    {
       product: '',
       productPrice: 0,
       productStock: 0
    }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.form)
    this.form.resetForm({
      product: '',
      productPrice: 0,
      productStock:0
    });
  }

  isValidName(): boolean
  {
    return this.form?.controls['product']?.invalid && this.form?.controls['product']?.touched;
  }

  isInvalidPrice(): boolean
  {
    return this.form?.controls['productPrice']?.value < 0 && this.form?.controls['productPrice']?.touched;
  }
}
