import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { AddBookComponent } from 'src/app/add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  show: boolean = true;
  @Input() keyword: '';
  @Output() changeKeyword = new EventEmitter<String>();
  @Input() books: IBook[];
  originBooks: IBook[] = [];
  selectedBook: IBook;

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books as IBook[];
      // this.originBooks = books as IBook[];
    });
  }

  showinput() {
    this.show = !this.show;
  }

  search() {
    // alert(this.keyword);
    this.changeKeyword.emit(this.keyword);
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '400px',
      height: '400px',
      data: this.books[0]
    });

    dialogRef.afterClosed().subscribe(book => {
      this.books.push(book);
    });
  }
}
