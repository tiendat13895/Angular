import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUSer } from '../../interfaces/IUser';
import { NgForm } from '@angular/forms';

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
  fullname = new FormControl('', [
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
  constructor(fb: FormBuilder, private AuthService: AuthService) {
    this.form = fb.group({
      username: this.username,
      fulname: this.fullname,
      password: this.password,
      email: this.email,
      confirmPassword: this.confirmPassword
    }, {
        validator: PasswordValidation.MatchPassword
      });
  }

  ngOnInit() {
  }

  user: IUSer = {
    id: '',
    username: '',
    fullName: '',
    email: '',
    password: '',
    // confirmPassword: '',
  }

  register() {
    this.user.id = this.form.value.username;
    this.user.username = this.form.value.username;
    this.user.fullName = this.form.value.fullname;
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    // this.user.confirmPassword = this.form.value.confirmPassword;

    console.log(this.user);
    this.AuthService.createUser(this.user);
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
