import { Component, OnInit, Inject } from '@angular/core';
import { IUSer } from './../interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: Observable<IUSer>;
  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(LoginDialogComponent, {
  //     width: '250px',
  //     height: '400px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.authService.login(result.username, result.password);
  //   });
  // }

}


// @Component({
//   selector: 'app-login-dialog',
//   templateUrl: './login.dialog.html',
// })
// export class LoginDialogComponent {

//   username: string;
//   password: string;

//   constructor(
//     public dialogRef: MatDialogRef<LoginDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   login() {
//     if (this.username && this.password) {
//       this.dialogRef.close({ username: this.username, password: this.password });
//     }
//   }
// }
