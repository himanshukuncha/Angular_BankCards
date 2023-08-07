import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  signupForm!: FormGroup;

  constructor() {}

  number = '';
  date = '';
  name = '';
  cvv = '';

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        cardnumber: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
        date: new FormControl(null, {
          validators: [Validators.required],
        }),
        cardholder: new FormControl(null, [Validators.required]),
        cvv: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ]),
      }),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
