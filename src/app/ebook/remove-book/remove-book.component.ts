import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBookComponent } from './../add-book/add-book.component';
import { BookService } from '../../shared';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

  book: IBook;
  constructor(private bookService: BookService, private toastr: ToastrService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
  }

  ngOnInit() {
  }

  removeBook() {
    this.bookService.removeBook(this.book.id);
    this.dialogRef.close();
    this.toastr.success('Successfull!!', 'Remove Book');
  }

  close() {
    this.dialogRef.close();
  }
}
