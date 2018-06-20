import { BookService } from '../../shared';
import { Component, OnInit, Inject } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

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
  }

  ngOnInit() {
  }

  addBook(book: IBook) {
    this.bookService.createBook(book);
    this.dialogRef.close();
  }
}
