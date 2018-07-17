import { EditBookComponent } from './../edit-book/edit-book.component';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveBookComponent } from '../remove-book/remove-book.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() book: IBook;
  @Output() remove = new EventEmitter<any>();
  isBackdrop = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showBackdrop() {
    if (!this.isBackdrop && localStorage.getItem('username') == "admin") {
      this.isBackdrop = true;
    }
  }

  hideBackdrop() {
    if (this.isBackdrop && localStorage.getItem('username') == "admin") {
      this.isBackdrop = false;
    }
  }

  openEditBookDialog(editbook: IBook) {
    const dialogRef = this.dialog.open(EditBookComponent, {
      width: '400px',
      height: '600px',
      data: editbook
    });
  }

  openRemoveBookDialog(removeBook: IBook) {
    const dialogRef = this.dialog.open(RemoveBookComponent, {
      width: '400px',
      height: '200px',
      data: removeBook
    });
  }
}
