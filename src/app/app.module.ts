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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BookFilterPipe } from './pipes/bookfilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { RouterModule } from '@angular/router';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { JtcClassComponent } from './jtc-class/jtc-class.component';


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
    BookFilterPipe,
    AddBookComponent,
    EditBookComponent,
    RemoveBookComponent,
    FileNotFoundComponent,
    BookDetailComponent,
    JtcClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '', component: LibraryComponent
      },
      {
        path: 'book/:id', component: BookDetailComponent
      }, {
        path: 'class', component: JtcClassComponent
      }, {
        path: '**', component: FileNotFoundComponent
      }])
  ],
  entryComponents: [
    LoginDialogComponent,
    AddBookComponent,
    EditBookComponent,
    RemoveBookComponent
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
