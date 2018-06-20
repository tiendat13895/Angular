import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  confirmPassword = new FormControl('', [
    Validators.required
  ]);
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: this.username,
      password: this.password,
      email: this.email,
      confirmPassword: this.confirmPassword
    }, {
        validator: PasswordValidation.MatchPassword
      });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.form.value);
  }

}


export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
    } else {
      console.log('true');
      return;
    }
  }
}
