import { BookService } from '../../shared';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-showpdf',
  templateUrl: './showpdf.component.html',
  styleUrls: ['./showpdf.component.css']
})
export class ShowpdfComponent implements OnInit {
  pageurl: SafeResourceUrl;
  book: IBook = {
    cover: '',
    id: 0,
    url: '',
    instock: true,
    price: 0,
    publishDate: new Date(Date.now()),
    title: ''
  };

  constructor(private domSanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ShowpdfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
  }

  ngOnInit() {
    // console.log(this.book);
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.book.url);
  }
}
