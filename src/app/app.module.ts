import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { InStockPipe } from './pipes/instock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibraryComponent,
    BookComponent,
    SearchComponent,
    DetailsComponent,
    InStockPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
