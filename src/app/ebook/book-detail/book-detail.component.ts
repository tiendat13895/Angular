import { BookService } from '../../shared';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowpdfComponent } from '../showpdf/showpdf.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: IBook;
  constructor(private bookService: BookService, private activeRoute: ActivatedRoute, public dialog: MatDialog) { }
  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.bookService.getBook(id).subscribe((data) => {
      this.book = data as IBook;
    });
  }


  openPDFshowDialog(pdfbook: IBook) {
    const dialogRef = this.dialog.open(ShowpdfComponent, {
      width: '800px',
      height: '950px',
      data: pdfbook
    });
  }
}