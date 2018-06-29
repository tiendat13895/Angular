import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUSer } from '../../interfaces/IUser';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUSer;
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    const id = form.value.username;
    this.AuthService.getUser(id).subscribe((data) => {
      this.user = data as IUSer;
      if (this.user.username == form.value.username && this.user.password == form.value.password) {
        alert("Login Success!!!")
        // this.router.navigateByUrl('/library');
        this.router.navigate(['/']);
        this.AuthService.login(form.value.username, form.value.password);
      }
      else {
        alert("Login Fail!!!")
      }
    });
  }

}
