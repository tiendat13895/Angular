import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IBook } from './../interfaces/IBook';
import { BookService } from './../services/book.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnChanges {

  // books: IBook[] = []
  @Input() books: IBook[];
  originBooks: IBook[] = [];
  selectedBook: IBook;
  @Input() keyword = '';
  // @Input() keyword : string = '';


  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit() {
    const observer = {
      next: function (data) {
        this.books = data;
        this.originBooks = data;
      }.bind(this),
      error: function (err) {
        console.log(err);
      }.bind(this)
    };
    this.bookService.books.subscribe(observer);
    this.bookService.getBooks();
  }

  ngOnChanges() {
  }



  // selectBook(book: IBook) {
  //   this.selectedBook = book;
  // }

  // originBooks: IBook[] = [];


  onSearch(keyword: string) {
    // console.log("1");
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }
}
