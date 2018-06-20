import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Janeto EBook';
  // @Input() keyword = '';
  // @Output() key = new EventEmitter<String>();
  // keyword = '';

  // ngOnInit() {
  //   console.log(this.keyword);
  // }


  // change(keyword) {
  //   // this.key = keyword;
  //   console.log(this.keyword);
  //   // console.log(this.keyword);
  // }
}
