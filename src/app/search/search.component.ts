import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  show : boolean = true;
  keyword: String = '';
  constructor() { }

  ngOnInit() {
  }

  search() {
    alert(this.keyword);
    this.show = !this.show;
  }
}
