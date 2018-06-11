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


  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books as IBook[];
      this.originBooks = books as IBook[];
    });
  }

  ngOnChanges() {
    // this.searchBook(this.keyword);
  }



  // selectBook(book: IBook) {
  //   this.selectedBook = book;
  // }

  // originBooks: IBook[] = [];


  searchBook(keyword: string) {
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }

}
