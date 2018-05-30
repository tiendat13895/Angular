import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  show: boolean = true;
  @Input() keyword: String = '';
  @Output() changeKeyword = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  showinput() {
    this.show = !this.show;
  }

  search() {
    // alert(this.keyword);
    this.changeKeyword.emit(this.keyword);
  }
}
