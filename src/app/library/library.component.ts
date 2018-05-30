import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IBook } from './../interfaces/IBook';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnChanges {

  books: IBook[] = []
  originBooks: IBook[]= [{
    cover: 'assets/book-cover-1.png',
    title: 'Lap trinh C++',
    price: 10000,
    instock: true
  }, {
    cover: 'assets/book-cover-3.png',
    title: 'Angular',
    price: 10000,
    instock: true
  }, {
    cover: 'assets/book-cover-5.png',
    title: 'Front End',
    price: 10000,
    instock: true
  }, {
    cover: 'assets/book-cover-4.png',
    title: 'MongoDB',
    price: 10000,
    instock: true
  }, {
    cover: 'assets/Book-cover-2.png',
    title: 'NodeJS',
    price: 10000,
    instock: true
  }, {
    cover: 'assets/Book-cover-2.png',
    title: 'NodeJS',
    price: 10000,
    instock: true
  }];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.searchBook(this.keyword);
  }

  // originBooks: IBook[] = [];
  @Input() keyword = '';

  searchBook(keyword: string) {
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }

}
