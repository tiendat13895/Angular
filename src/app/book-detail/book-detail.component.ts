import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: IBook;
  constructor(private bookService: BookService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.bookService.getBook(id).subscribe((data) => {
      this.book = data as IBook;
    });
  }

}
