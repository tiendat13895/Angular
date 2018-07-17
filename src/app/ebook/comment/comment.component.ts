import { Component, OnInit, Inject } from '@angular/core';
import { IComment } from '../../interfaces/IComment';
import { CommentService } from '../../shared/services/comment.service';
import { ToastrService } from 'ngx-toastr';
import { IBook } from '../../interfaces/IBook';
import { BookService } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { RemoveCommentComponent } from '../remove-comment/remove-comment.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment1: IComment = {
    id: 0,
    bookid: 0,
    username: '',
    comment: '',
    datetime: 0,
  };
  constructor(private commentService: CommentService, private toastr: ToastrService, private activeRoute: ActivatedRoute, private dialog: MatDialog) { }


  originComments: IComment[] = [];
  comment: IComment = {
    id: 0,
    bookid: 0,
    username: '',
    comment: '',
    datetime: 0,
  };
  commentstr: string;
  showdelete: boolean = false;

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];

    const observer = {
      next: function (data) {
        this.comments = data;
        this.originComments = data;
      }.bind(this),
      error: function (err) {
        console.log(err);
      }.bind(this)
    };
    this.commentService.comments.subscribe(observer);
    this.commentService.getComments(id);

    if (localStorage.getItem('username') == "admin") { this.showdelete = true }
  }

  addComment() {
    this.comment.bookid = this.activeRoute.snapshot.params['id'];
    this.comment.username = localStorage.getItem('username');
    this.comment.comment = this.commentstr;
    this.comment.datetime = Date.now();
    this.commentService.createComment(this.comment);
    this.toastr.success('Successfull!!', 'Comment');
  }

  openRemoveBookDialog(removeCmt: IComment) {
    const dialogRef = this.dialog.open(RemoveCommentComponent, {
      width: '400px',
      height: '200px',
      data: removeCmt
    });
  }
}
