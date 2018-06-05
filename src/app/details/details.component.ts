import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from './../interfaces/IBook';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() book: IBook;
  @Output() select = new EventEmitter<any>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // down(){
  //       alert(`You want to buy ${this.book.title.toUpperCase()} book?`);
  // }

  selectBook(book: IBook) {
    // console.log(this.book.title);
    if(this.authService.user.username === 'dat'){
      this.select.emit(this.book);
    }
  }

}
