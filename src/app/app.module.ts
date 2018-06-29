import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { HeaderComponent, LoginDialogComponent } from './header/header.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './services/authGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // LoginDialogComponent,
    FileNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  entryComponents: [
    // LoginDialogComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
