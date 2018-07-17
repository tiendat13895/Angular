import { IBook } from 'src/app/interfaces/IBook';
import { BookService } from '../../shared';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: IBook = {
    cover: '',
    id: 0,
    url: '',
    instock: true,
    price: 0,
    publishDate: new Date(Date.now()),
    title: '',
    text: ''
  };

  constructor(private bookService: BookService, private toastr: ToastrService,
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
  }

  ngOnInit() {
  }

  editBook(book: IBook) {
    this.bookService.editBook(book);
    this.dialogRef.close(book);
    this.toastr.success('Successfull!!', 'Edit Book');
  }

}
