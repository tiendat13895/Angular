import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../shared';
import { IBook } from '../../interfaces/IBook';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  show: boolean = true;
  @Input() keyword: string = '';
  @Output() keywordChange = new EventEmitter<String>();
  @Input() books: IBook[];
  originBooks: IBook[] = [];
  selectedBook: IBook;

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit() {
    const observer = {
      next: function (data) {
        this.books = data;
      }.bind(this),
      error: function (err) {
        console.log(err);
      }.bind(this)
    };
    this.bookService.books.subscribe(observer);
    this.bookService.getBooks();
  }

  showinput() {
    this.show = !this.show;
  }

  onChange(key: string) {
    this.keywordChange.emit(key);
    console.log(key)
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '400px',
      height: '400px'
    });
  }
}
