import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../interfaces/IComment';
import { CommentService } from '../../shared/services/comment.service';
import { ToastrService } from 'ngx-toastr';
import { IBook } from '../../interfaces/IBook';
import { BookService } from '../../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService, private toastr: ToastrService, private bookService: BookService, private activeRoute: ActivatedRoute) { }

  originComments: IComment[] = [];
  book: IBook;
  comment: IComment = {
    id: 0,
    bookid: 0,
    username: '',
    comment: '',
    datetime: 0,
  };
  commentstr: string;

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
  }


  addComment() {
    // console.log(id);
    this.comment.bookid = this.activeRoute.snapshot.params['id'];
    this.comment.username = localStorage.getItem('username');
    this.comment.comment = this.commentstr;
    this.comment.datetime = Date.now();
    this.commentService.createComment(this.comment);
    this.toastr.success('Successfull!!', 'Comment');
  }

}
