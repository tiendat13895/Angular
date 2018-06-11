import { Component, OnInit, Input, Inject, } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { BookService } from './../services/book.service';
import { AddBookComponent } from 'src/app/add-book/add-book.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

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

  removeBook() {
    
    this.bookService.removeBook(this.book.id).subscribe(data => {
      this.dialogRef.close(this.book.id);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
