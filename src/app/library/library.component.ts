import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books = [{
    cover: 'assets/book-cover-1.png',
    title: 'Lap trinh C++'
  }, {
    cover: 'assets/book-cover-3.png',
    title: 'Angular'
  }, {
    cover: 'assets/book-cover-5.png',
    title: 'Front End'
  }, {
    cover: 'assets/book-cover-4.png',
    title: 'MongoDB'
  },{
    cover: 'assets/Book-cover-2.png',
    title: 'NodeJS'
  }, {
      cover: 'assets/Book-cover-2.png',
      title: 'NodeJS'
    }];

  constructor() { }

  ngOnInit() {
  }
  
  down() {
    alert("You want to download?");
  }
}
