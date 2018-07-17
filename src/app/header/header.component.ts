import { Component, OnInit, Inject } from '@angular/core';
import { IUSer } from './../interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: Observable<IUSer>;
  constructor(private AuthService: AuthService, public dialog: MatDialog, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.user = this.AuthService.user;
  }

  logout() {
    this.router.navigateByUrl('/auth');
    this.toastr.success('Successfull!!', 'Logout');
    localStorage.clear();
  }
}