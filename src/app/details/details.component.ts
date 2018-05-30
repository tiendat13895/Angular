import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from './../interfaces/IBook';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() book: IBook;
  @Output() select = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  down(){
        alert(`You want to buy ${this.book.title.toUpperCase()} book?`);
  }

  selectBook() {
    // console.log(this.book.title);
    this.select.emit(this.book);
  }

}
