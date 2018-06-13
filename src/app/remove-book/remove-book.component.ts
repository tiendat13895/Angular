import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBookComponent } from './../add-book/add-book.component';
import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

  book: IBook;
  constructor(private bookService: BookService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
  }

  ngOnInit() {
  }

  removeBook(book) {
    this.bookService.removeBook(this.book.id);
    this.dialogRef.close(book);
  }

  close() {
    this.dialogRef.close();
  }
}
