import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IBook } from './../interfaces/IBook';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnChanges {

  books: IBook[] = []
  originBooks: IBook[] = [];
  selectedBook: IBook;
  @Input() keyword = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  ngOnChanges() {
    // this.searchBook(this.keyword);
  }



  selectBook(book: IBook) {
    this.selectedBook = book;
  }

  // originBooks: IBook[] = [];


  searchBook(keyword: string) {
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }

}
