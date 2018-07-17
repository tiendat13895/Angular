import { BookService } from '../../shared';
import { Component, OnInit, Inject } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: IBook = {
    cover: '',
    id: 0,
    url: '',
    instock: true,
    price: 0,
    publishDate: new Date(Date.now()),
    title: '',
    text: '',
  };

  constructor(private bookService: BookService, private toastr: ToastrService,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  addBook(book: IBook) {
    this.bookService.createBook(book);
    this.dialogRef.close();
    this.toastr.success('Successfull!!', 'Create Book');
  }
}
