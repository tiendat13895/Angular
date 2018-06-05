import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent, LoginDialogComponent } from './header/header.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InStockPipe } from './pipes/instock.pipe';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { MatDialogModule } from '@angular/material/dialog';
import { BookFilterPipe } from './pipes/bookfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibraryComponent,
    BookComponent,
    SearchComponent,
    DetailsComponent,
    InStockPipe,
    LoginDialogComponent,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
