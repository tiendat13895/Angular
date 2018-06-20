import { IBook } from 'src/app/interfaces/IBook';
import { BookService } from '../../shared';
import { Component, OnInit, Inject } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: IBook = {
    cover: '',
    id: 0,
    instock: true,
    price: 0,
    publishDate: new Date(Date.now()),
    title: ''
  };

  constructor(private bookService: BookService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
  }

  ngOnInit() {
  }

  editBook(book: IBook) {
    this.bookService.editBook(book);
    this.dialogRef.close(book);
  }

}
